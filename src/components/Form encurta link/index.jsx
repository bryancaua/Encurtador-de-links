import { useState } from "react";
import { ButtonEncurtaLink } from "../button encurta link";
import { InputModalLink } from "../Input modal";
import "../Input modal/input-modal-estilos.css";
import "./form-encurta-link-style.css";
import { LinkCurto } from "../linkCurto";

export function EncurtaLinkModal() {
  const [linkCurto, setLinkCurto] = useState("");

  async function aoSubmeter(formData) {
    const url = formData.get("urlGrande");

    if (!url) return;

    try {
      const resposta = await fetch("https://encurtador-de-link-backend.onrender.com/encurtar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
    
    const dados = await resposta.json();
    setLinkCurto(dados.linkCurto)
    } catch (erro) {
      console.error("Erro ao conectar com o servidor:", erro);
    }
  }

  return (
    <form className="form-encurtar-link" action={aoSubmeter}>
      <h2 className="h2-encurtar-link">🔗 Encurtador de Links</h2>
      <p className="p-encurtar-link">
        Transforme URLs longas em links curtos e práticos.
      </p>
      <InputModalLink
        className="input-encurtar-link"
        type="url"
        name="urlGrande"
        id="urlGrande"
        placeholder="Cole sua URL"
      />

      <ButtonEncurtaLink />

      <LinkCurto url={linkCurto} />
    </form>
  );
}

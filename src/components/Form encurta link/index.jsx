import { useState } from "react";
import { ButtonEncurtaLink } from "../button encurta link";
import { InputModalLink } from "../Input modal";
import "../Input modal/input-modal-estilos.css";
import "./form-encurta-link-style.css";
import { LinkCurto } from "../linkCurto";

export function EncurtaLinkModal() {
  //Colocar no Form action e criar objeto com formData para capturar esses dados

  const [linkCurto, setLinkCurto] = useState("");

  function aoSubmeter(formData) {
    const url = formData.get("urlGrande");

    if (!url) return;

    const codigoFalso = Math.random().toString(36).substring(2, 8);
    const resultado = `http://localhost:3000/${codigoFalso}`;

    setLinkCurto(resultado);
    console.log(resultado);
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

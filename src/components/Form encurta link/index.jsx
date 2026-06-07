import { ButtonEncurtaLink } from "../button encurta link";
import { InputModalLink } from "../Input modal";
import "../Input modal/input-modal-estilos.css";
import "./form-encurta-link-style.css";

export function EncurtaLinkModal() {
  return (
    <form className="form-encurtar-link">
      <h2 className="h2-encurtar-link">🔗 Encurtador de Links</h2>
      <p className="p-encurtar-link">
        Transforme URLs longas em links curtos e práticos.
      </p>
      <InputModalLink
        className="input-encurtar-link"
        type="url"
        name=""
        id=""
        placeholder="Cole sua URL"
      />

      <ButtonEncurtaLink />
    </form>
  );
}

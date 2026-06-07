export function EncurtaLinkModal() {
  return (
    <div className="div-encurtar-link">
      <h2 className="h2-encurtar-link">🔗 Encurtador de Links</h2>
      <p className="p-encurtar-link">
        Transforme URLs longas em links curtos e práticos.
      </p>
      <input
        className="input-encurtar-link"
        type="url"
        name=""
        id=""
        placeholder="Cole sua URL"
      />
      <button className="encurtar-link-bttn">
        <strong>Encurtar Link</strong>
      </button>
    </div>
  );
}

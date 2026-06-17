import "./link-curto-style.css";

export function LinkCurto({url}) {
  return (
    <div className="containerLink">
      <p>Aqui está seu link curto:</p>
      <a href={url} target="_blank" rel="noreferrer" className="urlCurta">{url}</a>
    </div>
  );
}

import "./App.css";
import "./components/Input modal/input-modal-estilos.css";
import { EncurtaLinkModal } from "./components/Form encurta link";

function App() {
  return (
    <main>
      <header>
        <h1 className="header-text">Bem-vindo ao encurtador de links</h1>
      </header>

      <EncurtaLinkModal />
    </main>
  );
}

export default App

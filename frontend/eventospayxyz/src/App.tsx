import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Eventos from './pages/Eventos';
import GlobalStyles from './styles/GlobalStyles'; // Importe os estilos globais

function App() {
  return (
    <>
      <GlobalStyles /> {/* Aplica os estilos globais */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Eventos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import HakkimizdaPage from "./pages/HakkimizdaPage";
import IsBirliklerimizPage from "./pages/IsBirliklerimizPage";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HakkimizdaPage />} />
      <Route path="/hakkimizda" element={<HakkimizdaPage />} />
      <Route path="/isbirliklerimiz" element={<IsBirliklerimizPage />} />
    </Routes>
  );
}

export default App;

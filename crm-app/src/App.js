import { Routes, Route } from "react-router-dom";
import "./App.css";
import RegistrationPage from "./pages/RegistrationPage";
import MainComponent from "./components/MainComponent.jsx";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<RegistrationPage />} />
      <Route path="step2" />
      <Route path="step3" />
      <Route path="result" />
    </Routes>
  );
}

export default App;

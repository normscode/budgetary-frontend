import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Login";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;

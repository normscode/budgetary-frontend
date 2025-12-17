import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import Homepage from "./pages/HomePage";
import TransactionPage from "./pages/TransactionPage";
import BudgetsPage from "./pages/BudgetsPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/" element={<Homepage />}>
        <Route index element={<DashboardPage />} />
        <Route path="transactions" element={<TransactionPage />} />
        <Route path="budgets" element={<BudgetsPage />} />
      </Route>
    </Routes>
  );
}
export default App;

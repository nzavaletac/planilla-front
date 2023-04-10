import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./components/Planilla/Home/Home";
import { LoginPage } from "./pages/LoginPage";
import "./App.css";

export const App = () => {
  function PrivateRoute({ children }) {
    const token = localStorage.getItem("token");
    return !token ? <Navigate to="/" /> : children;
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/home/*"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

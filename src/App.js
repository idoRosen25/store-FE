import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
};

export default App;

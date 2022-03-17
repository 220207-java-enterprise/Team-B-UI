import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

// components
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import ReimbursementListComponent from "./Components/ReimbursementListComponent";
import CreateReimbursementComponent from "./Components/CreateReimbursementComponent";

function App() {
  return (
    <Router>
        <HeaderComponent />
        <Routes>
          <Route
            path="/reimbursements"
            element={<ReimbursementListComponent />}
          />
          <Route
            path="/add-reimbursement"
            element={<CreateReimbursementComponent />}
          />
        </Routes>
        <FooterComponent />
      </Router>
  );
}

export default App;
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReimbursementList from "./components/ReimbursementList";
import CreateReimbursement from "./components/NewReimbursementForm";

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route
            path="/reimbursements"
            element={<ReimbursementList />}
          />
          <Route
            path="/add-reimbursement"
            element={<CreateReimbursement />}
          />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
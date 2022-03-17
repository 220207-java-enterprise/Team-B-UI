import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import ReimbursementListComponent from "./Components/ReimbursementListComponent";
import UserComponent from "./Components/UserComponent";
import CreateReimbursementComponent from "./Components/CreateReimbursementComponent";
function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path="/users" element={<UserComponent />} />
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
    </div>
  );
}

export default App;

import {
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
    <>
      <Header />
      <Routes>
        <Route
          path="/reimbursements"
          element={<ReimbursementList />}
        />
        <Route
          path="/reimbursements/create"
          element={<CreateReimbursement />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
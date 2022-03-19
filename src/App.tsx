import {
  Routes,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

// components
<<<<<<< HEAD
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import ReimbursementListComponent from "./Components/ReimbursementListComponent";
import CreateReimbursementComponent from "./Components/CreateReimbursementComponent";
import UserListComponent from "./Components/UserListComponent";
import CreateUserComponent from "./Components/CreateUserComponent";
import ActivateUserComponent from "./Components/ActivateUserComponent";
import DeleteUserComponent from "./Components/DeleteUserComponent";
import LoginComponent from "./Components/LoginComponent";

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
          <Route
            path="/users"
            element={<UserListComponent />}
          />
          <Route
            path="/add-user"
            element={<CreateUserComponent />}
          />
          <Route
            path="/activate-user"
            element={<ActivateUserComponent />}
          />
          <Route
            path="/delete-user"
            element={<DeleteUserComponent />}
          />
          <Route
            path="/login"
            element={<LoginComponent/>}
          />
        </Routes>
        <FooterComponent />
      </Router>
=======
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
>>>>>>> ebed8fa0fa30e08938dfbfa3f5bf679d36d316c6
  );
}

export default App;
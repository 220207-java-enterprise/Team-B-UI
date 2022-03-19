import {
  Routes,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

// components
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import ReimbursementListComponent from "./components/ReimbursementList";
import NewReimbursementForm from "./components/NewReimbursementForm";
import UserListComponent from "./components/UserListComponent";
import CreateUserComponent from "./components/CreateUserComponent";
import ActivateUserComponent from "./components/ActivateUserComponent";
import DeleteUserComponent from "./components/DeleteUserComponent";
import LoginComponent from "./components/LoginComponent";

function App() {
  return (
    <>
        <HeaderComponent />
        <Routes>
          <Route
            path="/reimbursements"
            element={<ReimbursementListComponent />}
          />
          <Route
            path="/reimbursements/create"
            element={<NewReimbursementForm />}
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
    </>
  );
}

export default App;
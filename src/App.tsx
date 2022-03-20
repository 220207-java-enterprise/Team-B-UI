import {
  Routes,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

// components
import Header from "./components/Header";
import ReimbursementList from "./components/ReimbursementList";
import NewReimbursementForm from "./components/NewReimbursementForm";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import ActivateUser from "./components/ActivateUser";
import DeleteUser from "./components/DeleteUser";
import Login from "./components/LoginForm";
import Footer from "./components/Footer";

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
          element={<NewReimbursementForm />}
        />
        <Route
          path="/users"
          element={<UserList />}
        />
        <Route
          path="/users/add"
          element={<CreateUser />}
        />
        <Route
          path="/users/activate"
          element={<ActivateUser />}
        />
        <Route
          path="/users/delete"
          element={<DeleteUser />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
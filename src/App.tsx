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
import PendingList from "./components/PendingList";
import ApprovedList from "./components/ApprovedList";
import DeniedList from "./components/DeniedList";
import LodgingList from "./components/LodgingList";
import TravelList from "./components/TravelList";
import FoodList from "./components/FoodList";
import OtherList from "./components/OtherList";
import MyReimbursementList from "./components/MyReimbursementList";

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
        <Route
          path="/reimbursements/pending"
          element={<PendingList />}
        />
        <Route
          path="/reimbursements/approved"
          element={<ApprovedList />}
        />
        <Route
          path="/reimbursements/denied"
          element={<DeniedList />}
        />
        <Route
          path="/reimbursements/lodging"
          element={<LodgingList />}
        />
        <Route
          path="/reimbursements/travel"
          element={<TravelList />}
        />
        <Route
          path="/reimbursements/food"
          element={<FoodList />}
        />
        <Route
          path="/reimbursements/other"
          element={<OtherList />}
        />
        <Route
          path="/myreimbursements"
          element={<MyReimbursementList />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
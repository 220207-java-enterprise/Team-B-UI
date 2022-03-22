import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// components
import Header from "./temp_components/Header";
import ReimbursementList from "./temp_components/ReimbursementList";
import NewReimbursementForm from "./temp_components/NewReimbursementForm";
import UserList from "./temp_components/UserList";
import CreateUser from "./temp_components/CreateUser";
import ActivateUser from "./temp_components/ActivateUser";
import DeleteUser from "./temp_components/DeleteUser";
import LoginForm from "./temp_components/LoginForm";
import Footer from "./temp_components/Footer";
import PendingList from "./temp_components/PendingList";
import ApprovedList from "./temp_components/ApprovedList";
import DeniedList from "./temp_components/DeniedList";
import LodgingList from "./temp_components/LodgingList";
import TravelList from "./temp_components/TravelList";
import FoodList from "./temp_components/FoodList";
import OtherList from "./temp_components/OtherList";
import MyReimbursementList from "./temp_components/MyReimbursementList";
import UpdateStatus from "./temp_components/UpdateStatus";
import Update from "./temp_components/Update";
import Resolved from "./temp_components/Resolved";
import Home from "./temp_components/Home";
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie] = useCookies();

  return (
    <>
      <Header cookies={cookies} />
      <Routes>
        <Route path="/" element={<Home cookies={cookies} />} />

        <Route
          path="/reimbursements"
          element={<ReimbursementList cookies={cookies} />}
        />
        <Route
          path="/reimbursements/create"
          element={<NewReimbursementForm cookies={cookies} />}
        />

        <Route
          path="/myreimbursements"
          element={<MyReimbursementList cookies={cookies} />}
        />

        <Route path="/myreimbursements/update" element={<Update cookies={cookies} />} />

        <Route path="/users" element={<UserList />} />
        <Route path="/users/add" element={<CreateUser />} />
        <Route path="/users/activate" element={<ActivateUser />} />
        <Route path="/users/delete" element={<DeleteUser />} />
        <Route path="/login" element={<LoginForm setCookie={setCookie} />} />
        <Route
          path="/reimbursements/pending"
          element={<PendingList token={cookies.token as string} />}
        />
        <Route
          path="/reimbursements/approved"
          element={<ApprovedList token={cookies.token as string} />}
        />
        <Route
          path="/reimbursements/denied"
          element={<DeniedList token={cookies.token as string} />}
        />
        <Route
          path="/reimbursements/lodging"
          element={<LodgingList token={cookies.token as string} />}
        />
        <Route
          path="/reimbursements/travel"
          element={<TravelList token={cookies.token as string} />}
        />
        <Route
          path="/reimbursements/food"
          element={<FoodList token={cookies.token as string} />}
        />
        <Route
          path="/reimbursements/other"
          element={<OtherList token={cookies.token as string} />}
        />

        <Route path="/reimbursements/status" element={<UpdateStatus />} />

        <Route path="/reimbursements/resolved" element={<Resolved />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

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
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";
import PendingList from "./components/PendingList";
import ApprovedList from "./components/ApprovedList";
import DeniedList from "./components/DeniedList";
import LodgingList from "./components/LodgingList";
import TravelList from "./components/TravelList";
import FoodList from "./components/FoodList";
import OtherList from "./components/OtherList";
import MyReimbursementList from "./components/MyReimbursementList";
import UpdateStatus from "./components/UpdateStatus";
import Update from "./components/Update";
import Resolved from "./components/Resolved";
import Home from "./components/Home";
import { useCookies } from "react-cookie";

function App() {
  const [cookies] = useCookies();
  console.log(cookies);
  console.log('-------------')
  
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />} 
        />
        
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
          element={<LoginForm />}
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
        <Route
          path="/reimbursements/status"
          element={<UpdateStatus />}
        />
        <Route
          path="/myreimbursements/update"
          element={<Update />}
        />
        <Route
          path="/reimbursements/resolved"
          element={<Resolved />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
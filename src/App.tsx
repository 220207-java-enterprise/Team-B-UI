import {
  Routes,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

// components
import Header from "./temp/Header";
import ReimbursementList from "./temp/ReimbursementList";
import NewReimbursementForm from "./temp/NewReimbursementForm";
import UserList from "./temp/UserList";
import CreateUser from "./temp/CreateUser";
import ActivateUser from "./temp/ActivateUser";
import DeleteUser from "./temp/DeleteUser";
import LoginForm from "./temp/LoginForm";
import Footer from "./temp/Footer";
import PendingList from "./temp/PendingList";
import ApprovedList from "./temp/ApprovedList";
import DeniedList from "./temp/DeniedList";
import LodgingList from "./temp/LodgingList";
import TravelList from "./temp/TravelList";
import FoodList from "./temp/FoodList";
import OtherList from "./temp/OtherList";
import MyReimbursementList from "./temp/MyReimbursementList";
import UpdateStatus from "./temp/UpdateStatus";
import Update from "./temp/Update";
import Resolved from "./temp/Resolved";
import Home from "./temp/Home";
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
          element={<ReimbursementList token={(cookies.token as string)} />}
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
          element={<PendingList token={(cookies.token as string) } />}
        />
        <Route
          path="/reimbursements/approved"
          element={<ApprovedList token={(cookies.token as string) }/>}
        />
        <Route
          path="/reimbursements/denied"
          element={<DeniedList token={(cookies.token as string) }/>}
        />
        <Route
          path="/reimbursements/lodging"
          element={<LodgingList token={(cookies.token as string) }/>}
        />
        <Route
          path="/reimbursements/travel"
          element={<TravelList token={(cookies.token as string) }/>}
        />
        <Route
          path="/reimbursements/food"
          element={<FoodList token={(cookies.token as string) }/>}
        />
        <Route
          path="/reimbursements/other"
          element={<OtherList token={(cookies.token as string) }/>}
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
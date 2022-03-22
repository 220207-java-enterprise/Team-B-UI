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

// const mainHeader = classNames('')

function App() {
  const [cookies, setCookie] = useCookies();
  
  return (
    <>
      <Header cookies={cookies} />
      <Routes>
        <Route
          path="/"
          element={<Home cookies={cookies} />} 
        />
        
        <Route
          path="/reimbursements"
          element={<ReimbursementList cookies={cookies} />}
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
          path="/signup"
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
          element={<LoginForm setCookie={setCookie}/>}
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
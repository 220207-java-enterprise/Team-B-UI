import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";

import { useCookies } from "react-cookie";
import Reimbursements from "./pages/Reimbursements";
import Login from "./pages/Login";

function App() {
  const [cookies, setCookie] = useCookies();

  return (
    <>
      <Header cookies={cookies} />
      <Routes>
        <Route path="/" element={<Home cookies={cookies} />} />
        <Route path="/login" element={<Login setCookie={setCookie} />} />
        <Route path="/reimbursements" element={<Reimbursements cookies={cookies} />} />
        
        
        
        {/* <Route path="/" element={<Home cookies={cookies} />} />

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

        <Route path="/reimbursements/resolved" element={<Resolved />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

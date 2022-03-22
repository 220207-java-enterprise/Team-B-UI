import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Users from "./pages/Users";
import Reimbursements from "./pages/Reimbursements";

import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie, destroyCookie] = useCookies();

  return (
    <>
      <Header cookies={cookies} destroyCookie={destroyCookie}/>
      <Routes>
        <Route path="/" element={<Home cookies={cookies} />} />
        <Route path="/login" element={<Login setCookie={setCookie} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/users" element={<Users cookies={cookies} />} />
        <Route path="/reimbursements" element={<Reimbursements cookies={cookies} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

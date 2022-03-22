import { useNavigate } from "react-router-dom";
import AppCookies from "../interfaces/AppCookies";

import HomeComp from "../components/Home";
import { useEffect } from "react";

function Home(props: { cookies: AppCookies }) {
  const role = props.cookies.principal?.role;

  const navigate = useNavigate();

  useEffect(() => {
    switch (role) {
      case ("EMPLOYEE"):
        navigate('/reimbursements');
        break;

      case ("FINANCE MANAGER"):
        navigate('/reimbursements');
        break;

      case "ADMIN":
        navigate('/users');
        break;
    }
  }, [role, navigate]);

  return (<HomeComp />)
}

export default Home;

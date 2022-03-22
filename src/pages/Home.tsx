import { useNavigate } from "react-router-dom";
import AppCookies from "../interfaces/AppCookies";

import HomeComp from "../components/Home";

function Home(props: { cookies: AppCookies }) {
  const role = props.cookies.principal?.role;

  const navigate = useNavigate();

  switch (role) {
    case ("EMPLOYEE" || "FINANCE MANAGER"):
      navigate('/reimbursements');
      break;
    case "ADMIN":
      navigate('/users');
      break;
    default:
      return (<HomeComp />);
  }

  return (<></>)
}

export default Home;

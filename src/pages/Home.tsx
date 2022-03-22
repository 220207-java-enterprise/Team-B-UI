import { useNavigate } from "react-router-dom";
import AppCookies from "../interfaces/AppCookies";

import MyReimbursementList from '../components/MyReimbursementList';

function Home(props: { cookies: AppCookies }) {
  const role = props.cookies.principal?.role;
  let cookies = props.cookies;
  const token = cookies.token as string;
  const navigate = useNavigate();

  switch (role) {
    case "EMPLOYEE":
      <h1>so what ?????/</h1>
      return <MyReimbursementList cookies={cookies} />;
    case "FINANCE MANAGER":
      return <ReimbursementList cookies={cookies} />;
    case "ADMIN":
      return <h1>Adminosaaaaaaaaaarus</h1>;
    default:
      return <h1>Not Logged In</h1>;
  }
}

export default Home;

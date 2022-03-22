import { useNavigate } from "react-router-dom";
import ReimbursementList from "../components/ReimbursementList";
import AppCookies from '../interfaces/AppCookies';

function Reimbursements(props: {cookies: AppCookies}) {
  const role = props.cookies.principal?.role;

  const navigate = useNavigate();

  if (role !== ("FINANCE MANAGER" || "EMPLOYEE"))
    navigate('/');
  else
    return (<ReimbursementList cookies={props.cookies}/>)
  
  return (<></>)
}

export default Reimbursements;
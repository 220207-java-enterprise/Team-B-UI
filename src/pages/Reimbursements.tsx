import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReimbursementList from "../components/ReimbursementList";
import MyReimbursementList from "../components/MyReimbursementList";
import AppCookies from '../interfaces/AppCookies';

function Reimbursements(props: {cookies: AppCookies}) {
  const role = props.cookies.principal?.role;

  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "FINANCE MANAGER" && role !== "EMPLOYEE") { 
      navigate('/');
    }
    
  }, [role, navigate]);

    return (<ReimbursementList cookies={props.cookies}/>)
}

export default Reimbursements;
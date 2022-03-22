import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserList from "../components/UserList";
import AppCookies from '../interfaces/AppCookies';

function Users(props: { cookies: AppCookies }) {
  const role = props.cookies.principal?.role;

  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "ADMIN")
      navigate('/');
  }, [role, navigate]);

  return (<UserList />);
}

export default Users;
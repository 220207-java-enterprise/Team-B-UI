import { useNavigate } from "react-router-dom";
import UserList from "../components/UserList";
import AppCookies from '../interfaces/AppCookies';

function Users(props: { cookies: AppCookies }) {
  const role = props.cookies.principal?.role;

  const navigate = useNavigate();

  if (role !== "ADMIN")
    navigate('/');
  else
    return (<UserList />);

  return (<></>);
}

export default Users;
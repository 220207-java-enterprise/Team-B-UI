import { useEffect } from "react";

import AppCookies from '../interfaces/AppCookies';

const Home = (props: {cookies: AppCookies}) => {
  const cookies = props.cookies;
  const role = cookies.principal?.role;

  useEffect(() => {
    console.log(cookies);
  }, [cookies]);
  
  
  switch (role) {
    case "EMPLOYEE":
      return (<h1>Employee</h1>)
    case "FINANCE MANAGER":
      return (<h1>Finance Manager</h1>)
    case "ADMIN":
      return (<h1>Admin</h1>)
    default:
      return (<h1>Not Logged In</h1>)
  }
}

export default Home;


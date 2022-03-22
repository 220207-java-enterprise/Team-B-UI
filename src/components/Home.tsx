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
      return (<main>
                <h1>Employee</h1>
              </main>)
    case "FINANCE MANAGER":
      return (<main>
                <h1>Finance Manager</h1>
              </main>)
    case "ADMIN":
      return (<main>
                <h1>Admin</h1>
              </main>)
    default:
      return (<main>
                <h1>Not Logged In</h1>
              </main>)
  }
}

export default Home;


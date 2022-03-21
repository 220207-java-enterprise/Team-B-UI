import AppCookies from '../interfaces/AppCookies';

import MyReimbursementList from '../components/MyReimbursementList';

function Home(props: {cookies: AppCookies}) {
  const role = props.cookies.principal?.role;
  
  switch (role) {
    case "EMPLOYEE":
      return 
    case "FINANCE MANAGER":
      return (<MyReimbursementList />)
    case "ADMIN":
      return (<h1>Admin</h1>)
    default:
      return (<h1>Not Logged In</h1>)
  }
}

export default Home;
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [cookies] = useCookies();

  const navigate = useNavigate();
  
  const navigateReimb = () => {
    navigate('/reimbursements');
  }

  useEffect(() => {
    console.log(cookies);
  }, [cookies]);
  
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={navigateReimb}>Reimbursements</button>
    </>
  )
}

export default Home;


import { useEffect } from "react";
import { useCookies } from "react-cookie";

const Home = () => {
  const [cookies] = useCookies();

  useEffect(() => {
    console.log(cookies);
  }, [cookies]);
  
  return (
    <h1>Home Page</h1>
  )
}

export default Home;


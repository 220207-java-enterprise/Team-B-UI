import AppCookies from '../interfaces/AppCookies'

const Header = (props: {cookies: AppCookies}) => {
  const token = props.cookies.token;
  
  return (
    <header>
      
    </header>
  )
}

export default Header
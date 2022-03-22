import AppCookies from '../interfaces/AppCookies';
import '../App.css';

const Header = (props: {cookies: AppCookies}) => {

  const token = props.cookies.token;

  return (
    <header>
      <nav className='navbar navbar-expand navbar-dark bg-dark justify-content-between'>
        <a href="/" className='navbar-brand'>
          Employee Reimbursement System
        </a>
        <div>
          {!token && (
            <>
            <a href="/login" className='navbar-brand'>
            Login
            </a>
            <a href="/signup" className='navbar-brand'>
            SignUp
            </a> 
            </>
          )}
          {token && (
            <a href="/" className='navbar-brand'>
            Logout
            {/* delete cookies after logging out */}
            </a>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
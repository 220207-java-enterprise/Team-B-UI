import AppCookies from '../interfaces/AppCookies'

const Header = (props: {cookies: AppCookies}) => {
  const token = props.cookies.token;
  
  return (
    <header>
      <nav className='navbar navbar-expand navbar-dark bg-dark justify-content-between'>
        <a href="/" className='navbar-brand ml-2'>
          Employee Reimbursement System
        </a>
        <div>
          {!token && (
          <>
          <a href="/login" className='navbar-brand'>
            Login
          </a>
          <a href="/signup" className='navbar-brand'>
            Signup
          </a>
          </>
          )}
          {token && (
          <p className='navbar-brand my-0'>
            Logout
          </p>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
import { CookieSetOptions } from 'universal-cookie';
import AppCookies from '../interfaces/AppCookies'

import { useNavigate } from 'react-router-dom';

const Header = (props: 
  {
    cookies: AppCookies, 
    destroyCookie: (name: string, options?: CookieSetOptions | undefined) => void
  }
) => {
  const token = props.cookies.token;

  const navigate = useNavigate();

  const logout = () => {
    props.destroyCookie('token', {path: '/'});
    props.destroyCookie('principal', {path: '/'});
    navigate('/');
  }

  return (
    <header>
      <nav>
        <a href="/" className="brand">
           Employee Reimbursement System
        </a>
        <div>
           {!token && (
           <>
           <a href="/login">
            Login
           </a>
           <a href="/signup">
             Signup
           </a>
           </>
           )}
           {token && (
           <p onClick={logout}>
            Logout
           </p>
           )}
         </div>
      </nav>
    </header>
  )
  
  // return (
  //   <header>
  //     <nav className='navbar navbar-expand navbar-dark bg-dark justify-content-between'>
  //       <a href="/" className='navbar-brand ms-3'>
  //         Employee Reimbursement System
  //       </a>
  //       <div>
  //         {!token && (
  //         <>
  //         <a href="/login" className='navbar-brand'>
  //           Login
  //         </a>
  //         <a href="/signup" className='navbar-brand'>
  //           Signup
  //         </a>
  //         </>
  //         )}
  //         {token && (
  //         <p className='navbar-brand my-0' onClick={logout}>
  //           Logout
  //         </p>
  //         )}
  //       </div>
  //     </nav>
  //   </header>
  // )
}

export default Header
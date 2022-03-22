import AppCookies from "../interfaces/AppCookies";

const Header = (props: { cookies: AppCookies }) => {
  const cookies = props.cookies;
  const token = cookies.token as string;
  const principal = cookies.principal;

  if (principal?.username == null) {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark justify-content-between">
          <a href="/" className="navbar-brand">
            Employee Reimbursement System
          </a>
          <div className="d-flex flex-row">
          <a href="/login" className="navbar-brand text-right">
            <button type="button" className="btn btn-primary">
              Login
            </button>
          </a>
          <a href="/users/add" className="navbar-brand  text-right">
            <button type="button" className="btn btn-primary">
              SignUp
            </button>
          </a>
          </div>
        </nav>
      </header>
    );
  } else {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark justify-content-between">
          <a href="/" className="navbar-brand">
            Employee Reimbursement System
          </a>
          <a href="/login" className="navbar-brand  text-right">
            <button type="button" className="btn btn-primary">
              LogOut
            </button>
          </a>
        </nav>
      </header>
    );
  }
};

export default Header;

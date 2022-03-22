import { CookieSetOptions } from 'universal-cookie';

import LoginForm from '../components/LoginForm';

function Login(
  props: {setCookie: (name: string, value: any, options?: CookieSetOptions | undefined) => void}
) {
  return (
    <LoginForm setCookie={props.setCookie}/>
  )
}

export default Login;
import axios, { AxiosRequestConfig } from "axios";

const USERS_REST_API_URL = "http://localhost:4001/ers/users";
const ACTIVATE_REST_API_URL = "http://localhost:4001/ers/users/approve";
const LOGIN_REST_API_URL = "http://localhost:4001/ers/users/login";

const UserService = {
  getUsers: () => {
    const config = {
      headers: {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxYjJkZDcyNy1jN2E0LTRmYzAtOTBmYS0yMmUxMjJmODNhMjQiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc4MTM3MDksImV4cCI6MTY0NzgxNzMwOSwic3ViIjoiYWxwaGFvbWVnYSIsInJvbGUiOiJBRE1JTiJ9.qr7qxrXe0JmzNqIsGoCul4OlZttPmOai9-Jz-lgGeXU"
      },
      validateStatus: () => true
    };
    return axios.get(USERS_REST_API_URL, config);
  },

  createUser: (user: {}) => {
    return axios.post(USERS_REST_API_URL, user)
  },

  login: (user: {username: string, password: string}) => {
    return axios.post(LOGIN_REST_API_URL, user)
  },

  activateUser: (user: {id: string}) => {
    const config = {
      headers : {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxYjJkZDcyNy1jN2E0LTRmYzAtOTBmYS0yMmUxMjJmODNhMjQiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc4MTM3MDksImV4cCI6MTY0NzgxNzMwOSwic3ViIjoiYWxwaGFvbWVnYSIsInJvbGUiOiJBRE1JTiJ9.qr7qxrXe0JmzNqIsGoCul4OlZttPmOai9-Jz-lgGeXU"
      }
    }
    return axios.put(ACTIVATE_REST_API_URL,user,config)
  },

  deleteUser: (user: {id: string}) => {
    const config: AxiosRequestConfig = {
      url: ACTIVATE_REST_API_URL,
      method: 'PUT',
      headers: {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxYjJkZDcyNy1jN2E0LTRmYzAtOTBmYS0yMmUxMjJmODNhMjQiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc4MTM3MDksImV4cCI6MTY0NzgxNzMwOSwic3ViIjoiYWxwaGFvbWVnYSIsInJvbGUiOiJBRE1JTiJ9.qr7qxrXe0JmzNqIsGoCul4OlZttPmOai9-Jz-lgGeXU"
      },
      data: user,
      validateStatus: () => true
    };

    return axios(config);
  }
}

export default UserService;


import axios from "axios";

const USERS_REST_API_URL = "http://localhost:4001/ers/users";
const ACTIVATE_REST_API_URL = "http://localhost:4001/ers/users/approve";
const LOGIN_REST_API_URL = "http://localhost:4001/ers/users/login";

class UserService {
  getUsers() {
    const config = {
      headers : {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxYjJkZDcyNy1jN2E0LTRmYzAtOTBmYS0yMmUxMjJmODNhMjQiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc2MzM4NTAsImV4cCI6MTY0NzYzNzQ1MCwic3ViIjoiYWxwaGFvbWVnYSIsInJvbGUiOiJBRE1JTiJ9.B_ObCBCpxRJz9VxYyI8I6aW5DHMrvwdUim690-QTZQA"
      }
    }
    return axios.get(USERS_REST_API_URL, config);
  }

  createUser(user: object){
    return axios.post(USERS_REST_API_URL, user)
  }

  login(user: object){
    return axios.post(LOGIN_REST_API_URL, user)
  }

  activateUser(user: object){
    const config = {
      headers : {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxYjJkZDcyNy1jN2E0LTRmYzAtOTBmYS0yMmUxMjJmODNhMjQiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc2MzM4NTAsImV4cCI6MTY0NzYzNzQ1MCwic3ViIjoiYWxwaGFvbWVnYSIsInJvbGUiOiJBRE1JTiJ9.B_ObCBCpxRJz9VxYyI8I6aW5DHMrvwdUim690-QTZQA"
      }
    }
    return axios.put(ACTIVATE_REST_API_URL,user,config)
  }

  deleteUser(user: object){
    const config = {
      headers : {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxYjJkZDcyNy1jN2E0LTRmYzAtOTBmYS0yMmUxMjJmODNhMjQiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc2MzM4NTAsImV4cCI6MTY0NzYzNzQ1MCwic3ViIjoiYWxwaGFvbWVnYSIsInJvbGUiOiJBRE1JTiJ9.B_ObCBCpxRJz9VxYyI8I6aW5DHMrvwdUim690-QTZQA"
      }
    }
    return axios.put(USERS_REST_API_URL,user,config)
  }

}

export default new UserService();
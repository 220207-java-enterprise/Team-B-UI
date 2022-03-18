import axios from "axios";

const USERS_REST_API_URL = "http://localhost:4001/ers/users";

class UserService {
  getUsers() {
    const config = {
      headers : {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxYjJkZDcyNy1jN2E0LTRmYzAtOTBmYS0yMmUxMjJmODNhMjQiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc2MjgwMDQsImV4cCI6MTY0NzYzMTYwNCwic3ViIjoiYWxwaGFvbWVnYSIsInJvbGUiOiJBRE1JTiJ9.WstnkZyHIXZDRwJMbVTQdUon3_rhP0b15tb4qnT-84A"
      }
    }
    return axios.get(USERS_REST_API_URL, config);
  }

  createUser(user: object){
    return axios.post(USERS_REST_API_URL, user)
  }

}

export default new UserService();
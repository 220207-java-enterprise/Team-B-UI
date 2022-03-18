import axios from "axios";

const USERS_REST_API_URL = "http://localhost:4001/ers/users";

const UserService = {
  getUsers: () => {
    const config = {
      headers: {

      },
      validateStatus: () => true
    };
    
    return axios.get(USERS_REST_API_URL, config);
  }
}

export default UserService;
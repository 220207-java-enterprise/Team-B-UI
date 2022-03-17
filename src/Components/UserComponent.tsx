import React from "react";
import UserService from "../services/UserService";


class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    UserService.getUsers().then((response) => {
      this.setState({ users: response.data });
    });
  }

  
  render() {
    return (
      <div>
        <h1 className="text-center">ERS USERS LIST</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>User Id</td>
              <td>UserName</td>
              <td>Email</td>
            </tr>
          </thead>

          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.user_id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserComponent;

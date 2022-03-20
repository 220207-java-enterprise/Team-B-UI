import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import UserService from "../services/UserService";

export const UserList = () => {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserService.getUsers()
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="container">
      <h2 className="text-center">List Users</h2>
      <Link to = "/users/add" className="btn btn-primary mb-2">Create User</Link>
      <Link to = "/users/activate" className="btn btn-primary mb-2">Activate User</Link>
      <Link to = "/users/delete" className="btn btn-primary mb-2">Delete User</Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <td>User Id</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Username</td>
            <td>Role</td>
          </tr>
        </thead>

        <tbody>
          {/* TODO assign type correctly */}
          {users.map((user:any) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default UserList;
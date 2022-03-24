import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import AppCookies from "../interfaces/AppCookies";
import UserService from "../services/UserService";

export const UserList = (props: {cookies: AppCookies}) => {
  const cookies = props.cookies;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = (cookies.token as string);
    
    console.log(token)
    UserService.getUsers(token)
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cookies]);

  return (
    <main id="user-list" className="container-fluid">
      <h2 className="text-center">Active Users</h2>

      <button className="btn btn-secondary">
        Create Reimbursement
      </button>

      <table className="table table-bordered table-striped m-auto">
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Username</td>
            <td>Role</td>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 && users.map((user: {
            id: string,
            firstName: string,
            lastName: string,
            username: string,
            role: string
          }) => (
            <tr id={user.id} key={user.id}>
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
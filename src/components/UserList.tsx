import { useEffect, useState } from "react";
import AppCookies from "../interfaces/AppCookies";
import UserService from "../services/UserService";

export const UserList = (props: {cookies: AppCookies}) => {
  const cookies = props.cookies;
  const token = (cookies.token as string);

  const [users, setUsers] = useState([]);
  const [selectIndex, setSelectIndex] = useState(0);

  useEffect(() => {
    UserService.getUsers(token)
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cookies]);

  useEffect(() => {
    switch (selectIndex) {
      case 0:
      case 1:
        UserService.getUsers(token)
          .then((response) => {
            setUsers(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
        break;
      
      case 2:
        UserService.getInactive(token)
          .then((response) => {
            setUsers(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
        break;

      case 3:
        UserService.getAll(token)
          .then(response => {
            setUsers(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    }
  }, [selectIndex]);

  return (
    <main id="user-list" className="container-fluid">
      {(selectIndex === 0 || selectIndex === 1) && <h2 className="text-center">Active Users</h2>}
      {selectIndex === 2 && <h2 className="text-center">Inactive Users</h2>}
      {selectIndex === 3 && <h2 className="text-center">All Users</h2>}

      <div className="table-nav">
        <select 
          id="dropdown_list"
          className="btn btn-secondary"
          onChange={e => setSelectIndex(e.target.selectedIndex)}
        >
          <option value="Filter by:">
              Filter by:
          </option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Inactive">All</option>
        </select>
      </div>

      <table className="table table-bordered table-striped m-auto">
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Username</td>
            <td>Role</td>
            {selectIndex !== 3 && <td>Action</td>}
            {selectIndex === 3 && <td>Status</td>}
          </tr>
        </thead>

        <tbody>
          {users.length > 0 && users.map((user: {
            id: string,
            firstName: string,
            lastName: string,
            username: string,
            role: string,
            status: string
          }) => (
            <tr id={user.id} key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
              {selectIndex === 2 && 
              <td>
                <button id="activate-btn" className="btn btn-warning">
                  Activate
                </button>
              </td>}
              {(selectIndex === 0 || selectIndex === 1) && 
              <td>
                <button id="delete-btn" className="btn btn-danger">
                  Delete
                </button>
              </td>}
              {selectIndex === 3 && <td>{user.status}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default UserList;
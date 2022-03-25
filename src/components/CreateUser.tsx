import { useState } from "react";

import UserService from "../services/UserService";
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Employee");
  const navigate = useNavigate(); // The 'useHistory() hook' returns an object history'

  // TODO: figure out what type this is supposed to take
  const saveUser = (e:any) => {
    e.preventDefault();
    const user = { firstName, lastName, email, username, password, role };
    console.log(user);
   UserService.createUser(user).then(response=>{
      console.log(response.data)

      navigate('/users');
   }).catch(error=>{console.log(error)})

  };
  return (
    <main id="new-user">
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">Create User</h2>
            <div className="card-body">
              <form>

                <div className="form-group mb-2">
                  <label className="form-label">First Name :</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="First Name"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Last Name :</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="Last Name"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Email :</label>
                  <input
                    type="text"
                    placeholder="Email"
                    name="Email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Username :</label>
                  <input
                    type="text"
                    placeholder="Username"
                    name="Username"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Password :</label>
                  <input
                    type="text"
                    placeholder="Password"
                    name="Password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                <label className="form-label">Role :</label>
                  <select
                    name="Role"
                    className="form-control"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}>
                    <option value="Employee">Employee</option>
                    <option value="Finance Manager">Finance Manager</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
              
                <button
                  className="btn btn-success"
                  onClick={(e) => saveUser(e)}
                >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateUser;
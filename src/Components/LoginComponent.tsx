import React, { useState } from "react";

import UserService from "../services/UserService";
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // The 'useHistory() hook' returns an object history'

  // TODO: figure out what type this is supposed to take
  const saveUser = (e:any) => {
    e.preventDefault();
    const user = { username, password };
    console.log(user);
   UserService.login(user).then(response=>{
      console.log(response.data)

   }).catch(error=>{console.log(error)})

  };
  return (
    <main id="login">
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">Login</h2>
            <div className="card-body">
              <form>
                {/* <div className="form-group mb-2">
                  <label className="form-label">Author Id :</label>
                  <input
                    type="text"
                    placeholder="AuthorID"
                    name="AuthorId"
                    className="form-control"
                    value={author_id}
                    onChange={(e) => setAuthor_id(e.target.value)}
                  ></input>
                </div> */}

                <div className="form-group mb-2">
                  <label className="form-label">Username :</label>
                  <input
                    type="text"
                    placeholder="Username"
                    name="Username"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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

export default LoginComponent;
import React, { useState } from "react";

import UserService from "../services/UserService";
import { useNavigate } from 'react-router-dom';

const ActivateUserComponent = () => {
  const [id, setId] = useState("");
  const navigate = useNavigate(); // The 'useHistory() hook' returns an object history'

  // TODO: figure out what type this is supposed to take
  const saveUser = (e:any) => {
    e.preventDefault();
    const user = { id };
    console.log(user);
   UserService.activateUser(user).then(response=>{
      console.log(response.data)

      navigate('/users');
   }).catch(error=>{console.log(error)})

  };
  return (
    <main id="activate-user">
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">Activate User</h2>
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
                  <label className="form-label">Id :</label>
                  <input
                    type="text"
                    placeholder="Id"
                    name="Id"
                    className="form-control"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
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

export default ActivateUserComponent;
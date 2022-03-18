import React, { useState } from "react";

import ReimbursementService from "../services/ReimbursementService";
import { useNavigate } from 'react-router-dom';

const CreateReimbursementComponent = () => {
  //Hardcoded Author ID
  //const [author_id, setAuthor_id] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate(); // The 'useHistory() hook' returns an object history'

  // TODO: figure out what type this is supposed to take
  const saveReimbursement = (e:any) => {
    e.preventDefault();
    const reimbursement = { amount, description, type };
    console.log(reimbursement);
   ReimbursementService.createReimbursement(reimbursement).then((response)=>{
      console.log(response.data)

      navigate('/reimbursements');
   }).catch(error=>{console.log(error)})

  };
  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">Create Reimbursement</h2>
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
                  <label className="form-label">Amount :</label>
                  <input
                    type="text"
                    placeholder="Amount"
                    name="Amount"
                    className="form-control"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Description :</label>
                  <input
                    type="text"
                    placeholder="Description"
                    name="Description"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Type :</label>
                  <input
                    type="text"
                    placeholder="Type"
                    name="Type"
                    className="form-control"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  ></input>
                </div>
              
                <button
                  className="btn btn-success"
                  onClick={(e) => saveReimbursement(e)}
                >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateReimbursementComponent;

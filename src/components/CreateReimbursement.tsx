import { SyntheticEvent, useState } from "react";

import ReimbursementService from "../services/ReimbursementService";
import { useNavigate } from 'react-router-dom';

const NewReimbursementForm = () => {

  const [id, setId] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();

  const saveReimbursement = (e: SyntheticEvent) => {
    e.preventDefault();
    const reimbursement = { id, amount, description, type };
    console.log(reimbursement);
   
    ReimbursementService.update(reimbursement)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data);
          navigate('/myreimbursements');
        } else {
          console.log(response.status);
          if (response.data)
            console.log(response.data);
        }
    }).catch(error => console.log(error));
  };
  
  return (
    <main id="new-reimbursement">
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">Update Reimbursement</h2>
            <div className="card-body">
              <form>
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
    </main>
  );
};

export default NewReimbursementForm;

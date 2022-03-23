import { SyntheticEvent, useState } from "react";

import ReimbursementService from "../services/ReimbursementService";
import { useNavigate } from 'react-router-dom';
import AppCookies from "../interfaces/AppCookies";

const NewReimbursementForm = (props: { cookies: AppCookies }) => {

  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();

  const cookies = props.cookies;
  const token = cookies.token as string;

  const saveReimbursement = (e: SyntheticEvent) => {
    e.preventDefault();
    const reimbursement = {amount, description, type };
    console.log(reimbursement);
   
    ReimbursementService.createReimbursement(token,reimbursement)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data);
          navigate('/reimbursements');
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
            <h2 className="text-center">Create Reimbursement</h2>
            <div className="card-body">
              <form>

                <div className="form-group mb-2">
                  <label className="form-label">Amount :</label>
                  <input
                    max={999}
                    type="number"
                    placeholder="Amount"
                    name="Amount"
                    className="form-control"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Description :</label>
                  <textarea
                    rows={4}
                    maxLength={200}
                    placeholder="Description"
                    name="Description"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Type :</label>
                  <select
                    name="Type"
                    className="form-control"
                    value={type}
                    onChange={(e) => setType(e.target.value)}>
                    <option value="Lodging">Lodging</option>
                    <option value="Travel">Travel</option>
                    <option value="Food">Food</option>
                    <option value="Other">Other</option>
                  </select>
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

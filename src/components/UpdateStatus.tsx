import { SyntheticEvent, useState } from "react";

import ReimbursementService from "../services/ReimbursementService";
import { useNavigate } from 'react-router-dom';

const NewReimbursementForm = () => {
  const [reimb_id, setId] = useState("");
  const [statusName, setStatus] = useState("");
  const navigate = useNavigate();

  const saveReimbursement = (e: SyntheticEvent) => {
    e.preventDefault();
    const reimbursement = { reimb_id, statusName };
    console.log(reimbursement);

    ReimbursementService.updateStatus(reimbursement)
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
            <h2 className="text-center">Update Reimbursement Status</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">ID :</label>
                  <input
                    type="text"
                    placeholder="ID"
                    name="ID"
                    className="form-control"
                    value={reimb_id}
                    onChange={(e) => setId(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Status :</label>
                  <input
                    type="text"
                    placeholder="Status"
                    name="Status"
                    className="form-control"
                    value={statusName}
                    onChange={(e) => setStatus(e.target.value)}
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
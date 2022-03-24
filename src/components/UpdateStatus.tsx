import { SyntheticEvent, useState } from "react";

import ReimbursementService from "../services/ReimbursementService";

const UpdateStatus = (props: {
  id: string,
  status:string,
  token: string,
  setModal: (bool: boolean) => void
}) => {
  const reimb_id = props.id;
  const status = props.status;
  const token = props.token;
  const setModal = props.setModal;

  const [statusName, setStatusName] = useState(status)

  const updateReimbursementStatus = (e: SyntheticEvent) => {
    e.preventDefault();

    const reimbursement = { reimb_id, statusName};

    ReimbursementService.updateStatus(token, {reimb_id, statusName})
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
        } else {
          console.log(response.status);
          if (response.data) console.log(response.data);
        }
      })
      .catch((error) => console.log(error));
  };

  
  return (
  <div id="update-form" className="container">
    <div className="row">
      <div className="card col-md-6 offset-md-3 offset-md-3">
        <h2 className="text-center">Update Reimbursement</h2>
        <div className="card-body">
          <form>
            <div className="form-group mb-2">
              <label className="form-label">Status :</label>
              <input
                type="text"
                placeholder="Status"
                name="Status"
                className="form-control"
                value={statusName}
                onChange={(e) => setStatusName(e.target.value)}
              ></input>
        
              <button
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={(e) => updateReimbursementStatus(e)}
              >
                Submit
              </button>

              <button
                className="btn btn-secondary"
                onClick={(e) => setModal(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-success"
                onClick={(e) => setModal(false)}
              >
                Finished
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UpdateStatus;

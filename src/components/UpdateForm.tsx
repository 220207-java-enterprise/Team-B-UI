import { SyntheticEvent, useState } from "react";

import ReimbursementService from "../services/ReimbursementService";

const UpdateForm = (props: {
  id: string,
  amount: string,
  description: string,
  status: string,
  type: string,
  setModal: (bool: boolean) => void,
  token: string
}) => {
  const id = props.id;
  const token = props.token;
  const setModal = props.setModal;

  const [amount, setAmount] = useState(props.amount);
  const [description, setDescription] = useState(props.description);
  const [type, setType] = useState("LODGING");

  const updateReimbursement = (e: SyntheticEvent) => {
    e.preventDefault();
    const reimbursement = { id, amount, description, type };
    console.log(reimbursement);

    ReimbursementService.update(token, reimbursement)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
        } else {
          console.log(response.status);
          if (response.data) console.log(response.data);
        }
      })
      .catch((error) => console.log(error));

      window.location.reload();
  };

  return (
    <div id="update-form" className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Update Reimbursement</h2>
          <div className="card-body">
            <form>
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
                <select
                    placeholder="Type"
                    name="Type"
                    className="form-control"
                    value={type}
                    onChange={(e) => setType(e.target.value)}>
                    <option value="Lodging">Lodging</option>
                    <option value="Travel">Travel</option>
                    <option value="Food">Food</option>
                    <option value="Other">Other</option>
                  </select>
                {/* <input
                  type="text"
                  placeholder="Type"
                  name="Type"
                  className="form-control"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                ></input> */}
              </div>

              <button
                className="btn btn-success"
                data-dismiss="modal"
                onClick={(e) => updateReimbursement(e)}
              >
                Submit
              </button>

              <button
                className="btn btn-secondary"
                onClick={(e) => setModal(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateForm;
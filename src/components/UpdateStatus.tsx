import { SyntheticEvent, useState } from "react";

import ReimbursementService from "../services/ReimbursementService";
import { useNavigate } from "react-router-dom";
import AppCookies from "../interfaces/AppCookies";
import { stringify } from "querystring";



const updateStatus = (props: {
  cookies: AppCookies;
  token: string;
  id: string;
  amount: string;
  description: string;
  status:string
  modal: boolean;
}) => {
  const token = props.token;
  const reimb_id = props.id;
  const cookies = props.cookies;
  const role = cookies.principal?.role;


  const [modal, setModal] = useState(props.modal);
  const [amount, setAmount] = useState(props.amount);
  const [description, setDescription] = useState(props.description);
  const [type, setType] = useState("");
  const [statusName,setStatusName] = useState(props.status)

  const updateReimbursementStatus = (e: SyntheticEvent) => {
    e.preventDefault();

    const reimbursement = { reimb_id, statusName};
    
    console.log("this is the reimb_id " + reimb_id);
    console.log("this is the token " + token);
    console.log("this is the status " + statusName)
    console.log("this is the resolver_id " + props.cookies.principal.id)
    console.log("this is the author_id ? " + props.cookies.principal.username)

    ReimbursementService.updateStatus(token,{reimb_id,statusName})
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

  
if (role==="FINANCE MANAGER") { return <>

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
</>

}


      

  



};

export default updateStatus;

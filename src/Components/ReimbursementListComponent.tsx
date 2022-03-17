import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import ReimbursementService from "../services/ReimbursementService";

export const ReimbursementListComponent = () => {
  
  const [reimbursements, setReimbursements] = useState([]);

  useEffect(() => {
    ReimbursementService.getReimbursements()
      .then((response) => {
        setReimbursements(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">List Reimbursements</h2>
      <Link to = "/add-reimbursement" className="btn btn-primary mb-2">Create Reimbursement</Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <td>Reimbursement Id</td>
            <td>Amount</td>
            <td>Description</td>
          </tr>
        </thead>

        <tbody>
          {/* TODO assign type correctly */}
          {reimbursements.map((reimbursement:any) => (
            <tr key={reimbursement.id}>
              <td>{reimbursement.id}</td>
              <td>{reimbursement.amount}</td>
              <td>{reimbursement.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReimbursementListComponent;

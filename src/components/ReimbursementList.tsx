import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ReimbursementService from "../services/ReimbursementService";

export const ReimbursementList = () => {
  
  const [reimbursements, setReimbursements] = useState([]);

  useEffect(() => {
    ReimbursementService.getReimbursements()
      .then((response) => {
        console.log(response);
        
        if (response.status === 200) 
          setReimbursements(response.data);
        else
          console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main id="reimbursement-list" className="container-fluid">
      <h2 className="whiteCenter">List Reimbursements</h2>
      <Link to = "/reimbursements/create" className="btn btn-primary mb-2">Create Reimbursement</Link>
      <table className="table table-bordered table-striped m-auto">
        <thead>
          <tr>
            <td className="white">Reimbursement Id</td>
            <td className="white">Amount</td>
            <td className="white">Description</td>
            <td className="white">Author_Id</td>
            <td className="white">Resolver_Id</td>
            <td className="white">Status</td>
            <td className="white">Type</td>
          </tr>
        </thead>

        <tbody>
          {reimbursements.map((
            reimbursement: {
              id: string,
              amount: string,
              description: string,
              author_id: string,
              resolver_id: string,
              status: string,
              type: string
            }
          ) => (
            <tr key={reimbursement.id}>
              <td>{reimbursement.id}</td>
              <td>{reimbursement.amount}</td>
              <td>{reimbursement.description}</td>
              <td>{reimbursement.author_id}</td>
              <td>{reimbursement.resolver_id}</td>
              <td>{reimbursement.status}</td>
              <td>{reimbursement.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default ReimbursementList;
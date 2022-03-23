import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import AppCookies from "../interfaces/AppCookies";
import ReimbursementService from "../services/ReimbursementService";

export const ReimbursementList = (props: {cookies: AppCookies}) => {
  const cookies = props.cookies;
  const [reimbursements, setReimbursements] = useState([]);

  useEffect(() => {
    const token = (cookies.token as string);
    const role = cookies.principal?.role;

    console.log(role);

    if (role === "FINANCE MANAGER") {
      ReimbursementService.getReimbursements(token)
        .then((response) => {
          console.log(response);

          if (response.status === 200) {
            console.log(response.data);
            setReimbursements(response.data);
          } 
          else
            console.log(response.status);
        })
        .catch(error => console.log(error));
    }

    
  }, [cookies])
  
  return (
    <main id="reimbursement-list" className="container-fluid">
      <h2 className="whiteCenter">List Reimbursements</h2>
      <table className="table table-bordered table-striped m-auto">
        <thead>
          <tr>
            <td>#</td>
            <td>Amount</td>
            <td>Description</td>
            <td>Author</td>
            <td>Resolver</td>
            <td>Status</td>
            <td>Type</td>
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
            <tr id={reimbursement.id} key={reimbursement.id}>
              {/* @ts-ignore */}
              <td>{reimbursements.indexOf(reimbursement) + 1}</td>
              <td>{"$" +reimbursement.amount}</td>
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
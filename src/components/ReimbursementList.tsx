import { useEffect, useState } from "react";
import AppCookies from "../interfaces/AppCookies";
import ReimbursementService from "../services/ReimbursementService";
import Reimbursement from '../interfaces/Reimbursement';

export const ReimbursementList = (props: {cookies: AppCookies}) => {
  const cookies = props.cookies;
  const token = (cookies.token as string);
  const role = cookies.principal?.role;

  const [reimbursements, setReimbursements] = useState([]);

  useEffect(() => {
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

    if (role === "EMPLOYEE") {
      ReimbursementService.getMyReimbursements(token)
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
      
      <div className="table-elements">
        <select className="btn btn-secondary dropdown-toggle">
          <option selected value="Filter by:">Filter by:</option>
          <option value="All">All</option>
          <option value="Status: PENDING">Status: PENDING</option>
          <option value="Status: APPROVED">Status: APPROVED</option>
          <option value="Status: DENIED">Status: DENIED</option>
          <option value="Type: LODGING">Type: LODGING</option>
          <option value="Type: TRAVEL">Type: TRAVEL</option>
          <option value="Type: FOOD">Type: FOOD</option>
          <option value="Type: OTHER">Type: OTHER</option>
        </select>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      
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
            reimbursement: Reimbursement
          ) => (
            <tr id={reimbursement.id} key={reimbursement.id}>
              {/* @ts-ignore */}
              <td>{reimbursements.indexOf(reimbursement) + 1}</td>
              <td>{"$" +reimbursement.amount}</td>
              <td>{reimbursement.description}</td>
              <td>{reimbursement.author_id}</td>
              <td>{reimbursement.resolver_id}</td>
              <td>
                {reimbursement.status}
              </td>
              <td className="type">
                {reimbursement.type}
                {role === "FINANCE MANAGER" && <i className="fa fa-trash" aria-hidden="true"></i>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default ReimbursementList;
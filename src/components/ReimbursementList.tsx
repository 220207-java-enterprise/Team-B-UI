import React, { SyntheticEvent, useEffect, useState } from "react";
import AppCookies from "../interfaces/AppCookies";
import ReimbursementService from "../services/ReimbursementService";
import Reimbursement from '../interfaces/Reimbursement';
import { sortAndDeduplicateDiagnostics } from "typescript";

export const ReimbursementList = (props: {cookies: AppCookies}) => {
  const cookies = props.cookies;
  const token = (cookies.token as string);
  const role = cookies.principal?.role;

  const [reimbursements, setReimbursements] = useState([]);
  const [selectIndex, setSelectIndex] = useState(0);

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
  }, [cookies]);

  useEffect(() => {
    console.log("You changed the index")

    switch (selectIndex){
      case 0:
      case 1:
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
        break;
      
      case 2:
        ReimbursementService.getPendingReimbursements(token)
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
        break;

        case 3:
        ReimbursementService.getApprovedReimbursements(token)
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
        break;

        case 4:
        ReimbursementService.getDeniedReimbursements(token)
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
        break;

        case 5:
        ReimbursementService.getLodgingReimbursements(token)
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
        break;

        case 6:
        ReimbursementService.getTravelReimbursements(token)
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
        break;

        case 7:
        ReimbursementService.getFoodReimbursements(token)
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
        break;

        case 8:
        ReimbursementService.getOtherReimbursements(token)
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
        break;
    }

  }, [selectIndex]);

  
  return (
    <main id="reimbursement-list" className="container-fluid">
      <h2 className="whiteCenter">List Reimbursements</h2>
      
      <div className="table-elements">
        <select id = "dropdown_list" className="btn btn-secondary dropdown-toggle" onChange = {(e) => setSelectIndex(e.target.selectedIndex)}>
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
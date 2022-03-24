import React, { SyntheticEvent, useEffect, useState } from "react";
import AppCookies from "../interfaces/AppCookies";
import ReimbursementService from "../services/ReimbursementService";
import Reimbursement from "../interfaces/Reimbursement";
import { sortAndDeduplicateDiagnostics } from "typescript";
import Update from "./Update";
import { useNavigate } from "react-router-dom";
import UpdateStatus from "./UpdateStatus";

export const ReimbursementList = (props: { cookies: AppCookies }) => {
  const cookies = props.cookies;
  const token = cookies.token as string;
  const role = cookies.principal?.role;

  const [reimbursements, setReimbursements] = useState([]);
  const [selectIndex, setSelectIndex] = useState(0);
  const [tableNavStyle, setStyle] = useState("");
  const [id, setId] = useState<any | null>(null);
  const [modal, setModal] = useState(false);
  const [amount, setAmount] = useState<any | null>(null);
  const [description, setDescription] = useState<any | null>(null);
  const [status, setStatus] = useState<any | null>(null);
  const [type, setType] = useState("");
  const navigate = useNavigate();

  const handleModal = (e: SyntheticEvent) => {
    setModal(!modal);
    const target = e.target as Text;

    console.log(target?.parentNode?.parentNode?.childNodes.item(3).textContent);
    let extractedId =
      target?.parentNode?.parentNode?.childNodes.item(3).textContent;
    let extractedAmount = target?.parentNode?.parentNode?.childNodes
      .item(1)
      .textContent?.substring(1);
    let extractedDescription =
      target?.parentNode?.parentNode?.childNodes.item(2).textContent;

    let extractedStatus =
      target?.parentNode?.parentNode?.childNodes.item(5).textContent;

    

    console.log(e.currentTarget + "DO you see anything useful?");
    console.log(id);
    setId(extractedId);
    setAmount(extractedAmount);
    setDescription(extractedDescription);
    setStatus(extractedStatus);
  };

  useEffect(() => {
    if (role === "FINANCE MANAGER") {
      setStyle("table-elements-fm");

      ReimbursementService.getReimbursements(token)
        .then((response) => {
          console.log(response);

          if (response.status === 200) {
            console.log(response.data);
            setReimbursements(response.data);
          } else console.log(response.status);
        })
        .catch((error) => console.log(error));
    }

    if (role === "EMPLOYEE") {
      setStyle("table-elements-emp");

      ReimbursementService.getMyReimbursements(token)
        .then((response) => {
          console.log(response);

          if (response.status === 200) {
            console.log(response.data);
            setReimbursements(response.data);
          } else console.log(response.status);
        })
        .catch((error) => console.log(error));
    }
  }, [cookies]);

  useEffect(() => {
    console.log("You changed the index");

    switch (selectIndex) {
      case 0:
      case 1:
        ReimbursementService.getReimbursements(token)
          .then((response) => {
            console.log(response);

            if (response.status === 200) {
              console.log(response.data);
              setReimbursements(response.data);
            } else console.log(response.status);
          })
          .catch((error) => console.log(error));
        break;

      case 2:
        ReimbursementService.getPendingReimbursements(token)
          .then((response) => {
            console.log(response);

            if (response.status === 200) {
              console.log(response.data);
              setReimbursements(response.data);
            } else console.log(response.status);
          })
          .catch((error) => console.log(error));
        break;

      case 3:
        ReimbursementService.getApprovedReimbursements(token)
          .then((response) => {
            console.log(response);

            if (response.status === 200) {
              console.log(response.data);
              setReimbursements(response.data);
            } else console.log(response.status);
          })
          .catch((error) => console.log(error));
        break;

      case 4:
        ReimbursementService.getDeniedReimbursements(token)
          .then((response) => {
            console.log(response);

            if (response.status === 200) {
              console.log(response.data);
              setReimbursements(response.data);
            } else console.log(response.status);
          })
          .catch((error) => console.log(error));
        break;

      case 5:
        ReimbursementService.getLodgingReimbursements(token)
          .then((response) => {
            console.log(response);

            if (response.status === 200) {
              console.log(response.data);
              setReimbursements(response.data);
            } else console.log(response.status);
          })
          .catch((error) => console.log(error));
        break;

      case 6:
        ReimbursementService.getTravelReimbursements(token)
          .then((response) => {
            console.log(response);

            if (response.status === 200) {
              console.log(response.data);
              setReimbursements(response.data);
            } else console.log(response.status);
          })
          .catch((error) => console.log(error));
        break;

      case 7:
        ReimbursementService.getFoodReimbursements(token)
          .then((response) => {
            console.log(response);

            if (response.status === 200) {
              console.log(response.data);
              setReimbursements(response.data);
            } else console.log(response.status);
          })
          .catch((error) => console.log(error));
        break;

      case 8:
        ReimbursementService.getOtherReimbursements(token)
          .then((response) => {
            console.log(response);

            if (response.status === 200) {
              console.log(response.data);
              setReimbursements(response.data);
            } else console.log(response.status);
          })
          .catch((error) => console.log(error));
        break;
    }
  }, [selectIndex]);

  return (
    <>
      <main id="reimbursement-list" className="container-fluid">
        <h2 className="whiteCenter">List Reimbursements</h2>
        <h1 className="whiteCenter">Logged in as {props.cookies.principal.username}</h1>

        <div className={tableNavStyle}>
          {role === "EMPLOYEE" && (
            <a href="/reimbursements/create" className="btn btn-secondary">
              Create Reimbursement
            </a>
          )}

          {role === "FINANCE MANAGER" && (
            <select
              id="dropdown_list"
              className="btn btn-secondary dropdown-toggle"
              onChange={(e) => setSelectIndex(e.target.selectedIndex)}
            >
              <option selected value="Filter by:">
                Filter by:
              </option>
              <option value="All">All</option>
              <option value="Status: PENDING">Status: PENDING</option>
              <option value="Status: APPROVED">Status: APPROVED</option>
              <option value="Status: DENIED">Status: DENIED</option>
              <option value="Type: LODGING">Type: LODGING</option>
              <option value="Type: TRAVEL">Type: TRAVEL</option>
              <option value="Type: FOOD">Type: FOOD</option>
              <option value="Type: OTHER">Type: OTHER</option>
            </select>
          )}
        </div>

        <table className="table table-bordered table-striped m-auto">
          <thead>
            <tr>
              <td>#</td>

              <td>Amount</td>

              <td>Description</td>

              <td>ReimbID</td>

              <td>Author</td>
              <td>Resolver</td>
              <td>Status</td>
              <td>Type</td>
              <td>Action</td>
            </tr>
          </thead>

          <tbody>
            {reimbursements.map((reimbursement: Reimbursement) => (
              <tr id={reimbursement.id} key={reimbursement.id}>
                {/* @ts-ignore */}
                <td>{reimbursements.indexOf(reimbursement) + 1}</td>
                <td>{"$" + parseFloat(reimbursement.amount).toFixed(2)}</td>
                <td>{reimbursement.description}</td>
                <td>{reimbursement.id}</td>
                <td>{reimbursement.author_id}</td>
                <td>{reimbursement.resolver_id}</td>
                <td>{reimbursement.status}</td>
                <td className="type">
                  {reimbursement.type}
                  {role === "FINANCE MANAGER" && (
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  )}
                </td>
                <td>
                  <button id="update-btn" className="btn btn-warning" onClick={handleModal}>
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {modal && role === "EMPLOYEE" && (
          <Update
            cookies={cookies}
            id={id}
            amount={amount}
            description={description}
            status={status}
            modal={modal}
            token={token}
          />
        )}

        {modal && role === "FINANCE MANAGER" && (
          <UpdateStatus 
          cookies={cookies}
            id={id}
            amount={amount}
            description={description}
            status={status}
            modal={modal}
            token={token}
            />
        )
        }
      </main>
    </>
  );
};

export default ReimbursementList;

import { SyntheticEvent, useEffect, useState } from "react";
import AppCookies from "../interfaces/AppCookies";
import ReimbursementService from "../services/ReimbursementService";
import Reimbursement from "../interfaces/Reimbursement";
import UpdateForm from "./UpdateForm";
import UpdateStatus from "./UpdateStatus";

export const ReimbursementList = (props: { cookies: AppCookies }) => {
  const cookies = props.cookies;
  const token = cookies.token as string;
  const role = cookies.principal?.role;

  const [reimbursements, setReimbursements] = useState([] as Reimbursement[]);
  const [selectIndex, setSelectIndex] = useState(0);
  const [tableNavStyle, setStyle] = useState("");
  const [id, setId] = useState("" as string | null);
  const [modal, setModal] = useState(false);
  const [amount, setAmount] = useState("" as string | undefined);
  const [description, setDescription] = useState("" as string | null | undefined);
  const [type, setType] = useState("" as string | null | undefined);
  const [status, setStatus] = useState("" as string | null | undefined);
  const [statusIndex, setStatusIndex] = useState(0);

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
  }, [role, token, modal]);

  useEffect(() => {
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
  }, [selectIndex, token]);

  useEffect(() => {
    switch (statusIndex) {
      case 1:
        ReimbursementService.updateStatus(token, {reimb_id: id as string, statusName: "APPROVED" })
          .then((response) => {
            console.log(response);

            if (response.status === 200) {
              console.log(response.data);
              setReimbursements(response.data);
            } else console.log(response.status);
          })
          .then(() => {
            if (selectIndex === 0)
              setSelectIndex(1);
            else
              setSelectIndex(0);
          })
          .catch((error) => console.log(error));
        break;

      case 2:
        ReimbursementService.updateStatus(token, {reimb_id: id as string, statusName: "DENIED" })
        .then((response) => {
          console.log(response);

          if (response.status === 200) {
            console.log(response.data);
            setReimbursements(response.data);
          } else console.log(response.status);
        })
        .then(() => {
          if (selectIndex === 0)
            setSelectIndex(1);
          else
            setSelectIndex(0);
        })
        .catch((error) => console.log(error));
    }
  }, [statusIndex]);

  const handleModal = (e: SyntheticEvent) => {
    setModal(!modal);
    const target = e.target as HTMLButtonElement;
    const tableRow = target?.parentNode?.parentNode as HTMLElement;
    
    console.log(target?.parentNode?.parentNode?.childNodes.item(3).textContent)

    const extractedId = tableRow.getAttribute("id");
    const extractedAmount = target?.parentNode?.parentNode?.childNodes
      .item(1)
      .textContent?.substring(1);
    const extractedDescription =
      target?.parentNode?.parentNode?.childNodes.item(2).textContent;
    const extractedType =
      target?.parentNode?.parentNode?.childNodes.item(5).textContent;
    const extractedStatus =
      target?.parentNode?.parentNode?.childNodes.item(4).textContent;

    setId(extractedId);
    setAmount(extractedAmount);
    setDescription(extractedDescription);
    setType(extractedType);
    setStatus(extractedStatus);
  };

  function noPending() {
    const pendingReimbs = reimbursements.filter(reimbursement => {
      if (reimbursement.status === "PENDING")
        return true;
      else
        return false;
    });
    if (pendingReimbs.length === 0)
      return true;
    else
      return false; 
  }

  function handleStatusChange(e: SyntheticEvent) {
    const target = e.target as HTMLSelectElement;
    const tableRow = target.parentNode?.parentNode as HTMLElement;
    
    setId(tableRow.getAttribute("id"));
    setStatusIndex(target.selectedIndex);
  }

  return (
    <>
      <main id="reimbursement-list" className="container-fluid">
        {role === "FINANCE MANAGER" && <h1>Reimbursements</h1>}
        {role === "EMPLOYEE" && <h1>Your Reimbursements</h1>}
        
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
              <option value="Filter by:">
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
              {role === "FINANCE MANAGER" && <td>Author</td>}
              <td>Resolver</td>
              <td>Status</td>
              <td>Type</td>
              {role === "EMPLOYEE" && !noPending() && <td>Action</td>}
            </tr>
          </thead>

          <tbody>
            {reimbursements.length > 0 && reimbursements.map((reimbursement: Reimbursement) => (
              <tr id={reimbursement.id} key={reimbursement.id}>
                <td>{reimbursements.indexOf(reimbursement) + 1}</td>
                <td>{"$" + parseFloat(reimbursement.amount).toFixed(2)}</td>
                <td>{reimbursement.description}</td>
                {role === "FINANCE MANAGER" && <td>{reimbursement.author_id}</td>}
                <td>{reimbursement.resolver_id}</td>
                <td>
                  {role === "FINANCE MANAGER" && reimbursement.status === "PENDING" ? 
                  <select 
                    onChange={handleStatusChange}
                  >
                    <option>Pending</option>
                    <option>Approve</option>
                    <option>Deny</option>
                  </select>
                  :
                  reimbursement.status
                  }
                </td>
                <td className="type">{reimbursement.type}</td>
                {role === "EMPLOYEE" && reimbursement.status === "PENDING" &&
                <td>
                  <button id="update-btn" className="btn btn-warning" onClick={handleModal}>
                    Update
                  </button>
                </td>}
              </tr>
            ))}
          </tbody>
        </table>
        {modal && role === "EMPLOYEE" && (
          <UpdateForm
            id={id || ""}
            amount={amount || ""}
            description={description || ""}
            status={status || ""}
            type={type || ""}
            setModal={setModal}
            token={token}
          />
        )}

        {modal && role === "FINANCE MANAGER" && (
          <UpdateStatus 
            id={id || ""}
            status={status || ""}
            token={token}
            setModal={setModal}
            />
        )
        }
      </main>
    </>
  );
};

export default ReimbursementList;

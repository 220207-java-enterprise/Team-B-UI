import React from "react";
import ReimbursementService from "../services/ReimbursementService";


class ReimbursementComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reimbursements: [],
    };
  }

  componentDidMount() {
    ReimbursementService.getReimbursements().then((response) => {
      this.setState({ reimbursements: response.data });
    });
  }
  render() {
    return (
      <div>
        <h1 className="text-center">ERS REIMBURSEMENTS LIST</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Reimbursement Id</td>
              <td>Amount</td>
              <td>Description</td>
            </tr>
          </thead>

          <tbody>
            {this.state.reimbursements.map((reimbursement) => (
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
  }
}

export default ReimbursementComponent;

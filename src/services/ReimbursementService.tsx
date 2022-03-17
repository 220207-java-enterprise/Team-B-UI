import axios from "axios";


const Reimbursements_REST_API_URL = "http://localhost:4001/ers/reimbs";

class ReimbursementService {
  getReimbursements() {
    return axios.get(Reimbursements_REST_API_URL);
  }

  createReimbursement(reimbursement:Object){
    return axios.post(Reimbursements_REST_API_URL,reimbursement)
  }
}

export default new ReimbursementService();

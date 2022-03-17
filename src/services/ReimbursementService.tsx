import axios from "axios";

const Reimbursements_REST_API_URL = "http://localhost:5001/ers/reimbs";

class ReimbursementService {
  getReimbursements() {
    const config = {
      headers : {
        
      }
    }
    
    return axios.get(Reimbursements_REST_API_URL, config);
  }

  createReimbursement(reimbursement: object){
    return axios.post(Reimbursements_REST_API_URL,reimbursement)
  }
}

export default new ReimbursementService();
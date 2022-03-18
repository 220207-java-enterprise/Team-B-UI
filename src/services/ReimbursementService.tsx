import axios from "axios";

const Reimbursements_REST_API_URL = "http://localhost:4001/ers/reimbs";

class ReimbursementService {
  getReimbursements() {
    const config = {
      headers : {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0MmFiZDE1Yi04ZThhLTQ3MzctODUyMy1lOTcyMjYwMzYwODUiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc2MzUxMzMsImV4cCI6MTY0NzYzODczMywic3ViIjoiYmV0YXBzaWkiLCJyb2xlIjoiRklOQU5DRSBNQU5BR0VSIn0.ajDcJG_M8b0FjKSPG_CldQJt4BEPK_QIt-rT1dhF0Mc"
      }
    }
    
    return axios.get(Reimbursements_REST_API_URL, config);
  }

  createReimbursement(reimbursement: object){
    const config = {
      headers : {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5YjdkNDg3ZC1hYTYzLTQ4YTgtOWQzNC0xOGM0ZDk4M2JjYWIiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc2MzUxODQsImV4cCI6MTY0NzYzODc4NCwic3ViIjoiemV0YXRhdXUiLCJyb2xlIjoiRU1QTE9ZRUUifQ.JrnHFWnrMplyZwoA11zUXR7N_nufGqeHwCD6dCTGK4c"
      }
    }
    return axios.post(Reimbursements_REST_API_URL, reimbursement, config)
  }
}

export default new ReimbursementService();
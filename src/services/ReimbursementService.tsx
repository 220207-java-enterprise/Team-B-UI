import axios from "axios";

const Reimbursements_REST_API_URL = "http://localhost:4001/ers/reimbs";

class ReimbursementService {
  getReimbursements() {
    const config = {
      headers : {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0MmFiZDE1Yi04ZThhLTQ3MzctODUyMy1lOTcyMjYwMzYwODUiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc2MjIxMDEsImV4cCI6MTY0NzYyNTcwMSwic3ViIjoiYmV0YXBzaWkiLCJyb2xlIjoiRklOQU5DRSBNQU5BR0VSIn0.3-jJEAjiE-ISATb8AJsAN0HQD23I7Zdv39Iz_UyvgbU"
      }
    }
    
    return axios.get(Reimbursements_REST_API_URL, config);
  }

  createReimbursement(reimbursement: object){
    const config = {
      headers : {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2ODNmODYwMS04NjhjLTQ3ZTktODQ5MC00ZTUwOTBkM2Y4MzEiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc2MjE5NjUsImV4cCI6MTY0NzYyNTU2NSwic3ViIjoiZGVsdGFwaGkiLCJyb2xlIjoiRU1QTE9ZRUUifQ.gsdxXSyDWahxcOffyzmxsjoaZ8LFsUNHz7lc60ySpqY"
      }
    }
    return axios.post(Reimbursements_REST_API_URL, reimbursement, config)
  }
}

export default new ReimbursementService();
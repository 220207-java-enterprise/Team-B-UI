import axios from "axios";

const Reimbursements_REST_API_URL = "http://localhost:4001/ers/reimbs";

class ReimbursementService {
  getReimbursements() {
    const config = {
      headers : {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0MmFiZDE1Yi04ZThhLTQ3MzctODUyMy1lOTcyMjYwMzYwODUiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc2MTc2OTksImV4cCI6MTY0NzYyMTI5OSwic3ViIjoiYmV0YXBzaWkiLCJyb2xlIjoiRklOQU5DRSBNQU5BR0VSIn0.WQLckNa6soLjDKOgdE80kCcq2bC9TLRkwjpTjLTerjQ"
      }
    }
    
    return axios.get(Reimbursements_REST_API_URL, config);
  }

  createReimbursement(reimbursement: object){
    const config = {
      headers : {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzMjYzMmJhOS0xYzVkLTQ3YzQtOGI3Ni0zZjI1Y2VhYTBjOTUiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc2MTc1NzIsImV4cCI6MTY0NzYyMTE3Miwic3ViIjoiZXBzaWxvbnVwc2lsb24iLCJyb2xlIjoiRU1QTE9ZRUUifQ.f0qktQKeD9y67fqYk1Yp_jCK7fcwGDZDNxHrAMGzD_A"
      }
    }
    return axios.post(Reimbursements_REST_API_URL, reimbursement, config)
  }
}

export default new ReimbursementService();
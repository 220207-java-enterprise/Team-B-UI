import axios from "axios";

const Reimbursements_REST_API_URL = "http://localhost:4001/ers/reimbs";
const Lodging_REST_API_URL = "http://localhost:4001/ers/reimbs/types/lodging"
const Travel_REST_API_URL = "http://localhost:4001/ers/reimbs/types/travel"
const Food_REST_API_URL = "http://localhost:4001/ers/reimbs/types/food"
const Other_REST_API_URL = "http://localhost:4001/ers/reimbs/types/other"
const Pending_REST_API_URL = "http://localhost:4001/ers/reimbs/statuses/pending"
const Approved_REST_API_URL = "http://localhost:4001/ers/reimbs/statuses/approved"
const Denied_REST_API_URL = "http://localhost:4001/ers/reimbs/statuses/denied"
const MyReimbursements_REST_API_URL = "http://localhost:4001/ers/reimbs/author"
const UpdateStatus_REST_API_URL = "http://localhost:4001/ers/reimbs/status"
const Update_REST_API_URL = "http://localhost:4001/ers/reimbs/employee"
const Resolved_REST_API_URL = "http://localhost:4001/ers/reimbs/resolver"


const ReimbursementService = {
  getReimbursements: (token: string) => {
    const config = {
      headers : {
        Authorization: token
      },
      validateStatus: () => true
    }
    
    return axios.get(Reimbursements_REST_API_URL, config);
  },

  createReimbursement: (reimbursement: { amount: string, description: string, type: string}) => {
    const config = {
      headers : {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzMjYzMmJhOS0xYzVkLTQ3YzQtOGI3Ni0zZjI1Y2VhYTBjOTUiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc2MTc1NzIsImV4cCI6MTY0NzYyMTE3Miwic3ViIjoiZXBzaWxvbnVwc2lsb24iLCJyb2xlIjoiRU1QTE9ZRUUifQ.f0qktQKeD9y67fqYk1Yp_jCK7fcwGDZDNxHrAMGzD_A"
      },
      validateStatus: () => true
    }
    
    return axios.post(Reimbursements_REST_API_URL, reimbursement, config)
  },

  getPendingReimbursements: () => {
    const config = {
      headers : {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0MmFiZDE1Yi04ZThhLTQ3MzctODUyMy1lOTcyMjYwMzYwODUiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc4MTgzNTgsImV4cCI6MTY0NzgyMTk1OCwic3ViIjoiYmV0YXBzaWkiLCJyb2xlIjoiRklOQU5DRSBNQU5BR0VSIn0.2Jnnp3Kqy8a8t_lkxOOQtyZoPs3nZkI-FALWy3ihQ9Q"
      },
      validateStatus: () => true
    }
    
    return axios.get(Pending_REST_API_URL, config);
  },

  getApprovedReimbursements: () => {
    const config = {
      headers : {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0MmFiZDE1Yi04ZThhLTQ3MzctODUyMy1lOTcyMjYwMzYwODUiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc4MTgzNTgsImV4cCI6MTY0NzgyMTk1OCwic3ViIjoiYmV0YXBzaWkiLCJyb2xlIjoiRklOQU5DRSBNQU5BR0VSIn0.2Jnnp3Kqy8a8t_lkxOOQtyZoPs3nZkI-FALWy3ihQ9Q"
      },
      validateStatus: () => true
    }
    
    return axios.get(Approved_REST_API_URL, config);
  },

  getDeniedReimbursements: () => {
    const config = {
      headers : {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0MmFiZDE1Yi04ZThhLTQ3MzctODUyMy1lOTcyMjYwMzYwODUiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc4MTgzNTgsImV4cCI6MTY0NzgyMTk1OCwic3ViIjoiYmV0YXBzaWkiLCJyb2xlIjoiRklOQU5DRSBNQU5BR0VSIn0.2Jnnp3Kqy8a8t_lkxOOQtyZoPs3nZkI-FALWy3ihQ9Q"
      },
      validateStatus: () => true
    }
    
    return axios.get(Denied_REST_API_URL, config);
  },

  getLodgingReimbursements: () => {
    const config = {
      headers : {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0MmFiZDE1Yi04ZThhLTQ3MzctODUyMy1lOTcyMjYwMzYwODUiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc4MTgzNTgsImV4cCI6MTY0NzgyMTk1OCwic3ViIjoiYmV0YXBzaWkiLCJyb2xlIjoiRklOQU5DRSBNQU5BR0VSIn0.2Jnnp3Kqy8a8t_lkxOOQtyZoPs3nZkI-FALWy3ihQ9Q"
      },
      validateStatus: () => true
    }
    
    return axios.get(Lodging_REST_API_URL, config);
  },

  getTravelReimbursements: () => {
    const config = {
      headers : {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0MmFiZDE1Yi04ZThhLTQ3MzctODUyMy1lOTcyMjYwMzYwODUiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc4MTgzNTgsImV4cCI6MTY0NzgyMTk1OCwic3ViIjoiYmV0YXBzaWkiLCJyb2xlIjoiRklOQU5DRSBNQU5BR0VSIn0.2Jnnp3Kqy8a8t_lkxOOQtyZoPs3nZkI-FALWy3ihQ9Q"
      },
      validateStatus: () => true
    }
    
    return axios.get(Travel_REST_API_URL, config);
  },

  getFoodReimbursements: () => {
    const config = {
      headers : {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0MmFiZDE1Yi04ZThhLTQ3MzctODUyMy1lOTcyMjYwMzYwODUiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc4MTgzNTgsImV4cCI6MTY0NzgyMTk1OCwic3ViIjoiYmV0YXBzaWkiLCJyb2xlIjoiRklOQU5DRSBNQU5BR0VSIn0.2Jnnp3Kqy8a8t_lkxOOQtyZoPs3nZkI-FALWy3ihQ9Q"
      },
      validateStatus: () => true
    }
    
    return axios.get(Food_REST_API_URL, config);
  },

  getOtherReimbursements: () => {
    const config = {
      headers : {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0MmFiZDE1Yi04ZThhLTQ3MzctODUyMy1lOTcyMjYwMzYwODUiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc4MTgzNTgsImV4cCI6MTY0NzgyMTk1OCwic3ViIjoiYmV0YXBzaWkiLCJyb2xlIjoiRklOQU5DRSBNQU5BR0VSIn0.2Jnnp3Kqy8a8t_lkxOOQtyZoPs3nZkI-FALWy3ihQ9Q"
      },
      validateStatus: () => true
    }
    
    return axios.get(Other_REST_API_URL, config);
  },

  getMyReimbursements: () => {
    const config = {
      headers : {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzMjYzMmJhOS0xYzVkLTQ3YzQtOGI3Ni0zZjI1Y2VhYTBjOTUiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc4MTk2NTMsImV4cCI6MTY0NzgyMzI1Mywic3ViIjoiZXBzaWxvbnVwc2lsb24iLCJyb2xlIjoiRU1QTE9ZRUUifQ.Wab_NPDb16GSNeOJd600qp9QH0W_mmF3rRDnTodZ6lo"
      },
      validateStatus: () => true
    }
    
    return axios.get(MyReimbursements_REST_API_URL, config);
  },

  updateStatus: (reimbursement: { reimb_id: string, statusName: string}) => {
    const config = {
      headers : {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0MmFiZDE1Yi04ZThhLTQ3MzctODUyMy1lOTcyMjYwMzYwODUiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc4MTgzNTgsImV4cCI6MTY0NzgyMTk1OCwic3ViIjoiYmV0YXBzaWkiLCJyb2xlIjoiRklOQU5DRSBNQU5BR0VSIn0.2Jnnp3Kqy8a8t_lkxOOQtyZoPs3nZkI-FALWy3ihQ9Q"
      },
      validateStatus: () => true
    }
    
    return axios.put(UpdateStatus_REST_API_URL, reimbursement, config)
  },
  update: (reimbursement: { id: string, amount: string, description: string, type: string}) => {
    const config = {
      headers : {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzMjYzMmJhOS0xYzVkLTQ3YzQtOGI3Ni0zZjI1Y2VhYTBjOTUiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc4MTk2NTMsImV4cCI6MTY0NzgyMzI1Mywic3ViIjoiZXBzaWxvbnVwc2lsb24iLCJyb2xlIjoiRU1QTE9ZRUUifQ.Wab_NPDb16GSNeOJd600qp9QH0W_mmF3rRDnTodZ6lo"
      },
      validateStatus: () => true
    }
    
    return axios.put(Update_REST_API_URL, reimbursement, config)
  },
  getResolved: () => {
    const config = {
      headers : {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0MmFiZDE1Yi04ZThhLTQ3MzctODUyMy1lOTcyMjYwMzYwODUiLCJpc3MiOiJ0ZWNoLXByb2plY3QiLCJpYXQiOjE2NDc4MjIwOTYsImV4cCI6MTY0NzgyNTY5Niwic3ViIjoiYmV0YXBzaWkiLCJyb2xlIjoiRklOQU5DRSBNQU5BR0VSIn0.DFa5RKa8TGjJ0ICEEArocsADC0CI6Ldc7Im7eaDdWeI"
      },
      validateStatus: () => true
    }
    
    return axios.get(Resolved_REST_API_URL, config);
  }

}

export default ReimbursementService;
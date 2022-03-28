Link to our API: https://github.com/220207-java-enterprise/Team-B-API

# Java Enterprise Foundations Project Requirements

## Project Description

For the foundations module of your training you are tasked with building an API that will support a new internal expense reimbursement system. This system will manage the process of reimbursing employees for expenses incurred while on company time. This system will work closely with the internal PRISM application - which is used for processing payments to employees. All registered employees in the company can login and submit requests for reimbursement and view their past tickets and pending requests. Finance managers can log in and view all reimbursement requests and past history for all employees in the company. Finance managers are authorized to approve and deny requests for expense reimbursement.
For the technology module of your training you are tasked with building a web-based expense reimbursement system. This system will manage the process of reimbursing employees for expenses incurred while on company time. This system will work closely with the internal PRISM application - which is used for processing payments to employees. All registered employees in the company can login and submit requests for reimbursement and view their past tickets and pending requests. Finance managers can log in and view all reimbursement requests and past history for all employees in the company. Finance managers are authorized to approve and deny requests for expense reimbursement.

### Project Design Specifications and Documents

@@ -26,132 +27,24 @@ Reimbursements are to be one of the following types:
### Technologies

**Persistence Tier**
- PostGreSQL (running on Docker)
- PostGreSQL (running locally using Docker)

**Application Tier**
- Java 8
- Spring 5 & Spring Boot
- Apache Maven
- JDBC
- Java EE Servlets
- Hibernate & Spring Data
- JSON Web Tokens
- JUnit
- Mockito

**Client Tier**
- HTML
- CSS
- TypeScript
- React

### PRISM

The PRISM application is another internal system that your expense reimbursement will communicate with when employee reimbursement requests are approved. You can find the codebase for the PRISM application with instructions for running it locally [here](https://github.com/220207-java-enterprise/prism).

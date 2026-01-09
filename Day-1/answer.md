# Web Application Fundamentals

## Q1. Role of Frontend (FE)

The Frontend (FE) is the part of a web application that users directly see and interact with through a web browser. It focuses on presenting information clearly and making the application easy to use.

### User Interface
Frontend is responsible for building the user interface, including layouts, buttons, forms, colors, and navigation. It ensures the application looks visually appealing and works well on different screen sizes.

### User Interaction
Frontend manages user interactions such as clicking buttons, entering data in forms, submitting requests, and navigating between pages. It also performs basic validation and provides instant feedback to users.

### Communication with Backend
Frontend communicates with the backend using APIs and HTTP requests. It sends user input to the server and displays the response data received from the backend.


## Q2. Role of Backend (BE)

The Backend (BE) is the server-side part of a web application that handles data processing, business rules, and security.

### Server-Side Processing
Backend receives requests from the frontend, applies business logic, and processes data before sending responses back.

### Database Handling
Backend manages all database operations such as storing, retrieving, updating, and deleting data related to users, products, and transactions.

### Security and Authentication
Backend handles user authentication and authorization. It secures sensitive data, encrypts passwords, and controls access to resources.


## Q3. Business Logic

Business Logic refers to the set of rules and decision-making processes that define how an application works according to business requirements. It ensures correct behavior of the system.

### Real-World Examples

1. **E-commerce Application**
   - Applying discounts only for valid coupons  
   - Preventing checkout if the product is out of stock  

2. **Banking Application**
   - Allowing withdrawals only when sufficient balance is available  
   - Blocking accounts after multiple failed login attempts  

3. **Online Learning Platform**
   - Granting course access only after payment  
   - Issuing certificates after course completion  

---

## Q4. Client–Server Model

The Client–Server Model is a system where the client requests services and the server provides them.

### Client
The client is a user-facing application such as a web browser or mobile app that sends requests.

### Server
The server processes client requests, applies business logic, and sends responses.

### Communication
Communication occurs using HTTP or HTTPS request–response mechanisms.

## Q5. Three-Tier Architecture

Three-Tier Architecture divides a web application into three independent layers to improve scalability and maintainability.

### Presentation Layer
Handles the user interface and user interactions.

### Application (Business) Layer
Contains business logic and request processing.

### Data Layer
Manages the database and data storage.

### Why This Architecture Is Used
- Better scalability  
- Easy maintenance  
- Improved security  
- Clear separation of concerns  

## Q6. JavaScript as a Backend Language

JavaScript is widely used as a backend language due to its efficiency and strong ecosystem.

### Performance
JavaScript uses a non-blocking, event-driven architecture, making it suitable for handling multiple requests.

### Ecosystem
JavaScript has a large ecosystem supported by npm, providing many backend libraries.

### Popular Backend Frameworks
- Node.js  
- Express.js  
- NestJS  
- Fastify  

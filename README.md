## 📞 **Phonebook-Occupation App**

### **Project Description**  
The **Phonebook-Occupation App** is a fullstack application that allows users to **manage a phonebook** while categorizing contacts by their **occupations**. The app includes functionalities for creating, reading, updating, and deleting (CRUD) contacts, ensuring that the data is stored and retrieved efficiently from a database.  

The application structure was inspired by the **DreamFest** project, which involved implementing database functions, connecting them to API routes, and displaying the data dynamically in a React front end.

**Technologies and Tools Used:**  
- **Front-end:** React.js with React Query  
- **Back-end:** Node.js and Express  
- **Database:** SQLite3 with Knex.js (for migrations and seed data)  
- **Data Fetching:** `useQuery` and `useMutation` hooks (React Query)  
- **Environment Variables:** dotenv to protect sensitive data  
- **API Testing:** Thunder Client  
- **Version Control:** Git and GitHub  
- **Styling:** CSS for a clean and simple user interface  

---

### **Motivations**  
The primary goals for creating this project were:  
1. **Solve a Real-World Problem:** Implement a phonebook app that not only stores contacts but also organizes them by their occupations, making it more functional for users.  
2. **Practice Fullstack Development:** Follow a structured development process to strengthen skills in fullstack application development.  
3. **Explore React Query:** Use `useQuery` and `useMutation` to handle server-side data fetching, caching, and mutations efficiently.  
4. **Database and API Integration:** Develop robust database functions using Knex.js and connect them to API routes, ensuring smooth interaction between the client and server.  
5. **Enhance Debugging Skills:** Troubleshoot and resolve issues like incorrect data mapping, JOIN queries, and managing client-side state.

---

### **What I Learned**  
Throughout the development of this project, I gained practical experience and knowledge in the following areas:  
- **Backend Development:**  
  - Implementing CRUD database functions with Knex.js.  
  - Writing efficient JOIN queries to combine data from multiple tables (contacts and occupations).  
  - Creating and connecting API routes (GET, POST, PATCH, DELETE) to interact with the database.  

- **Frontend Development:**  
  - Using React Query’s `useQuery` and `useMutation` hooks to fetch, create, update, and delete data.  
  - Building and organizing React components to display dynamic content (e.g., phonebook list, forms).  
  - Debugging and ensuring components display the correct data structure returned from the server.  

- **Problem-Solving:**  
  - Ensuring accurate handling of **foreign keys** (e.g., `location_id`) when mapping database relationships.  
  - Refactoring functions to simplify and separate concerns (e.g., breaking down logic for updating and deleting contacts).  

- **Best Practices:**  
  - Protecting sensitive keys with **dotenv** and `.gitignore`.  
  - Testing API routes using **Thunder Client** to ensure correctness and reliability.  
  - Managing and improving performance by optimizing database queries and images.

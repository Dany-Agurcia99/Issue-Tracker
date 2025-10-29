## 🧩 What It Is

**Issue Tracker** is a full-stack web application built with **Next.js** and **TypeScript** that allows users to create, edit, and manage issues efficiently.  
It’s designed as a lightweight alternative to tools like Jira or GitHub Issues — simple enough for personal or small-team use, but structured like a production-ready app.

The app uses **Next.js** for both the frontend and backend through its App Router, making it fast and cohesive.  
Data is stored using **Prisma ORM**, which connects to a SQL database for managing issues, users, and their relationships.  
Custom **middleware** handles authentication and route protection, while **Sentry** integration ensures that any runtime or server errors are tracked and reported.

Overall, the project follows a clean architecture that separates concerns, prioritizes maintainability, and uses modern development practices.

---

## 💡 Why I Built It

I built this project to strengthen my experience with **Next.js** as a full-stack framework and to explore how real-world features — like authentication, database modeling, and error monitoring — fit together in a production-ready environment.  

My goal was to go beyond just the frontend and practice the **entire lifecycle of a modern web application**, from schema design and backend logic to performance monitoring and deployment.  

It’s also a foundation for future experimentation — adding role-based permissions, comments, file uploads, or integrations with third-party services — while keeping the core clean and easy to extend.

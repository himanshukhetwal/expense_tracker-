💰 Expense Tracker with Fraud Detection (MERN Stack)

A full-stack Expense Tracker application built using the MERN Stack (MongoDB, Express, React, Node.js).

This application allows users to manage income and expenses while also laying the foundation for overspending/fraud detection alerts.

📖 Project Overview

This project helps users:

Track income and expenses

View transaction history

Monitor total balance

Identify overspending patterns

Store data securely in MongoDB

The backend handles API logic and database operations, while the frontend provides an interactive and user-friendly interface built in React.

🏗️ Architecture

Frontend (React) → Backend (Express API) → MongoDB Database

React sends API requests

Express processes them

MongoDB stores the data

🚀 Features
🔹 Frontend (React)

Add new transactions

Display transaction history

Show total balance

Show total income & expense

Clean and responsive UI

API integration with backend

🔹 Backend (Node + Express)

REST API structure

MongoDB integration with Mongoose

Create & fetch transactions

Environment variable configuration

CORS enabled

🔹 Smart Extension (Future Ready)

Overspending detection logic

Email alerts using Nodemailer

JWT Authentication

Monthly analytics

🛠 Tech Stack
Frontend:

React.js

Axios

CSS

Backend:

Node.js

Express.js

MongoDB

Mongoose

dotenv

CORS

📁 Project Structure
expense-tracker/
│
├── frontend/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/yourusername/expense-tracker.git
cd expense-tracker
2️⃣ Setup Backend
cd backend
npm install

Create .env file:

MONGO_URI=mongodb://localhost:27017/expenseTracker
PORT=5000

Run backend:

npx nodemon server.js
3️⃣ Setup Frontend

Open new terminal:

cd frontend
npm install
npm start

Frontend runs on:

http://localhost:3000

Backend runs on:

http://localhost:5000
📡 API Endpoints
Get Transactions
GET /api/transactions
Add Transaction
POST /api/transactions

Body:

{
  "title": "Groceries",
  "amount": 1200,
  "type": "expense"
}
🎯 Learning Outcomes

Full MERN stack development

REST API creation

MongoDB database integration

React state management

Frontend & backend integration

Environment configuration

📌 Future Improvements

JWT Authentication

Delete & Update transactions

Charts & analytics

Email alerts

Deployment (Render + Vercel)

👨‍💻 Author

Himanshu Khetwal

If you want, I can now:

🔥 Make this look like a resume-level project description

🧠 Add a proper “Fraud Detection Algorithm” explanation section

📸 Add a screenshots section format

🌍 Help you write a strong GitHub project description (short version)

Tell me what you want next 😎

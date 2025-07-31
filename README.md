
# Finote – Personal Finance Tracker

**Finote** is a comprehensive full-stack web application designed to help individuals manage their personal finances effectively. Whether you're a student, a working professional, or someone looking to take control of their financial life, Finote provides the tools you need to plan budgets, track expenses, monitor spending patterns, and achieve savings goals — all within a simple, secure, and intuitive interface.

Finote emphasizes both usability and data privacy. Users can register, log in securely with JSON Web Tokens (JWT), and interact with a clean dashboard that gives them clear insights into their financial habits. The system allows the management of multiple budgets and transactions, offering both visual and statistical summaries to promote better financial decisions.

This application is built using modern technologies including the MERN stack (MongoDB, Express, React, Node.js), with a fast and responsive user interface powered by Vite and styled with Tailwind CSS.

---

## Features

* **Smart Budgeting**: Create customized budgets and categorize your expenses
* **Transaction Management**: Add, edit, and delete income or expense entries
* **Insightful Dashboard**: View statistical breakdowns and spending trends
* **Goal Tracking**: Set personal financial goals and monitor your progress
* **User Authentication**: Secure login and registration with JWT
* **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
* **Data Privacy**: All financial data is stored securely and never shared

---

## Tech Stack

| Area     | Technology Used                           |
| -------- | ----------------------------------------- |
| Frontend | React, Vite, Tailwind CSS, Axios          |
| Backend  | Node.js, Express.js                       |
| Database | MongoDB with Mongoose                     |
| Auth     | JWT (JSON Web Tokens), Bcrypt for hashing |
| Hosting  | Vercel,Render                             |
| Icons/UI | Lucide-react, Context API                 |

---

## Getting Started (Local Setup)

### Prerequisites

* Node.js (v16 or above)
* MongoDB (local installation or MongoDB Atlas account)
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/personal-finance-tracker.git
cd finote
```

### 2. Set up Backend

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory with the following content:

```env
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
```

Then start the backend server:

```bash
npm run dev
```

### 3. Set up Frontend

```bash
cd ../frontend
npm install
```

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:5000/api
```

Then start the frontend development server:

```bash
npm run dev
```

The application will now be running locally:

* Frontend at: `http://localhost:5173`
* Backend at: `http://localhost:5000`

---




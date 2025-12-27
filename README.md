🏦 Account Service (Node.js + MongoDB)

A simple Banking Account Service built using Node.js, Express, and MongoDB.
This project demonstrates how a basic bank account microservice works.

🚀 Features

Create bank account

Get account details

Deposit money

Withdraw money

MongoDB authentication support

Docker-ready MongoDB setup

🛠 Tech Stack

Node.js

Express.js

MongoDB

Mongoose

Docker (MongoDB)

📁 Project Structure
account-service/
├── src/
│   ├── config/
│   │   └── db.js                # MongoDB connection
│   ├── controllers/
│   │   └── account.controller.js # Business logic
│   ├── models/
│   │   └── Account.js           # Account schema
│   ├── routes/
│   │   └── account.routes.js    # API routes
│   ├── app.js                   # Express app setup
│   └── server.js                # Server entry point
├── .env                         # Environment variables
├── .gitignore                   # Git ignore rules
├── .dockerignore                # Docker ignore rules
├── package.json
└── README.md

⚙️ Prerequisites

Node.js (v18 or later)

npm

Docker (for MongoDB)

🐳 Run MongoDB using Docker
docker run -d \
  --name mongo-bank \
  --network host \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=admin123 \
  mongo:7

🔐 Environment Configuration

Create a .env file in the project root:

PORT=3000
MONGO_URI=mongodb://admin:admin123@127.0.0.1:27017/banking?authSource=admin

▶️ Run the Application
npm install
npm run dev


Expected output:

MongoDB connected successfully
Account Service running on port 3000

🔗 API Endpoints
Method	Endpoint	Description
POST	/api/accounts	Create account
GET	    /api/accounts/:accountNumber	Get account
POST	/api/accounts/:accountNumber/deposit	Deposit money
POST	/api/accounts/:accountNumber/withdraw	Withdraw money

🧪 Sample Requests
Create Account
POST /api/accounts
{
  "accountNumber": "ACC1001",
  "holderName": "Sanjay Sah"
}

Deposit Money
POST /api/accounts/ACC1001/deposit
{
  "amount": 5000
}

✅ Status

Account creation ✔

Deposit & withdraw ✔

MongoDB authentication ✔

👤 Author

Sanjay Sah

# 🏦 Account Service (Node.js + MongoDB)

A simple **Banking Account Service** built using **Node.js, Express, and MongoDB**.  
This project demonstrates how a basic **bank account microservice** works.

---

## 🚀 Features
- Create bank account  
- Get account details  
- Deposit money  
- Withdraw money  
- MongoDB authentication support  
- Docker-ready MongoDB setup  

---

## 🛠 Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Docker (MongoDB)**

---

## ⚙️ Prerequisites
- **Node.js** (v18 or later)
- **npm**
- **Docker** (for MongoDB)

---

## 🐳 Run MongoDB using Docker

```bash
docker run -d \
  --name mongo-bank \
  --network host \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=admin123 \
  mongo:7
```
---

## Create a .env file in the project root:

```bash
PORT=3000
MONGO_URI=mongodb://admin:admin123@127.0.0.1:27017/banking?authSource=admin

```
---

## Run Application locally

```bash
npm install
npm run dev
```
---
## To Test project USE POSTMAN

## Method: POST
```bash
URL: http://localhost:3000/api/accounts

Headers
Content-Type: application/json 

➤ Body → raw → JSON
{
  "accountNumber": "ACC1001",
  "holderName": "Sanjay Sah"
}
```
## expected output
```bash
✅ Success Response (201)
{
  "_id": "65a1f...",
  "accountNumber": "ACC1001",
  "holderName": "Sanjay Sah",
  "balance": 0,
  "status": "ACTIVE",
  "createdAt": "2025-01-26T...",
  "updatedAt": "2025-01-26T..."
}
```
---
## GET Method, no body needed
```bash
http://localhost:3000/api/accounts/ACC1001
```
## you will get success response 200
```bash
{
  "accountNumber": "ACC1001",
  "holderName": "Sanjay Sah",
  "balance": 0
}
```
---

## For deposite money to account 
```bash
http://localhost:3000/api/accounts/ACC1001/deposit

headers
Content-Type: application/json

Body >> row >> json
{
  "amount": 5000
}

```

## expected response
```bash
{
  "accountNumber": "ACC1001",
  "balance": 5000
}

```
---
## To withdraw money
```bash
http://localhost:3000/api/accounts/ACC1001/withdraw

headers
Content-Type: application/json

Body >> row >> json
{
  "amount": 2000
}
```
## expected response
```bash
{
  "accountNumber": "ACC1001",
  "balance": 3000
}

```
---

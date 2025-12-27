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

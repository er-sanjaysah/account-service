const express = require("express");
const accountRoutes = require("./routes/account.routes");

const app = express();
app.use(express.json());

app.use("/api/accounts", accountRoutes);

module.exports = app;

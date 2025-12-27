const express = require("express");
const router = express.Router();
const controller = require("../controllers/account.controller");

router.post("/", controller.createAccount);
router.get("/:accountNumber", controller.getAccount);
router.post("/:accountNumber/deposit", controller.deposit);
router.post("/:accountNumber/withdraw", controller.withdraw);

module.exports = router;

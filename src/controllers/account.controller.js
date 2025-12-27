const Account = require("../models/Account");

// Create Account
exports.createAccount = async (req, res) => {
  try {
    const { accountNumber, holderName } = req.body;

    const exists = await Account.findOne({ accountNumber });
    if (exists) {
      return res.status(400).json({ message: "Account already exists" });
    }

    const account = await Account.create({
      accountNumber,
      holderName
    });

    res.status(201).json(account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Account
exports.getAccount = async (req, res) => {
  try {
    const account = await Account.findOne({
      accountNumber: req.params.accountNumber
    });

    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }

    res.json(account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Deposit
exports.deposit = async (req, res) => {
  try {
    const { amount } = req.body;

    if (amount <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    const account = await Account.findOneAndUpdate(
      { accountNumber: req.params.accountNumber },
      { $inc: { balance: amount } },
      { new: true }
    );

    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }

    res.json(account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Withdraw
exports.withdraw = async (req, res) => {
  try {
    const { amount } = req.body;

    const account = await Account.findOne({
      accountNumber: req.params.accountNumber
    });

    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }

    if (amount <= 0 || amount > account.balance) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    account.balance -= amount;
    await account.save();

    res.json(account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

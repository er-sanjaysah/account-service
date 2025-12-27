const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    accountNumber: {
      type: String,
      unique: true,
      required: true
    },
    holderName: {
      type: String,
      required: true
    },
    balance: {
      type: Number,
      default: 0
    },
    status: {
      type: String,
      enum: ["ACTIVE", "BLOCKED"],
      default: "ACTIVE"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Account", accountSchema);

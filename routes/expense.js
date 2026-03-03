const express = require("express");
const Expense = require("../models/Expense");
const User = require("../models/User");
const auth = require("../middleware/authMiddleware");
const sendAlert = require("../utils/sendAlert");

const router = express.Router();

// Add expense
router.post("/", auth, async (req, res) => {
  const { amount, category, description } = req.body;
  const user = await User.findById(req.user);

  const expense = await Expense.create({
    userId: user._id, amount, category, description
  });

  // Fraud detection: overspending
  if (amount > user.monthlyBudget * 0.3) {
    expense.isFlagged = true;
    await expense.save();
    sendAlert(user.email, `🚨 Overspending Alert: You spent ${amount} on ${category}`);
  }

  res.json(expense);
});

// Get all expenses
router.get("/", auth, async (req, res) => {
  const expenses = await Expense.find({ userId: req.user });
  res.json(expenses);
});

module.exports = router;

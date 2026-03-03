// server.js
import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory "database"
let expenses = [
  { id: 1, title: "Groceries", amount: 500, date: "2025-09-01" },
  { id: 2, title: "Transport", amount: 100, date: "2025-09-01" }
];

// -------------------- ROUTES -------------------- //

// ✅ Root route
app.get("/", (req, res) => {
  res.send("Expense Tracker API is running 🚀");
});

// ✅ GET all expenses
app.get("/api/expenses", (req, res) => {
  res.json(expenses);
});

// ✅ POST (add new expense)
app.post("/api/expenses", (req, res) => {
  const { title, amount, date } = req.body;

  if (!title || !amount || !date) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newExpense = {
    id: expenses.length + 1,
    title,
    amount,
    date
  };

  expenses.push(newExpense);
  res.status(201).json(newExpense);
});

// ✅ PUT (update expense by id)
app.put("/api/expenses/:id", (req, res) => {
  const { id } = req.params;
  const { title, amount, date } = req.body;

  const expense = expenses.find((e) => e.id === parseInt(id));
  if (!expense) {
    return res.status(404).json({ message: "Expense not found" });
  }

  expense.title = title || expense.title;
  expense.amount = amount || expense.amount;
  expense.date = date || expense.date;

  res.json(expense);
});

// ✅ DELETE (remove expense by id)
app.delete("/api/expenses/:id", (req, res) => {
  const { id } = req.params;
  const initialLength = expenses.length;

  expenses = expenses.filter((e) => e.id !== parseInt(id));

  if (expenses.length === initialLength) {
    return res.status(404).json({ message: "Expense not found" });
  }

  res.json({ message: "Expense deleted successfully" });
});

// -------------------- SERVER -------------------- //
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

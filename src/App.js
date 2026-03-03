import React, { useState, useEffect } from "react";
import axios from "axios";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Fetch expenses
  useEffect(() => {
    axios.get("http://localhost:5000/api/expenses")
      .then((res) => setExpenses(res.data))
      .catch((err) => console.error("Error fetching expenses:", err));
  }, []);

  // ✅ Add expense
  const addExpense = async (expense) => {
    try {
      const res = await axios.post("http://localhost:5000/api/expenses", expense);
      setExpenses([...expenses, res.data]);
      setShowForm(false);
    } catch (err) {
      console.error("Error adding expense:", err);
    }
  };

  // Delete expense
  const deleteExpense = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/expenses/${id}`);
      setExpenses(expenses.filter((e) => e.id !== id));
    } catch (err) {
      console.error("Error deleting expense:", err);
    }
  };

  // Update expense
  const updateExpense = async (id, updatedExpense) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/expenses/${id}`, updatedExpense);
      setExpenses(expenses.map((e) => (e.id === id ? res.data : e)));
    } catch (err) {
      console.error("Error updating expense:", err);
    }
  };

  // Total expense
  const totalExpense = expenses.reduce((sum, e) => sum + parseInt(e.amount), 0);

  return (
    <div className="min-h-screen p-6 text-white bg-gray-900">
      <h1 className="mb-2 text-3xl font-bold text-center">💰 Expense Tracker</h1>
      <p className="mb-6 text-center text-gray-400">
        Track your daily expenses and manage your budget
      </p>

      {/* Total */}
      <div className="p-4 mb-6 text-center bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">💸 Total Expenses: ₹{totalExpense}</h2>
      </div>

      {/* Add Expense Button */}
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 mb-4 transition bg-green-600 rounded hover:bg-green-700"
        >
          ➕ Add Expense
        </button>
      )}

      {/* Expense Form */}
      {showForm && <ExpenseForm onAddExpense={addExpense} />}

      {/* Expense List */}
      <ExpenseList
        expenses={expenses}
        onDeleteExpense={deleteExpense}
        onUpdateExpense={updateExpense}
      />

      {/* ✅ Expense Chart */}
      <ExpenseChart expenses={expenses} />
    </div>
  );
};

export default App;





// src/components/ExpenseForm.js
import React, { useState, useEffect } from "react";

const ExpenseForm = ({ addExpense, updateExpense, editingExpense }) => {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  useEffect(() => {
    if (editingExpense) {
      setExpense(editingExpense);
    }
  }, [editingExpense]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!expense.title || !expense.amount || !expense.date) {
      alert("Please fill in all fields");
      return;
    }

    if (editingExpense) {
      updateExpense(expense);
    } else {
      addExpense({ ...expense, id: Date.now().toString() });
    }

    setExpense({ title: "", amount: "", date: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 mb-6 bg-gray-800 rounded-lg shadow-md"
    >
      <h2 className="mb-4 text-xl font-semibold text-white">
        {editingExpense ? "✏️ Edit Expense" : "➕ Add Expense"}
      </h2>

      {/* Title with suggestion bar */}
      <label className="block mb-2 text-gray-300">Title</label>
      <input
        type="text"
        name="title"
        list="categories"
        value={expense.title}
        onChange={handleChange}
        placeholder="Enter expense title"
        className="w-full p-2 mb-4 text-white bg-gray-700 rounded"
      />

      {/* Suggestions */}
      <datalist id="categories">
        <option value="Groceries" />
        <option value="Transport" />
        <option value="Shopping" />
        <option value="Bills" />
        <option value="Gym Fee" />
        <option value="Entertainment" />
        <option value="Food" />
        <option value="Healthcare" />
        <option value="Education" />
        <option value="Rent" />
        <option value="Subscriptions" />
        <option value="Other" />
      </datalist>

      {/* Amount */}
      <label className="block mb-2 text-gray-300">Amount</label>
      <input
        type="number"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        placeholder="Enter amount"
        className="w-full p-2 mb-4 text-white bg-gray-700 rounded"
      />

      {/* Date */}
      <label className="block mb-2 text-gray-300">Date</label>
      <input
        type="date"
        name="date"
        value={expense.date}
        onChange={handleChange}
        className="w-full p-2 mb-4 text-white bg-gray-700 rounded"
      />

      <button
        type="submit"
        className="px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600"
      >
        {editingExpense ? "Update Expense" : "Add Expense"}
      </button>
    </form>
  );
};

export default ExpenseForm;


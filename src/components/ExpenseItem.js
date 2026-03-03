import React from "react";

const ExpenseItem = ({ expense, setEditingExpense, deleteExpense }) => {
  return (
    <div className="flex justify-between items-center bg-gray-800/70 p-4 rounded-lg shadow-md hover:scale-[1.02] transition-transform">
      <div>
        <h3 className="text-lg font-semibold">{expense.title} <span className="text-gray-400">({expense.category})</span></h3>
        <p className="text-gray-300">{expense.date} — ₹{expense.amount}</p>
      </div>
      <div className="space-x-3">
        <button
          onClick={() => setEditingExpense(expense)}
          className="px-3 py-1 text-white transition bg-indigo-500 rounded hover:bg-indigo-600"
        >
          ✏️ Edit
        </button>
        <button
          onClick={() => deleteExpense(expense.id)}
          className="px-3 py-1 text-white transition bg-red-500 rounded hover:bg-red-600"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;






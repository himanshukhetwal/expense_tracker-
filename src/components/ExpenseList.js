import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, setEditingExpense, deleteExpense }) => {
  if (expenses.length === 0) {
    return <p className="text-center text-gray-400">No expenses found</p>;
  }

  return (
    <div className="space-y-4">
      <h2 className="mb-2 text-xl font-semibold text-indigo-300">📋 Expenses List</h2>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          setEditingExpense={setEditingExpense}
          deleteExpense={deleteExpense}
        />
      ))}
    </div>
  );
};

export default ExpenseList;




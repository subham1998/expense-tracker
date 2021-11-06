import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [showAddExpenseForm, setShowAddExpenseForm] = useState(false);
  const handleNewExpenseData = (newExpense) => {
    const expenseData = { ...newExpense, id: Math.random().toString() };
    onAddExpense(expenseData);
    handleAddNewExpenseClick();
  };

  const handleFormReset = () => {
    handleAddNewExpenseClick();
  };

  const handleAddNewExpenseClick = () => {
    setShowAddExpenseForm((prevVisibilty) => {
      return !prevVisibilty;
    });
  };
  if (showAddExpenseForm) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onNewExpenseData={handleNewExpenseData}
          onFormReset={handleFormReset}
        ></ExpenseForm>
      </div>
    );
  }
  return (
    <div className="new-expense">
      <button onClick={handleAddNewExpenseClick}>Add New Expense</button>
    </div>
  );
};

export default NewExpense;

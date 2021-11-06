import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const handleNewExpenseData = (newExpense) => {
    const expenseData = { ...newExpense, id: Math.random().toString() };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onNewExpenseData={handleNewExpenseData}></ExpenseForm>
    </div>
  );
};

export default NewExpense;

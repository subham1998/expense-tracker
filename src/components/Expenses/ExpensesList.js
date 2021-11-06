import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ expenseList }) => {
  if (!expenseList.length) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {expenseList.map((e) => {
        return (
          <ExpenseItem
            key={e.id}
            title={e.title}
            date={e.date}
            amount={e.amount}
          ></ExpenseItem>
        );
      })}
    </ul>
  );
};

export default ExpensesList;

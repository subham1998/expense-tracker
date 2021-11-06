import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = ({ expense }) => {
  const [filterYear, setFilterYear] = useState("2021");
  const handleYearFilter = (year) => {
    setFilterYear(year);
    console.log(year);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filterYear}
        onFilterChange={handleYearFilter}
      ></ExpensesFilter>
      {expense.map((e) => {
        return (
          <ExpenseItem
            key={e.id}
            title={e.title}
            date={e.date}
            amount={e.amount}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
};

export default Expenses;

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expense }) => {
  const [filterYear, setFilterYear] = useState("2021");
  let expensesByYear = [...expense].filter(
    (e) => e.date.getFullYear().toString() === filterYear
  );
  const handleYearFilter = (year) => {
    setFilterYear(year);
    expensesByYear = [...expense].filter(
      (e) => e.date.getFullYear().toString() === year
    );
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filterYear}
        onFilterChange={handleYearFilter}
      ></ExpensesFilter>
      <ExpensesChart expenses={expensesByYear}></ExpensesChart>
      <ExpensesList expenseList={expensesByYear}></ExpensesList>
    </Card>
  );
};

export default Expenses;

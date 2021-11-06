import "./ExpensesFilter.css";

const ExpensesFilter = ({ onFilterChange, selectedYear }) => {
  const handleFilterChange = (event) => {
    const filterYear = event.target.value;
    onFilterChange(filterYear);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="expenses-filter">Filter by year</label>
        <select onChange={handleFilterChange} value={selectedYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

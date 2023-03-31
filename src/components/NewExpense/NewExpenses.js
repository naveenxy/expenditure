import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredeExpenseData) => {
    const expenseData = {
      ...enteredeExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    //console.log(expenseData)
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

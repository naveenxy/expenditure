import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [title,setTitle] =useState('');
    const [amount,setAmount] =useState('');
    const [date,setDate] =useState('');
const TitleChangeHandler =(e)=>{
    setTitle(e.target.value)
    
}
const amountChangeHandler =(e)=>{
    setAmount(e.target.value)
    
}
const dateChangeHandler =(e)=>{
    setDate(e.target.value)
    
}
const SubmitHandler =(e)=>{
    e.preventDefault()
  var expenseData ={
    title:title,
    amount:amount,
    date:new Date(date)
  }
  props.onSaveExpenseData(expenseData);
    //console.log(expenseData)
    setTitle('')
    setAmount('')
    setDate('')
}
//console.log(title)
  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" name="title"value={title} placeholder="Enter Title" onChange={TitleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" name ="amount" value={amount} min="1" step="1"  placeholder='Enter Amount' onChange={amountChangeHandler}>
          </input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" name ="date" value={date} min="2019-01-01" max="2022-10-01" placeholder='choose date' onChange={dateChangeHandler}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

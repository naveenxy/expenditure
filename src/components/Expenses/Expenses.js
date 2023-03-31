import React,{useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense =
    props.items.filter((expense=>  expense.date.getFullYear().toString()===filteredYear))
  
//console.log("rendered")

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
       <ExpenseList items ={filteredExpense}/>
      </Card>
    </div>
  );
};

// const Expenses = (props) => {
//   return (
//     <Card className="expenses">

//      { props.items.map(item=>
//      <ExpenseItem
//      title={item.title}
//      amount={item.amount}
//      date={item.date}
     
//    />)

//       }
      
//       {/* { <ExpenseItem
//         title={props.items[0].title}
//         amount={props.items[0].amount}
//         date={props.items[0].date}
//       />
//       <ExpenseItem
//         title={props.items[1].title}
//         amount={props.items[1].amount}
//         date={props.items[1].date}
//       />
//       <ExpenseItem
//         title={props.items[2].title}
//         amount={props.items[2].amount}
//         date={props.items[2].date}
//       />
//       <ExpenseItem
//         title={props.items[3].title}
//         amount={props.items[3].amount}
//         date={props.items[3].date}
//       /> } */}
//     </Card>
//   );
// }

export default Expenses;

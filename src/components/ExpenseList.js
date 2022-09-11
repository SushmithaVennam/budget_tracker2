import React,{ useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

function ExpenseList()  {

const {expenses}=useContext(AppContext);
console.log('expenses is',expenses);

  return (
    <ul className='list-group'>
      {expenses.map((expense) =>{
         return <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost}></ExpenseItem>
      })}
    </ul>
  )
}

export default ExpenseList

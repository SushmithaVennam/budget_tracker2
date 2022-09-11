import React,{ useContext } from 'react';
import { AppContext } from '../context/AppContext';

function ExpenseTotal() {

    const {expenses}=useContext(AppContext);

    function calculateExpense(){
        const total=expenses.reduce((curr,acc)=>{
                curr+=acc.cost;
                return curr;
        },0)
        console.log('total value is',total);
        return total;
    }

  return (
    <div className='alert alert-danger'>
        ExpenseTotal : Rs.{calculateExpense()}
        </div>
  )
}


export default ExpenseTotal
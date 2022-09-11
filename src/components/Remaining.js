import React,{ useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Remaining() {

    const{budget,expenses}=useContext(AppContext);

    function calculateExpense(){
        const total=expenses.reduce((curr,acc)=>{
                curr+=acc.cost;
                return curr;
        },0)
        return total;
    }

  return (
    <div className='alert alert-success'>
        Remaining : Rs.{budget-calculateExpense()}
    </div>
  )
}

export default Remaining
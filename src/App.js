import React, { createContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';
import { Appprovider } from './context/AppContext';



function App() {

  return (
    <Appprovider>
      <div className='container'>
      <h1 className='mt-3'>My Budget planner</h1>
       {/* 3 column and 1 row table */}
      <div className='row mt-3'>
         <div className='col-sm'>       {/*provides column */}
          <Budget />
        </div>
        <div className='col-sm'>
          <Remaining />
        </div>
        <div className='col-sm'>
          <ExpenseTotal />
        </div>
      </div> 
      <h3 className='mt-3'>Expenses</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <ExpenseList />
        </div>
      </div>
      <h3 className='mt-3'>Add Expense</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <AddExpense />
        </div>
      </div>
      </div>
    </Appprovider>
  );
}

export default App;

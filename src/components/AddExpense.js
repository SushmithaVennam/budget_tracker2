import React, { useState,useContext } from 'react';
import {v4 as uuidv4} from'uuid';
import { AppContext } from '../context/AppContext';

function AddExpense() {

  const [name, setName]=useState('');
  const [cost, setCost]=useState('');

  const {dispatch}=useContext(AppContext);

  function submit(event){
    event.preventDefault();
    console.log('my name and cost is',name,cost);
    const newData={
        id: uuidv4(),
        name:name,
        cost:parseInt(cost)
    }
    dispatch({type:'ADD_EXPENSE',payload:newData});
  }

  return (
    <form onSubmit={submit}>
        <div className='row mt-3'>
            <div className='col-sm'>
                <label>Name</label>
                <input type='text' placeholder='Enter name' className='form-control' onInput={(e)=>setName(e.target.value)}/>
            </div>
            <div className='col-sm'>  
            <label>Cost</label>
                <input type='text' placeholder='Enter cost' className='form-control' onInput={(e)=>setCost(e.target.value)}/>
            </div>
        </div>
        {/* mt - 3 is for margin and padding */}
        <div className='row mt-3'>
          <div className='col-sm'>
          <button className='btn btn-primary mt-3 width' type='submit'>Save</button>
          </div>
        </div>
        
    </form>
  )
}

export default AddExpense
import React,{useContext} from 'react';
import { AppContext } from '../context/AppContext';


function Budget() {

    const {budget}=useContext(AppContext);
   
  return (
    // gives greyish background to Budget
     <div className='alert alert-primary'>
        Budget : Rs. {budget}
        </div>             
  )
}


export default Budget
import React from 'react'
import {useForm } from 'react-hook-form'
import List from './List'
import { useAddTransactionMutation} from '../store/apiSlice';



const Form = () => {

 const  { register, handleSubmit, resetField} = useForm()

 const [addTransaction] = useAddTransactionMutation()

 const onSubmit = async (data) => {
    if(!data) return {};
    await addTransaction(data).unwrap()
    resetField('name')
    resetField('amount')
 }

  return (
    <div className='form max-w-sm mx-auto w-96'>
        {/* Head of form */}
      <h1 className='font-bold pb-4 text-xl'>Transaction</h1>

      {/* Body of form */}

      <form onSubmit = {handleSubmit(onSubmit)} id="form">
        <div className="grid gap-4">
           <div className="input-group">
            <input className='form-input' {...register('name')} type="text" placeholder='Salary, House Rend, SIP'/>
           </div> 
           <select {...register('type')} className="form-input">
                <option value="Investment" defaultValue> Investment</option>
                <option value="Expense" > Expense</option>
                <option value="Savings" > Savings</option>
            </select>
            <div className="input-group">
                <input className='form-input' {...register('amount')} type="text" placeholder='Amount'/>
            </div> 
            <div className="submit-btn">
                <button className="border py-2 text-white bg-indigo-500 w-full">Make Transaction</button>
            </div>
        </div>
      </form>
      <List/>
    </div>
  )
}

export default Form

import React from 'react'
import { useDeleteTransactionMutation, useGetLabelsQuery } from '../store/apiSlice';
import 'boxicons';


const List = () => {
  const {data, isFetching, isSuccess, isError} = useGetLabelsQuery()

  const [deleteTransaction] = useDeleteTransactionMutation()

  const handlerClick = (e) => {
    if(!e.target.dataset.id) return 0
    deleteTransaction({_id:e.target.dataset.id})
  }
  
  let transaction;

  if(isFetching){
    transaction = <p>Fetching is ongoing</p>
  }else if(isSuccess){
    transaction = <div className='flex flex-col gap-3'>
        {data.map((valeur, index) => <Transaction key={index} category={valeur} handler ={handlerClick}/>)}
    </div>
  } else if(isError){
    transaction = <p>Error to get data...</p>
  }

 
  return (
    <div className='flex flex-col py-8 gap-3'>
      <h1 className='py-4 font-bold text-xl'>History</h1>
      <div className=''>
       {transaction}
      </div>
    </div>
  )
}

export default List

function Transaction({category, handler}) {
  if(!category) return null;
  return(
    <div className='item flex justify-center bg-gray-50 py-3  rounded-r' style={{borderRight:`0.5rem solid ${category.color?? "#e5e5e5"}`}}>
      <button className="px-3" onClick={handler}><box-icon size="15px" data-id ={category._id?? ''} color={`${category.color?? "#e5e5e5"}`} name="trash"></box-icon> </button>
      <span className='block w-full ' >{category.name?? ''}</span>
    </div>
  )
}
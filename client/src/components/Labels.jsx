import React from 'react'
import Label from './Label'
import { useGetLabelsQuery } from '../store/apiSlice';
import { getLabels, getSum } from '../helper/helper';

const Labels = () => {

  const {data, isFetching, isSuccess, isError} = useGetLabelsQuery()

  let transaction;
  console.log(data)
  if(isFetching){
    transaction = <p>Fetching is ongoing</p>
  }else if(isSuccess){ 
    transaction =  getLabels(data, 'type').map((valeur, index) => <Label key={index} data={valeur}/>)
    
  } else if(isError){
    transaction = <p>Error to get data...</p>
  }
  return (
    <div>
      {transaction}
    </div>
  )
}

export default Labels

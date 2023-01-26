import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import {Chart, ArcElement} from 'chart.js'
import Labels from './Labels';
import { chartData, getTotal } from '../helper/helper';
import { useGetLabelsQuery } from '../store/apiSlice';

Chart.register(ArcElement)

const Graph = () => {
  const {data, isFetching, isSuccess, isError} = useGetLabelsQuery()

  let graphData;
  
  if(isFetching){

    graphData= <div>Fetching</div>

  }else if(isSuccess){ 

    graphData= <Doughnut {...chartData(data)}></Doughnut>
    // graphData=  getLabels(data, 'type').map((valeur, index) => <Label key={index} data={valeur}/>)
    
  } else if(isError){
    graphData = <p>Error to get data...</p>
  }

  return (
    <div className='flex justify-content max-w-xs mx-auto'>
      <div className="item">
        <div className="chart relative">
            {graphData}
            <h3 className="mb-4 font-bold title">
                Total
                <span className='block text-3xl text-emerald-400'>${getTotal(data)?? 0}</span>
            </h3>
        </div>

        <div className="flex flex-col py-10 gap-4">
            {/* Lables*/}
            <Labels/>
        </div>
      </div>
    </div>
  )
}

export default Graph

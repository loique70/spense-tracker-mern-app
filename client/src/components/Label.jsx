import React from 'react'

const Label = ({data}) => {
  if(!data) null
  return (
    <div className='flex justify-between items-center'>
      <div className="flex gap-2 py-2">
        <div className="w-2 h-2 py-3 rounded" style={{background:data.color??'#f9c74e'}}></div>
        <h3 className='text-md'>{data.type?? " "}</h3>
      </div>
      <h3 className='font-bold'>{Math.round(data.percent)?? 0}%</h3>
    </div>
  )
}

export default Label

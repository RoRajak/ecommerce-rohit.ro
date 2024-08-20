import { Rating } from '@mui/material'

import { greenTickIcon } from '../../constants'
import React from 'react';
interface Rating{
    name:string;
    para:string;
    val?:number;
    
}

function Survey({name,para}:Rating):React.ReactElement {
  return (
    <div className='flex flex-col gap-y-2 p-4 w-[400px]  h-[240px] flex-wrap border border-gray-400 rounded-xl '>
        <Rating value={5} readOnly />
        <h6 className='font-semibold flex'>{name}{ }<img src={greenTickIcon}/></h6>
        <p className='text-gray-500'>{para}</p>
    </div>
  )
}

export default Survey
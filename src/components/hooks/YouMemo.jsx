import React, { useMemo, useState } from 'react'
import { Button } from '../ui/button';


// totally depends upon Dependencies when the state change only that time dependencies change. Rather than components doesn't re-rendering. 

let Number = new Array(350).fill(0).map((_,i)=> {
    return {
        index:i,
        isSpecialNumber:i===300
    }
})

const YouMemo = () => {
// const [count, setCount] = useState(0);
// const [numbers, setNumbers] = useState(Number);

// const SpecialNumber = useMemo(()=>numbers.find(item=>item.isSpecialNumber === true,[numbers])); 

  return (
    <div className='h-screen w-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-4'>
        <p className='text-2xl font-bold text-white'>Here is the special Number:<span className='text-indigo-500'>{SpecialNumber.index}</span>
        <Button variant={"outline"} onClick={onIncrement} className="text-black">{"Count value is ${count}"}</Button>
        </p>
    </div>
  )
}

export default YouMemo
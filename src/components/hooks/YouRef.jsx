import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../ui/button'

const YouRef = () => {
const [count, setCount] = useState(0);

let number = useRef(0);

useEffect(() => {
  number.current = number.current + 1;
  console.log(`Here the number is ${number.current}`);
})

const ChangeCount = () => {
  const newCount = count + 1;
  setCount(newCount);
}

  return (
    <div className='w-full h-screen flex items-center justify-center flex-col bg-slate-300'>
      <Button variant={"outline"} size={"default"} onClick={ChangeCount}>
        Count vale is {count}
      </Button>
    </div>
  )
}

export default YouRef
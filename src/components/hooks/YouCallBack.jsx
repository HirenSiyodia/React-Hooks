import React, { useCallback, useState } from "react";
import { Button } from "../ui/button";
import Navbar from "./Navbar";
// Function will not re-renders if we use callback hook. with and without Callbakc both are there.

const YouCallBack = () => {
  const [count, setCount] = useState(0);

  const onChangeNavbarLink = useCallback(() => {
    return "Hello Hiren";
  }, [])

//   const onChangeNavbarLink = () => {
//     return "Hello Hiren";
//   }

  const onIncrement = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="h-screen w-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-4">
        <Navbar navlink={"Home"} onChangeNavbarLink={onChangeNavbarLink}></Navbar>
        <Button
          variant={"outline"}
          onClick={onIncrement}
          className="text-black"
        >
          Count is :- 
          {count}
        </Button>
      </div>
    </>
  );
};

export default YouCallBack;

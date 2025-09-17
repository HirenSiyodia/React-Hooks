import React, { useState } from "react";
import { Button } from "../ui/button";
import Navbar from "./Navbar";

const MemoMethod = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="h-screen w-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-4">
        <Navbar navlink={"Home"}></Navbar>
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

export default MemoMethod;

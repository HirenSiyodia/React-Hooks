import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Three = () => {
  const { userName } = useContext(GlobalContext);

  return (
    <div>
      <h1 className="flex items-center justify-center h-sc text-3xl text-blue-600">{userName}</h1>
    </div>
  );
};

export default Three;

import React, { useState } from 'react'
import { Button } from '../ui/button';

const YouState = () => {
  const [title, setTitle] = useState (document.title);

  const onChangeTitle = () => {
    const newTitle = prompt('Enter the new title');

    if (newTitle) {
      document.title = newTitle;
      setTitle(newTitle);
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center space-y-2">
      <h1 className="text-4xl text-blue-400 font-bold">Change website title</h1>
      <Button variant="default" size="default" onClick={onChangeTitle}>
        Change title
      </Button>
      <p className="text-xl mt-2">Current title: {title}</p>
    </div>
  );
};

export default YouState;

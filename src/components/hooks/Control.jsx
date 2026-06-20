import React, { useState } from 'react'

const Control = () => {
    const [firstname, setfName] = useState('ishita')
    const [lastname, setlName] = useState('siyodia')

    function handleChange(e){
        if (e.target.name == 'firstName') {
            setfName(e.target.value)
        } else if (e.target.name == 'lastName') {
            setlName(e.target.value)
        } else {
            alert('error')
        }
        e.preventDefault();
    }

  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name='firstName' value={firstname} onChange={handleChange}/>
          <input type="text" name='lastName' value={lastname} onChange={handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Control

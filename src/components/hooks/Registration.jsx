import React, { useEffect, useState } from 'react'

const Registration = () => {
    const data = {name:'', email:'', password:''}
    const[allData, setAlldata] = useState(data)
    const[flag, setFlag] = useState(false)

    useEffect(()=>{
        console.log('Registred'); 
    },[flag])

    function handleChange(event){
        setAlldata({...allData, [event.target.name]: event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault()
        if (!allData.name || !allData.email || !allData.password) {
            alert('all fields are mandtory');
        } else {
            setFlag(true)
        }
    }
    

  return (
    <>
    <pre>{(flag)?<h2>Hello {allData.name}, Welcome Here. </h2>:""}</pre>
    <form className='container' onSubmit={handleSubmit}>
        <div>
            <input type='text' name='name' placeholder='enter your name' value={allData.name} onChange={handleChange}></input>
            <input type='text' name='email' placeholder='enter your email' value={allData.email} onChange={handleChange}></input>
            <input type='text' name='password' placeholder='enter your password' value={allData.password} onChange={handleChange}></input>
        </div>
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Registration

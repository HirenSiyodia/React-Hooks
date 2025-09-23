import React from 'react'
import YouState from './components/hooks/YouState'
import YouEffect from './components/hooks/YouEffect'
import YouRef from './components/hooks/YouRef'
import YouMemo from './components/hooks/YouMemo'
import MemoMethod from './components/hooks/MemoMethod'
import YouCallBack from './components/hooks/YouCallBack'
import useFetch from './components/custom_hooks/useFetch'
import Three from './context/Three'

const App = () => {
  // const {data, error, loading} = useFetch({url:"https://api.github.com/users/HirenSiyodia"})

  // console.log({data, error, loading});
  

  return (
    // Hooks jus import which ever you want to see.
    <div className="flex flex-col min-h-[100vh]">

    {/* UseState below on */}
    {/* <YouState/> */}

    {/* UseEffect below on */}
    {/* <YouEffect/> */}

    {/* UseRef Hooks */}
    {/* <YouRef/> */}

    {/* UseMemo Effect
    <YouMemo/> */}

    {/* Memo Method */}
    {/* <MemoMethod/> */}

    {/* Use Callback */}
    {/* <YouCallBack/> */}

    {/* Global Context */}
    <Three/>
    </div>
  )
}

export default App
import React from 'react'
import YouState from './components/hooks/YouState'
import YouEffect from './components/hooks/YouEffect'
import YouRef from './components/hooks/YouRef'
import YouMemo from './components/hooks/YouMemo'
import MemoMethod from './components/hooks/MemoMethod'
import YouCallBack from './components/hooks/YouCallBack'

const App = () => {
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
    <YouCallBack/>
    </div>
  )
}

export default App
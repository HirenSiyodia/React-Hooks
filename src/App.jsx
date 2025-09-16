import React from 'react'
import YouState from './components/hooks/YouState'
import YouEffect from './components/hooks/YouEffect'
import YouRef from './components/hooks/YouRef'

const App = () => {
  return (
    // Hooks jus import which ever you want to see.
    <div className="flex flex-col min-h-[100vh]">

    {/* UseState below on */}
    {/* <YouState/> */}

    {/* UseEffect below on */}
    {/* <YouEffect/> */}

    {/* UseRef Hooks */}
    <YouRef/>
    </div>
  )
}

export default App
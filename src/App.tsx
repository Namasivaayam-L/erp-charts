import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { GrpBar } from './components/charts/groupedBar'
import { MultiAxis } from './components/charts/multiAxisLine'
import { Hybrid } from './components/charts/hybrid'

function App() {

  return (
    <div style={{height:'90vh',width:'90vw'}}>
      {/* <GrpBar /> */}
      <Hybrid/>
    </div>
  )
}

export default App

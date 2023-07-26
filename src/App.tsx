import { useState } from 'react'
import { GrpBar } from './components/charts/groupedBar'
import { Hybrid } from './components/charts/hybrid'

function App() {

  return (
    <div style={{ height: '90vh', width: '90vw' }}>
      <GrpBar /> <br /><br /><br />
      <Hybrid/>
    </div>
  )
}

export default App

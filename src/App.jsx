import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(1) 

  return (
    <div onClick={()=>setCount(pv => pv + 1)}>
      {count}
    </div>
  )
}

export default App

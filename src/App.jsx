import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


const fruits = ["apple","mango","banana","orange","grapes"]
  return (
    <>
      <h1>Hello FabiHa💗</h1>
      <h1>helLo CodeR!👊</h1>
      <h3>hehhe</h3>
      {fruits.map((fruit) =>{
        return <h1>{fruit}</h1>
      })
      }
    </>
   
  )
}

export default App

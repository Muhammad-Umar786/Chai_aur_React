import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  const AddValue=()=>{
    if(counter<20){
    setCounter(counter+1)
      console.log(counter+1)
  }
    else{
      console.log("counter can not be greater than 20")
    }
  }
  const RemoveValue=()=>{
    if(counter>0){
    setCounter(counter-1)
        console.log(counter-1)

  }
    else{
      console.log("Value can not be less than 0")
    }
      
  }
  return (
    <>
      <h1>Chai Aur react</h1>
      <h2>Counter Value : { counter}</h2>

      <button onClick={AddValue}> Add Value{counter}</button>
      <br />
      <button onClick={RemoveValue}>Remove Value{ counter}</button>
      <footer>Footer: { counter}</footer>
    </>
  )
}

export default App

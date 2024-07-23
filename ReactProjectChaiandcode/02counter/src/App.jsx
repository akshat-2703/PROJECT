import { useState } from 'react'
import './App.css'

/* function App() {
 
 const [counter,setCounter]  = useState(0) 

//  let counter = 15 
  
  function addValue(){
 //  counter = counter + 1 ;
   setCounter(counter + 1) ;
  }
  function decValue(){
    setCounter(counter-1) ;
  }
  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter valur :{counter} </h2>
     <button onClick={addValue}> + </button>
     <br />
     <button onClick={decValue}> - </button>
    </>
  )
}

export default App
*/

function App(){
  
  let [count,setCount] = useState(0) ;

  function addValue(){
       if(count < 20) 
      setCount(count+1)
  }
  function decValue(){
    if(count > 0)
    setCount(count -1) ;
  }

  return (
    <>
    <p>Count : {count} </p>
    <button onClick={addValue} >+</button>
     <button onClick={decValue}>-</button>
    </>
  )
}

export default App ;
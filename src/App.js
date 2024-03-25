import React, { useState } from "react";
import './App.css';

function App() {
  const[input,setInput] = useState("");
  const[output,setOutput]=useState("");

  const addToInput =(value) =>{
            setInput((prevInput)=>prevInput + value)
  };

  const clearInput =()=>{
     setInput("");
     setOutput("");
  }

  const calculate = ()=>{
    try{
      if(input.includes("/0")){
        setOutput("Infinity");
        return;
      }

      if(input.trim === ""){
        setOutput("Error");
        return;
      }

      const result = eval(input);
      if(isNaN(result)){
        setOutput("NaN");
      }
      else{
        setOutput(result);
      }
    }
    
    catch(error){
       setOutput("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly/>
      <div className="result">{output}</div>
       <div className="buttons">
        <button onClick={()=>addToInput("7")}>7</button>
        <button onClick={() => addToInput("8")}>8</button>
        <button onClick={() => addToInput("9")}>9</button>
        <button onClick={() => addToInput("+")}>+</button>

        <button onClick={() => addToInput("4")}>4</button>
        <button onClick={() => addToInput("5")}>5</button>
        <button onClick={() => addToInput("6")}>6</button>
        <button onClick={() => addToInput("-")}>-</button>

        
        <button onClick={() => addToInput("1")}>1</button>
        <button onClick={() => addToInput("2")}>2</button>
        <button onClick={() => addToInput("3")}>3</button>
        <button onClick={() => addToInput("*")}>*</button>

        <button onClick={clearInput}>C</button>
        <button onClick={() => addToInput("0")}>0</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => addToInput("/")}>/</button>
       </div>
    </div>
  );
}

export default App;

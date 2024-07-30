import React, { useState } from 'react';

function Calculadora() {
    const {num1, setNum1} = useState(0);
    const {num2, setNum2} = useState(0);
    const {result, setresult} = useState("");


    return <>
    <h1>Calculadora React</h1>
    <input
     value={num1}
     onChange={(event) => setNum1(parsefloat(event.target.value))}
     ></input>
    <input
     type="number"
     value={num2}
     onChange={(event) => setNum2(parsefloat(event.target.value))}  
     ></input>

     <div>
    <button onClick={() => setresult(num1 + num2)}>+</button>
    <button onClick={() => setresult(num1 - num2)}>-</button>
    <button onClick={() => setresult(num1 * num2)}>*</button>
    <button onClick={() => setresult(num1 / num2)}>/</button>
    </div>

    <p>{result}</p>
    </>;

}

export default Calculadora;
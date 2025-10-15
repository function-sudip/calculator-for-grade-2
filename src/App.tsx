import { useState } from "react";




function App() {
  const [display, setDisplay] = useState(0);
  const [display2, setDisplay2] = useState(0);
  const [operator, setOperator] = useState("");

  function clickEvent(nm: number) {
    !operator?
    setDisplay(display * 10 + nm ):
    setDisplay2(display2 * 10 + nm)
  }

  
  function resultHandler() {
    setOperator("");
    if (operator === "+") {
      setDisplay(display + display2);
    } else if (operator === "-") {
      setDisplay(display - display2);
    } else if (operator === "x") {
      setDisplay(display * display2);
    } else if (operator === "/") {
      setDisplay(display / display2);
    }
    setDisplay2(0);
    setOperator("");
  }

  function handleClear() {
    setDisplay(0);
    setDisplay2(0);
    setOperator("");
  }
  return (
    <div className="calculator">
      <div className="display">
        <div className="nums">
          {display} {operator} {display2 === 0 ? "" : display2}
        </div>
      </div>
      <div className="keys">
        <button  onClick={ () => setOperator("+")}>+</button>
        <button  onClick={ () => setOperator("-")}>-</button>
        <button  onClick={ () => setOperator("x") }>x</button>
        <button  onClick={ () => setOperator("/") }>/</button>
        <button  onClick={ () => clickEvent (1) }>1</button>
        <button  onClick={ () => clickEvent (2)  }>2</button>
        <button  onClick={ () => clickEvent (3)  }>3</button>
        
        <button  onClick={ handleClear }>C</button>
        
        
        
        <button  onClick={ () => clickEvent (4)  }>4</button>
        <button  onClick={ () => clickEvent (5)  }>5</button>
        <button  onClick={ () => clickEvent (6)  }>6</button>
        <p></p>
        <button  onClick={ () => clickEvent (7)  }>7</button>
        <button  onClick={ () => clickEvent (8)  }>8</button>
        <button  onClick={ () => clickEvent (9)  }>9</button>
        <p></p>
        <p></p>
        <button  onClick={ () => clickEvent (0) }>0</button>
        <p></p>
        <button  onClick={ resultHandler  }>=</button>
        
        

      </div>

    </div>
  );
}

export default App;
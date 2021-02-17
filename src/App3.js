import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';

function App() {

  const [contador, setContador] = useState(10)
  const buttonRef = useRef(null)

  useEffect(() => {

    let timer = setInterval(()=>{
      //setContador((value) => value -1)
    }, 1000)

    console.log('chamou o useEffect')
    return () => {
      clearInterval(timer)
      // cleanup
      console.log('cleanup')
    }
  }, []);

  //memoization

  // useCallback para funções
  const incrementa = useCallback(() =>{
    setContador((value) => value + 1)
  }, [])

  //useMemo para valores pesados
  const multiplicado = useMemo(() => contador * 10, [contador])

  const getRef = () => {
    //console.log(buttonRef.current.innerText)
    buttonRef.current.innerText = "opa";

  }

  return (
    <div className="App">
      <button onClick={getRef}>Get ref</button>
      <button onClick={incrementa} ref={buttonRef}>Contador: {contador} = {multiplicado}</button>
    </div>
  );
}

export default App;

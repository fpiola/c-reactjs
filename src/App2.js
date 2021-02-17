import React, { useState, useEffect } from 'react';
import './App.css';

/*

:target
::after
~

const a = [1,2,3,4]
const num1 = a[0]
const num2 = a[1]
const num3 = a[2]
const num4 = a[3]
const [num1, num2, num3, num4] = a

const a = {
	loading: true,
	data: 10
}

const loading = a.loading
const {loading: aa} = a

*/

/*
const useContador = initial => {

  const [contador, setContador] = useState(initial)

  const incrementa = () => {
    setContador(contador+1)
  }

  return [contador, incrementa]
}

const Display = props => {
    
    //const [i,setI] = useState(0)
    //const incrementa = () =>{
    //  setI(i+1)
    //}

   const [i, incrementa] = useContador(0)
   return <h1 onClick={incrementa}>{props.title} = {i}</h1>
}

function App() {
  const [contador, incrementa] = useContador(10)

  useEffect(()=>{
    console.log('fui chamado')
  }, [contador])

  return (
    <div className="App">
      <h1 onClick={incrementa}>App {contador}</h1>
      <Display title="Display" />
    </div>
  );
}

*/


//useEffect
//useEffect

const useHttpGet = url => {

  const [data, setData] = useState('') //Carregar os dados
  const [isLoading, setIsLoading] = useState(false) //Carregar o load

  const [forceUpdate, setForceUpdate] = useState(0) //Recarregar
  const refresh = () => {
    setForceUpdate(forceUpdate + 1)
  }

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setIsLoading(true)
      const res = await fetch(url)
      const json = await res.json()

      if (mounted) {
        setData(json)
        setIsLoading(false)
      }
    }

    load()

    return () => {
      mounted = false
    }

  }, [forceUpdate, url]);

  return [data, isLoading, refresh]

}

function App() {

  /*
  const [ip, setIp] = useState('') //Carregar o ip
  const [isLoading, setIsLoading] = useState(false) //Carregar o load

  const [forceUpdate, setForceUpdate] = useState(0) //Recarregar
  const refresh = () => {
    setForceUpdate(forceUpdate + 1)
  }

  useEffect(() => {

    const load = async () => {
      setIsLoading(true)
      const res = await fetch('https://httpbin.org/delay/1')
      const json = await res.json()
      setIp(json.origin)
      setIsLoading(false)
    }

    load()

  }, [forceUpdate])
  */

  const [data, isLoading, refresh] = useHttpGet('https://httpbin.org/delay/1')
  const ip = data.origin

  if (isLoading) {
    return <h1>Is loading...</h1>
  }

  return (
    <div className="App">
      <h1 >Meu IP: {ip}</h1>
      <button onClick={refresh}>Refresh</button>
    </div>
  );

}

export default App;
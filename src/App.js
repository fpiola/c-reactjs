import React from 'react'


//jsx
const element = <h1>Hello, world!</h1>;

function App(){
    return (
        <div>
           <h1>{element}</h1>
        </div>
    )
}

export default App;

/*
function App(){
    const [count, setCount] = useState(0);
    return (
        <div>
           <h1>Teste</h1>
           <p>Count: {count}</p>
           <button onClick={ () => setCount(count + 1) }>Contar</button>
        </div>
    )
}

export default App;

*/
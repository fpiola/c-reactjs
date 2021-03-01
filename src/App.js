import React, { useState, useEffect } from 'react';


function App() {
    const [count, setCount] = useState(0);
    // Similar a componentDidMount e componentDidUpdate:  useEffect(() => {    // Atualiza o título do documento utilizando a API do navegador    document.title = `You clicked ${count} times`;  });
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
      </button>
        </div>
    );
}

export default App;

/*

--------------------------------------------

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}

export default App;


--------------------------------------------
//Incorporando Expressões em JSX (2)
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: 'Francis',
    lastName: 'Piola'
  };

  const element = (
    <h1>
      Hello, {formatName(user)}!  </h1>
  );

function App(){
    return (
        <div>
           <h1>{element}</h1>
        </div>
    )
}

export default App;
--------------------------------------------
//Incorporando Expressões em JSX
const name = 'Francis Piola';
const element = <h1>Hello, {name}</h1>;

function App(){
    return (
        <div>
           <h1>{element}</h1>
        </div>
    )
}

export default App;
--------------------------------------------
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
--------------------------------------------
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
--------------------------------------------

*/
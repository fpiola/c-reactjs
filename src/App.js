import React from 'react'


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

function App() {
    return (
        <div>
            <h1>{element}</h1>
        </div>
    )
}

export default App;

/*


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
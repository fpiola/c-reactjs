import React, { useContext, createContext, useState, useEffect } from 'react'
import App from '../../containers/App'

const ValueContext = createContext()

//hook personalizado
const useUser = () => React.useContext(ValueContext)

const Other = () => {
    const { user, setUser } = useUser()
    return (
        <div>
            <Login />
            <input onChange={ (e) => setUser({name: e.target.value})} />
            <h1>Other{ user.name }</h1>
            <button onClick={() => setUser({ name: "Francis Piola"})}>Enviar</button>
        </div>
    )
}

const Login = ()=>{
    const { setUser, user } = useUser()
    
    const handleLogin = ()=>{
        
        localStorage.setItem('user', JSON.stringify(user))
        setUser(user)
    }

    return(
        <button onClick={handleLogin}>Login</button>
    )
}

const Home = () => {
    const [user, setUser] = useState({
        name: "nome"
    })

    useEffect(() => {
        const userStorage = localStorage.getItem("user")
        if(userStorage){
            setUser(JSON.parse(userStorage))
        }else{
            setUser({name: ""})
        }
    }, []);

    return (
        <ValueContext.Provider value={{ user, setUser }} >
            <App>
                <Other />
            </App>
        </ValueContext.Provider>
    )
}

export default Home
import React, { createContext, useContext } from 'react';

const ValueContext = createContext()

const Other = () => {
    const value = useContext(ValueContext)
    return (
        <div>
            Other {value}
        </div>
    )
}

const Content = () => {
    return (
        <div>
            Content
            <Other />
        </div>
    )
}

function App() {
    const value = "DevPleno LiveClass"
    return (
        <ValueContext.Provider value={value}>
        <div>
            App
            <Content />
        </div>
        </ValueContext.Provider>
    );
}

export default App;
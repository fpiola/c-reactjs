import React from 'react'
import Container from '../components/container/Container'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const App = ({ children }) => (
    <>
        <Header />
        <Container>
            {children}
        </Container>
        <Footer />
    </>
)

export default App
import React from 'react'
import Header from '../components/header'
import Cards from '../components/Card'
const Home = () => {
    return (
        <>
        <div className='bg-dark' >
            <Header />
            <h1>Posted Data</h1>
            <Cards /> 
        </div>
        </> 
    )
}
export default Home

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductListing from './Pages/ProductListing';
import Header from './Components/Header';
import Footer from './Components/Footer'
import Basket from './Pages/Basket'
import Details from './Pages/Detail'

function App() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<ProductListing/>}/>
                <Route path='/basket' element={<Basket/>}/>
                <Route path='/:id' element={<Details/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
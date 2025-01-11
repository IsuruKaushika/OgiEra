import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import Product from './pages/Product'


const App = () => {
  return (
    < div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<h1>About</h1>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/login' element={<h1>Login</h1>} />
        <Route path='/place-order' element={<h1>PlaceOrderr</h1>} />
        <Route path='/cart' element={<h1>Cart</h1>} />
        <Route path='/orders' element={<h1>Orders</h1>} />
                
      </Routes>
       <Footer/>
    
    
    
   </div>
  )
}

export default App
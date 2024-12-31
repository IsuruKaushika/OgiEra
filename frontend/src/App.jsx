import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Contact from './pages/Contact'

const App = () => {
  return (
    < div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<h1>About</h1>} />
        <Route path='/product/:productid' element={<h1>Product</h1>} />
        <Route path='/login' element={<h1>Login</h1>} />
        <Route path='/place-order' element={<h1>PlaceOrderr</h1>} />
        <Route path='/cart' element={<h1>Cart</h1>} />
        <Route path='/orders' element={<h1>Orders</h1>} />
                  

      </Routes>
    
    
    
   </div>
  )
}

export default App
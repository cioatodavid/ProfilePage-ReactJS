import About from './components/about.js'
import Footer from './components/footer.js'
import Info from './components/info.js'
import Interests from './components/interests.js'
import './app.css'
import React from 'react'

function App(){
   return(
      <div className='container'>
         <div className= 'profile-card'>
         <Info />
         <About />
         <Interests />
         <Footer />
         </div>

      </div>
   )
}

export default App
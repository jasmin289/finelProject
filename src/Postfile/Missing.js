import React from 'react'
import {Link} from 'react-router-dom'

const Missing = () => {
  return (
    <main className='Missing'> 
      
      
       <h1>Page not found</h1>
       <h1>Well that disappointing</h1>
       <p>
        <Link to='/'> visit our home page</Link>
       </p>
       
       </main>
  
  )
}

export default Missing
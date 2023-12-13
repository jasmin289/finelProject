import React from 'react'

const Footer1=({length}) =>{
// const today = new Date();
 
    return (
    <footer>
      <p> {length} List {length===1?'item':'items'}</p>
        
    </footer>
  )
}
export default Footer1


// <p>copy right @ {today.getFullYear()}</p>
 
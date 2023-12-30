import React from 'react'

function Header1({title}) {


  return (
    <header>
        <h1 >{title}</h1>
    </header>
  )
}
Header1.defaultProps = {
 title: "defult hader" 
}

export default Header1
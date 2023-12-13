import React from 'react'

function Header1({title}) {


  return (
    <header1>
        <h1 >{title}</h1>
    </header1>
  )
}
Header1.defaultProps = {
 title: "defult hader" 
}

export default Header1
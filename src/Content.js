import React from 'react'
import ListItem  from './ListItem';



function Content({items, handleCheck, handleDeleted}) {
  

  return (
     <>
     {items.length?(
  
  
  <ListItem
     items={items}
     handleCheck={handleCheck}
     handleDeleted={handleDeleted}/>     
     ):( <div style={{margin:'5rem 7rem'}}>the list is empty!</div>)}
    </> )}
  
export default Content;

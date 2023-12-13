import React from 'react'
import LineItem from './LineItem'


const ListItem = ({items, handleCheck, handleDeleted}) => {
  return (
    <ul>
    {items.map((item )=>(

        <LineItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDeleted={handleDeleted}
        />
        ))}
        </ul>
        )
        }

export default ListItem
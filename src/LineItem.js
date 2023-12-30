import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa';
const LineItem = ({item,handleCheck,handleDeleted}) => {
  return (
    <li className='item'>
      <input
       type="checkbox" 
       ischecked ={item.ischecked}
       onChange={()=>handleCheck(item.id)}
      />
      <label 
          style={(item.ischecked)?{textDecoration:'line-through'}:null}
          onDoubleClick={()=>handleCheck(item.id)}>{item.item}
      </label>
    
      <FaRegTrashAlt
       onClick={()=>handleDeleted(item.id)} 
       role='button'
        tabIndex="0"
        aria-label={`Deleted ${item.item}`}
        />

    </li>)}


export default LineItem
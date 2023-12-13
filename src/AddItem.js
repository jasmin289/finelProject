import React from 'react'
import { FaPlus } from 'react-icons/fa'
import {useRef} from 'react'

const AddItem = ({newItem ,setNewItem,hadndleSubmit}) => {
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={hadndleSubmit}>

        <label htmlFor='addItem'>add item</label>
        <input 
        autoFocus
        ref={inputRef}
        id='addItem'
        type='text'
        placeholder='Add Item'
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        
        
        />
        <button
         type='submit'
         aria-label = 'Add Item'
        onClick={()=>inputRef.current.focus()}
        >
            <FaPlus/>
        </button>

    </form>
  )
}

export default AddItem
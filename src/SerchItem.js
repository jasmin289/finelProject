import React from 'react'

const SerchItem = () => {
  return (
    <form className='seachForm' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='search'>Search</label>
    <input
    id='search'
    type='text'
    role='searchbox'
    placeholder='Search Items'
    value={search}
    onChange={(e)=>setSerch(e.target.value)}
    />




    </form>
  )
}

export default SerchItem
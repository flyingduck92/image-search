import { useState } from 'react'
import './searchBar.css'

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault()
    onSubmit(term)
  }

  const handleChange = (event) => {
    setTerm(event.target.value)
  }

  return (
    <div className='image-search'>
      <form onSubmit={handleFormSubmit} className='form'>
        <label htmlFor='search'>Search Image</label>
        <input
          onChange={handleChange}
          value={term}
          id='search'
          type='search'
          name='search'
          className='search-input'
          placeholder='Enter keyword here...'
        />
      </form>
    </div>
  )
}

export default SearchBar

import React from 'react'
import './SearchBox.css'
import { MdSearch } from 'react-icons/md';

function SearchBox({ searchNotes }) {
  return (
		<div className='search'>
			<MdSearch className='search-icons' size='1.5em' />
			<input onChange={(event) =>
				    searchNotes(event.target.value)
			    }
			    type='text'
				placeholder='type to search...'
			/>
		</div>
        
  )
}

export default SearchBox
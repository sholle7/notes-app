import React from 'react'
import './Note.css'
import { MdDeleteForever } from 'react-icons/md';

function Note({id, text, date, deleteNote }) {
  return (
    <div className='note'>
      
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={ () => deleteNote(id) }
					className='delete-icon'
					size='1.5em'
				/>
			</div>
		
    </div>
  )
}

export default Note
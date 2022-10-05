import React from 'react'
import MainNote from './MainNote'
import Note from './Note';
import './AllNotes.css'

function AllNotes({notes, addNote, deleteNote}) {
  return (
		<div className='notes-list'>
			{
        notes.map((note) => (
          <Note
            id={note.id}
            text={note.text}
            date={note.date}
            deleteNote={deleteNote}
            key = {note.id}
          />
        ))
      }
			<MainNote addNote={addNote} />
		</div>
	);
}

export default AllNotes
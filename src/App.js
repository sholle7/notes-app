import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import AllNotes from './components/AllNotes';
import { nanoid } from 'nanoid';

function App() {
  const [currentLightMode, setcurrentLightMode] = useState("light");
  const [allNotes, setAllNotes] = useState([])
  const [searchText, setSearchText] = useState('');
  
  
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes) {
      setAllNotes(prevNotes => ([...allNotes, ...savedNotes]));
    }
  }, []);
  
  useEffect(() => {
    if(allNotes.length) localStorage.setItem('notes', JSON.stringify(allNotes));
  }, [allNotes]);


  const toggleLightMode = () => {
    setcurrentLightMode(currentLightMode==="light"?"dark":"light");
  }

  const searchNotes = (value) => {
    setSearchText(value);
  }

  const deleteNote = (id) => {
      const newNotes = allNotes.filter((note) => note.id !== id);
		  setAllNotes(newNotes);
  }

  const addNote = (text) => {

    const date = new Date();

    const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};

    const notes = [...allNotes, newNote];
    setAllNotes(notes);
  }
  

  return (
    <div className={currentLightMode==='light'?"light-container":"dark-container"}>
      <div>
        <Header toggleLightMode={toggleLightMode}/>
        <SearchBox searchNotes={searchNotes}/>
        <AllNotes
					notes = {allNotes.filter((note) =>
						  	note.text.toLowerCase().includes(searchText)
					)}
					addNote={addNote}
					deleteNote={deleteNote}
				/>
      </div>
    </div>
  );
}

export default App;

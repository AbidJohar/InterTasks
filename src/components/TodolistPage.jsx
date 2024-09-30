import React, { useState } from 'react';

const TodolistPage = () => {
  const [notes, setNotes] = useState([]);
  const [noteDetails, setNoteDetails] = useState({
    title: "",
    Description: ""
  });
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [filterText, setFilterText] = useState('');
  const username = localStorage.getItem('currentUser');

  // Add or Update Note
  const handleAddUpdateNote = () => {
    if (noteDetails.title.trim() === '' && noteDetails.Description.trim() === '') return;

    if (editMode) {
      const updatedNotes = notes.map((note, index) =>
        index === editIndex ? noteDetails : note
      );
      setNotes(updatedNotes);
      setEditMode(false);
      setEditIndex(null);
    } else {
      setNotes([...notes, noteDetails]);
    }
    setNoteDetails({
      title: "",
      Description: ""
    });
  };

  // Edit Note
  const handleEditNote = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setNoteDetails(notes[index]);
  };

  // Delete Note
  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  // Filter Notes
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filterText.toLowerCase())
  );

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNoteDetails(prevnotes => ({ ...prevnotes, [name]: value }));
  }

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="w-full py-2 bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-between px-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
            alt="Logo"
            className="h-12 w-12 object-cover mr-2"
          />
          <span className="text-white font-bold text-lg">Create notes</span>
        </div>

        {/* Account Section */}
        <div className="flex items-center space-x-2">
          <span className="text-white font-semibold">{username}</span>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="Profile"
            className="h-12 w-12 rounded-full object-cover border-2 border-white"
          />
        </div>
      </div>

      {/* Note Taking Section */}
      <div className="flex flex-row pt-10 px-10 w-full gap-4">
        {/* Add Note Section (70% width) */}
        <div className="flex flex-col w-[70%] mb-4">
          <input
            type="text"
            name='title'
            value={noteDetails.title}
            onChange={onChangeHandler}
            placeholder="Title"
            className="w-full p-3 mb-2 rounded-lg border-[1px] border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-pink-500"
          />
          <textarea
            name="Description"
            value={noteDetails.Description}
            onChange={onChangeHandler}
            placeholder="Write a note description..."
            className="w-72 sm:w-full p-3 rounded-lg border-[1px] border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-pink-500"
            rows={4}
          />
          <button
            onClick={handleAddUpdateNote}
            className="w-72 sm:w-full mt-2 py-2 px-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-md transition duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-600"
          >
            {editMode ? 'Update Note' : 'Add Note'}
          </button>
        </div>

        
        {/* Filter Notes Section (30% width) */}
        <div className="w-3/10">
          <input
            type="text"
            placeholder="Filter notes By Title"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="p-2 mb-4 w-full rounded-lg border-[1px] border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-pink-500"
          />
        </div>
      </div>
      <hr className='mb-4 h-[2px] opacity-15 bg-red-500' />

      {/* Notes List */}
      <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note, index) => (
            <div
              key={index}
              className="bg-white p-4 border-[1px] border-black/20 rounded-lg shadow-md flex flex-col justify-between h-56 overflow-hidden"
            >
              <div className="flex-grow overflow-auto mb-1">
                <p className="text-gray-800">
                  <span className="text-lg font-bold">Title:</span> {note.title}
                </p>
                <p className="text-gray-800">
                  <span className="text-lg font-bold">Description:</span> {note.Description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-1">
                <button
                  onClick={() => handleEditNote(index)}
                  className="border border-blue-500 text-blue-500 hover:bg-blue-200 rounded-lg py-1 px-2 transition duration-300"
                >
                  Edit
                </button>

                <div className='diamond-shape bg-slate-300 flex items-center justify-center'>
                  {index === 0 ? "1" : index + 1}
                </div>

                <button
                  onClick={() => handleDeleteNote(index)}
                  className="border border-red-500 text-red-500 hover:bg-red-200 rounded-lg py-1 px-2 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 pl-7">No notes found.</p>
        )}
      </div>
    </div>
  );
};

export default TodolistPage;

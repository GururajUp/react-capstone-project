import React, { useState } from 'react'


function Notes() {
    const [notes, setNotes] = useState(localStorage.getItem("notes"))
  return (
    <div>
      <textarea className='area-1'
        value={notes}
        rows={10}
        cols={50}
        style={{
          maxHeight: "1000px",
          maxWidth: "400px",
        }}
        onChange={(e) => {
          setNotes(e.target.value);
          localStorage.setItem("notes", e.target.value);
        }}
      ></textarea>
      </div>
  )
}

export default Notes
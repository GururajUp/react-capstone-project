import React from 'react'

function Chip({data, allData, selectedMovies, setSelectedMovies}) {
    const obj= allData.find((item) => item.id ===data)

    const removeSelection = () => {
        setSelectedMovies(selectedMovies.filter((item) => item !== data))
    }
  return (
    <p
    style={{
        border: '2px solid black',
        width: '100px',
        margin: '10px',
        padding: '10px',
        display: 'inline-block'
    }}
    >
        {obj.name}&nbsp; &nbsp; <span style={{cursor: 'pointer'}} onClick={removeSelection}>X</span>
    </p>
  )
}

export default Chip
import React from 'react'

function Block({data, selectedMovies, setSelectedMovies}) {
    function handleSelection () {
        if(selectedMovies.includes(data.id)){
            setSelectedMovies(selectedMovies.filter((id) => id !== data.id))
        }else{
            setSelectedMovies([...selectedMovies, data.id])
        }
    }
    console.log(selectedMovies)
  return (
    <div
    style={{
        border: selectedMovies.includes(data.id) 
        ? '2px solid green'
        : '2px solid black',
        width: '200px',
        height: '200px',
        padding:'10px',
        margin: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: selectedMovies.includes(data.id)
        ? 'green' 
        : 'white'
    }}
    onClick={handleSelection}
    >{data.name}</div>
  )
}

export default Block
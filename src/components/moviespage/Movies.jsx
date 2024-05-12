import React, { useState } from 'react'
import Block from './Block'
import Chip from './Chip'
import { useNavigate } from 'react-router-dom'

const moviesData = [
  {
    id: 1,
    name: 'Action',
    img: ""
  },
  {
    id: 2,
    name: 'Drama',
    img: ""
  },
  {
    id: 3,
    name: 'Romance',
    img: ""
  },
  {
    id: 4,
    name: 'Thriller',
    img: ""
  },
  {
    id: 5,
    name: 'Western',
    img: ""
  },
  {
    id: 6,
    name: 'Horror',
    img: ""
  },
  {
    id: 7,
    name: 'Fantasy',
    img: ""
  },
  {
    id: 8,
    name: 'Music',
    img: ""
  },
  {
    id: 9,
    name: 'Fiction',
    img: ""
  },
]

function Movies() {
  const [selectedMovies, setSelectedMovies] = useState([])
  const navigate = useNavigate()
  const handleNextpage = () => {
    if(selectedMovies.length<3){
      alert('Please select atleast three movies')
    } else {
      localStorage.setItem('selectedMovies', JSON.stringify(selectedMovies))
      localStorage.setItem('allData', JSON.stringify(moviesData))
      navigate('/Browse')
    }
  }
  
  return (
    <>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)'
    }}>
      {moviesData.map((data) => {
        return <Block key={data.id} data={data} selectedMovies={selectedMovies} setSelectedMovies={setSelectedMovies} />
      })} 
    </div>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)'
    }}>
      {selectedMovies.map((data) => {
        return <Chip key={data.id} data={data} allData={moviesData} selectedMovies={selectedMovies} setSelectedMovies={setSelectedMovies} />
      })} 
    </div>
    <button onClick={handleNextpage}>Next page</button>
    </>
  )
}

export default Movies
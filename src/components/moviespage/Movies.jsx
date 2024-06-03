import React, {useState} from 'react'
import Block from './Block'
import Chip from './Chip'
import { useNavigate } from 'react-router-dom'
import actionImg from '../../assets/action.png'
import dramaImg from '../../assets/drama.png'
import romanceImg from '../../assets/romance.png'
import thrillerImg from '../../assets/thriller.png'
import westernImg from '../../assets/western.png'
import horrorImg from '../../assets/horror.png'
import fantasyImg from '../../assets/fantasy.png'
import musicImg from '../../assets/music.png'
import fictionImg from '../../assets/fiction.png'
import dangerIcon from '../../assets/dangerIcon.png'
import './movies.css'


const moviesData = [
    {
      id: 1,
      name: "Action",
      img: actionImg,
      color: '#FF5209'
    },
    {
      id: 2,
      name: "Drama",
      img: dramaImg,
      color: '#D7A4FF'
    },
    {
      id: 3,
      name: "Romance",
      img: romanceImg,
      color: '#148A08'
    },
    {
      id: 4,
      name: "Thriller",
      img: thrillerImg,
      color: '#84C2FF'
    },
    {
      id: 5,
      name: "Western",
      img: westernImg,
      color: '#902500'
    },
    {
      id: 6,
      name: "Horror",
      img: horrorImg,
      color: '#7358FF'
    },
    {
      id: 7,
      name: "Fantasy",
      img: fantasyImg,
      color: '#FF4ADE'
    },
    {
      id: 8,
      name: "Music",
      img: musicImg,
      color: '#E61E32'
    },
    {
      id: 9,
      name: "Science Fiction",
      img: fictionImg,
      color: '#6CD061'
    },
  ]
  



function Movies() {

  const [selectedMovies, setSelectedMovies] = useState([])
  const [danger, setDanger] = useState(false)
  const navigate = useNavigate()

  

  const handleNextPage = () => {
    if (selectedMovies.length < 3) {
      setDanger(true)
    } else {
      setDanger(false)
      localStorage.setItem('selectedMovies', JSON.stringify(selectedMovies))
      localStorage.setItem('moviesData', JSON.stringify(moviesData))
      navigate("/main")
    }
  }

  return (
    <div style={{
        height: '100vh',
        width: '100%'
      }}>
        <div className='moviesStyle'>
  
          <div style={{
            margin: '80px 0px',
            width: '50rem',
            height: '40rem'
          }}>
            <span style={{ color: '#72DB73', display: 'block', fontFamily: 'Single Day, cursive', fontSize: '55px', margin: '15px 5rem 1px 2rem', padding: '15px' }}>
              Super app
            </span>
            <span style={{ color: 'white', display: 'block', fontSize: '70px', margin: '5px 5rem 10px 2rem', padding: '20px' }}>
              Choose your <br />entertainment <br />category
            </span>
            <div style={{ margin: '20px 5rem 10px 2rem' }}>
              {selectedMovies.map((data) => {
                return <Chip key={data.id} moviesData={moviesData} id={data} selectedMovies={selectedMovies} setSelectedMovies={setSelectedMovies} />
              })}
            </div>
            { danger && <span style={{display : 'flex' , marginTop : '50px' , marginLeft : '7.5rem'}}>
              <img width="16" height="16" src={dangerIcon} alt="dangerSign" />
              <p style={{ color: 'red' ,marginLeft: '0.6rem' , fontSize : '18px' }}>Minimum 3 category required</p>
            </span>
            }
          </div>
  
  
          <div className='gridDiv'>
            {moviesData.map((data) => {
              return <Block key={data.id} data={data} selectedMovies={selectedMovies} setSelectedMovies={setSelectedMovies} />
            })}
          </div>
  
          <div className='nextPageButton' onClick={handleNextPage} >
            <span >Next Page</span>
          </div>
        </div>
      </div>
  )
}

export default Movies
import React from 'react'
import Notes from './Notes'
import Timer from './Timer'
import Info from './Info'
import News from './News'
import Weather from './Weather'
import { useNavigate } from 'react-router-dom'
import './Main.css'


function Main() {
  const navigate = useNavigate()

  const browseHandle = () => {
    
    navigate("/utility")
  }
  return (
    <>
    <div className='container3' >
        <div className='vertical'>
          <Info />
          <Weather />
          <Timer/>
        </div>
        <div><Notes /></div>
        <div><News /></div>
      </div>
      <button className='dashboardBrowseButton' onClick={browseHandle}>Browse</button>
    </>
  )
}

export default Main
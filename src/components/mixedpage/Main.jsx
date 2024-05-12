import React from 'react'
// import Weather from './Weather';
import Notes from './Notes'
// import News from './News'
// import './Browse.css'
import Timer from './Timer'
import Info from './Info'
import News from './News'
import Weather from './Weather'
import './Main.css'
function Main() {
  return (
    <>
    <div className='container3'>
        <div className='vertical'>
          <Info />
          <Weather />
          <Timer/>
        </div>
        <div><Notes /></div>
        <div><News /></div>
      </div>
    </>
  )
}

export default Main
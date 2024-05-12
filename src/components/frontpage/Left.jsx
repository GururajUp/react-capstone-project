import React from 'react'
import frontImg from "../../assets/frontImg.jpeg"
import './Left.css'

function Left() {
  return (
    <div className='main'>
        <img className='image' src={frontImg} alt='image'></img>
        <h1 className='header' style={{marginLeft:'30px', fontWeight:'100px'}}>Discover new things on Superapp</h1>
    </div>
  )
}

export default Left
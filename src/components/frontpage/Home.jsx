import React from 'react'
import Form from './Form'
import Left from './Left'
import './Home.css'

function Home() {
  return (
    <div className='header'>
      <Left />
      <Form />
    </div>
  )
}

export default Home
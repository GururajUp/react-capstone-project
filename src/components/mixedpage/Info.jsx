import React from 'react'
import ProfileImg from '../../assets/char-img.png'
import './Info.css'
function Info() {
  const user = JSON.parse(localStorage.getItem("formData"))
  var storedGenre = JSON.parse(localStorage.getItem('selectedGenres'));


  return (
    <div className='info'>
      <img className='profile_img' src={ProfileImg} alt='profile' />
      <div className='user_selected'>
        <div className='user_info'>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.username}</p>
        </div>
        <div className='user_genre'>
          {storedGenre.slice(0,8).map((data) => (
            <p>{data}</p>
          )
          )}
        </div>
      </div>
    </div>
  )
}

export default Info;

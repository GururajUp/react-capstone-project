
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import frontImg from "../../assets/frontImg.jpeg"
import './Form.css'

function Form() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name : '',
        username: '',
        email:'',
        phone: '',
        checkbox : false
    })
    const [error, setError] = useState({
        name : '',
        username : '',
        email : '',
        phone: '',
        checkbox: ''
    })
    const validatephone = (phone) =>{
        const phoneRegex = /^[0-9]{10}/
        return phoneRegex.test(phone)
    }

    const validate = () => {
        let isError = false
        setError((error) => {
            return{
                name : '',
                username : '',
                email : '',
                phone: '',
                checkbox: ''  
            }
        })
        if(data.name.trim().length === 0){
            console.warn('name is required')
            setError((error) => {
                return{...error, name:'name is required'}
            })
            isError= true
        }
        if(data.username.trim().length === 0){
            console.warn('username is required')
            setError((error) => {
                return{...error, username:'username is required'}
            })
            isError= true
        }
        if(data.email.trim().length === 0){
            console.warn('email is required')
            setError((error) => {
                return{...error, email:'email is required'}
            })
            isError= true
        }
        if(data.phone.trim().length === 0 || !validatephone(data.phone)){
            console.warn('phonenumber is either empty or invalid')
            setError((error) => {
                return{...error, phone:'phonenumber is either empty or invalid'}
            })
            isError= true
        }
        if(!data.checkbox){
            console.warn('checkbox is required')
            setError((error) => {
                return{...error, checkbox:'checkbox is required'}
            }) 
            isError= true
        }
        if (!isError){
            console.log('data is valid')
            localStorage.setItem("formData", JSON.stringify(data))
            navigate('/movies')
        }
    }
  return (
    <div className='main'>
        <header className='frontimage'>
        <img className='image' src={frontImg} style={{width:'550px', height:'630px'}} alt='image'></img>
        <h1 className='imagenote' style={{marginTop:'-170px'}} >Discover new things on </h1>
        <h1 className='imagenote' >Superapp</h1>
        </header>
    <header className='container'>
        <h1 className='heading'>Super app</h1>
        <p className='para-1'>Create your new account</p>
        <form className='formmain' onSubmit={(e) => {
            e.preventDefault()
            validate()}}>

            <input className='formbox' 
            type='text' 
            name='' id=''
            placeholder='Name' 
            value={data.name} 
            onChange={(e) => setData({...data, name : e.target.value})}></input>
            <span className='error-1' style={{color:'red'}}>{error.name}</span>

            <input className='formbox' 
            type='text' 
            name='' id='' 
            placeholder='Username' 
            value={data.username} 
            onChange={(e) => setData({...data, username : e.target.value})} />
            <span className='error-1' style={{color:'red'}}>{error.username}</span>


            <input className='formbox'
            type='email' 
            name='' id='' 
            placeholder='Email' 
            value={data.email} 
            onChange={(e) => setData({...data, email : e.target.value})}></input>
            <span className='error-1' style={{color:'red'}}>{error.email}</span>


            <input className='formbox'
            type='tel' 
            name='' id='' 
            placeholder='Phone' 
            value={data.phone} 
            onChange={(e) => setData({...data, phone : e.target.value})}></input>
            <span className='error-1' style={{color:'red'}}>{error.phone}</span>


            
            <label className='label-1' htmlFor='checkbox'>
            <input className='check' 
            type='checkbox' 
            name='checkbox' 
            id='checkbox' 
            checked={data.checkbox}
            onChange={(e) => setData({...data, checkbox : e.target.checked})} />&nbsp; &nbsp;
            Share my regestration data with my super app</label> 
            <span className='error-1' style={{color:'red'}}>{error.checkbox}</span>


            <button className='signupbutton' type='submit'>Sign Up</button>
        </form>
        <p className='para-2'>By clicking on signup, you agrre to Superapp <span className='span'>Terms and Conditions of Use</span></p>
        <p className='para-3'>To learn about hoe superapp collects,uses,shares and protectsyour personal data please head Superapp <span className='span'>Privacy Policy</span></p>
    </header>
    </div>
  )
}

export default Form
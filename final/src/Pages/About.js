import React from 'react'
import { Link } from 'react-router-dom'

import RequestForm from '../Components/RequestForm'

export default function About() {
  return (
    <div>
      <h1 className='head'>Contact Us</h1>
      
      <div  className='card p-3 border-0'>    
        <p className='p-3'>If you have any suggestions for movie, or event TV reviews, please fill out the contact form below!</p>
        <p className='p-3'>If you are a content creator, big or small, and would like to partner with us, please fill out the Content Creator Contact form  <Link to='/content_creator_contact'>HERE</Link>.</p> 
        <RequestForm />
    </div></div>
     
        


    
  )
}

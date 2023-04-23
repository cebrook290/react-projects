import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='container'>
        <h1 className='head'>WELCOME!</h1>

      <p>Hi there! Thank you for coming to our website! We are a small, but up and coming review platform that specializes in putting your thoughts and reviews in front of content creators. As we all know, content creators are the new waive of connecting everyday people with those that only seem like they are out of our reach!</p>

      <p>We do things a little differently around here. Mainly, we don't make newly released videos available to review, to help prevent recency bias. Instead, we will make available a series of videos, either a saga, trilogy, or a group of movies that are thematically related, and put them for your to review! All of these movies, will have been released well over a year prior to posting, to allow time for folks to 'let the dust' settle around the public's initial feelings.</p>

      <p>To see a list of our currently available movies to review, please head over to our <Link to='/reviews'>Reviews</Link> page. There you will be able to leave your own review, as well as see what others have left before you! </p>

      <p>If you would like to suggest a group of up to 5 related movies, please head over to our <Link to='/about'>Contact Us</Link> page to fill out our form. </p>

      <p>Happy Reviewing!</p>
    </div>
  )
}

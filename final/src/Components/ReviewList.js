import React from 'react'
import Review from './Review'

export default function ReviewList({setForm, setEditing, reviews, setReviews}) {

    const handleDelete = id => {
        const updatedReviews = reviews.filter(review => review.id !== id)
        setReviews(updatedReviews)
    }

    const handleEdit = id => {
        const editedPost = reviews.filter(review => review.id === id)
        setForm(editedPost[0])
        setEditing(true)
    }

  return (
    <div className='card-group'>
        <div className='reviewList'>
        {reviews.map(review => (
            <Review 
                key={review.id} 
                review={review} 
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
        ))}

        </div>
    </div>
  )
}

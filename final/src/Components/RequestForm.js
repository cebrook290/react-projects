import React from 'react'

export default function RequestForm() {
  return (
    <div className='container'>
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name"/>
        </div>
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Your Email</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
            
    </div>
  )
}

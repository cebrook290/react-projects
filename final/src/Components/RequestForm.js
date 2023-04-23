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
            <label for="exampleFormControlTextarea1" className="form-label">Movies you would like to see added or any additional comments/feedback!</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="col-12">
        <button className="btn btn-primary" type="submit">Submit form</button>
        </div>
            
    </div>
  )
}

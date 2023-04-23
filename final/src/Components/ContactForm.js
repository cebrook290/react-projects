import React from 'react'

export default function ContactForm() {
  return (<>
    
    <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">@</span>
        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>

    <label for="basic-url" className="form-label">Your vanity URL</label>
    <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
    </div>

    <div className="input-group mb-3">
    <label className="input-group-text" for="inputGroupSelect01">Your Main Platform</label>
    <select className="form-select" id="inputGroupSelect01">
        <option selected>Choose...</option>
        <option value="1">Twitch</option>
        <option value="2">YouTube</option>
        <option value="3">Kick</option>
        <option value="4">TikTok</option>
    </select>
    </div>

    <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">What kind of partnership are you looking for?</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div className="col-12">
        <button className="btn btn-primary" type="submit">Submit form</button>
    </div>


  </>)
}


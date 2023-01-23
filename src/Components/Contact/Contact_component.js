import './Contact.css'
import React from 'react'

const ContactComponent = () => {
  return (
    <div className='form'>
      <form>
        <label>Your Name</label>
        <input type="text"/>
        <label>Email</label>
        <input type="email"/>
        <label>Subject</label>
        <input type="text"/>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your msg here"/>
        <button className='btn' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ContactComponent
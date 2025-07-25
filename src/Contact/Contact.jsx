import React from 'react'
import './Contact.css'

const Contact = () => {
  const onFormSubmit = (formData) =>{
    const formEntries = Object.fromEntries(formData.entries());
    console.log(formEntries);
  }
  return (
    <>
      <div className='contact-container'>
        <h1>Contact Us</h1>
        <form className='contact-form' action={onFormSubmit}>

            <input
            required 
            type='text'
            name='useername'
            placeholder='Enter Full Name'
            />

            <input
            required
            type='email'
            name='Email'
            placeholder='Enter Your Email'/>

            <textarea
            rows="6"
            name='Message'
            placeholder='Enter Your Message'
            />

            <button type='submit'>Submit</button>

        </form>
      </div>
    </>
  )
}

export default Contact

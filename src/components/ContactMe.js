import React from 'react'

const ContactMe = () => {
  return (
    <section>
      <form>
        <input className='bg-medium-primary text-black ' type="text" placeholder='Subject'></input>
        <input className='bg-medium-primary text-black ' type="text" placeholder='Description'></input>
        <input className='bg-medium-primary text-black ' type="email" placeholder='Enter your email'></input>
        <button className='bg-primary text-light-primary'>Send</button>
      </form>
    </section>
  )
}

export default ContactMe

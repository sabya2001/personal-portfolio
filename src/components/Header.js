import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <header>
      <h1 className='text-light-primary font-poppins '>{props.heading}</h1>
    </header>
  )
}

export default Header

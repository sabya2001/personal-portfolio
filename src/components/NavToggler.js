import React from 'react'
import './colors.css'
import './NavToggler.css'

const NavToggler = (props) => {
  
  function togglerOnClick(text){
    props.setValueOfToggler(text)
  }
  return (
    <div className='btn-toggler-container bg-primary'>
          <div className='bg-light-primary btn-container'>
                <button onClick={(event)=>(togglerOnClick(event.target.innerText))} className='btn-generic btn-home bg-light-primary'>HOME</button>
          </div>

          <div className='line'></div>

          <div className='bg-light-primary btn-container'>
                <button onClick={(event)=>(togglerOnClick(event.target.innerText))} className='btn-generic btn-projects bg-light-primary'>PROJECTS</button>
          </div>

          <div className='line'></div>

          <div className='bg-light-primary btn-container'>
          <button onClick={(event)=>(togglerOnClick(event.target.innerText))} className='btn-generic btn-blogs bg-light-primary'>BLOGS</button>
          </div>

          <div className='line'></div>
          
          <div className='bg-light-primary btn-container'>
              <button onClick={(event)=>(togglerOnClick(event.target.innerText))} className='btn-generic btn-contact bg-light-primary' >CONTACT</button>
          </div>
    </div>
  )
}

export default NavToggler


import React, { useState } from 'react'
import './LandingPage.css'
const LandingPage = () => {
  //text to be inserted in para tag after checking readmore condition
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis dapibus arcu,
   a tincidunt nulla. Nulla dapibus felis id augue rhoncus, quis venenatis lectus vestibulum.
   Pellentesque volutpat vulputate nunc in eleifend. Aenean eu massa tortor. Nulla facilisi. Pellentesque 
   habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut interdum felis 
   vitae sagittis maximus. Suspendisse rhoncus massa arcu, vitae accumsan augue luctus sed. Pellentesque
  vitae metus vehicula, efficitur nisl ac, maximus lectus. Aliquam lobortis, ex eu cursus efficitur,
  augue justo hendrerit velit, et accumsan ligula purus ac justo. Fusce faucibus aliquet nunc non aliquam.
  Nullam pulvinar risus vitae elit eleifend blandit. Proin tempus risus dui, eget ornare magna pharetra et. 
  Praesent a mauris hendrerit risus sodales cursus eu ac orci. Phasellus et ante ullamcorper, convallis quam id, imperdiet urna.

    Proin at ante aliquam, luctus risus vulputate, elementum turpis. Nulla ut nisi ante. Aliquam euismod, ipsum at condimentum venenatis, mauris libero
    aliquet nisi, ut ornare ipsum quam quis ipsum. Morbi sagittis ac lacus eu posuere. Cras quis consequat nisl. Morbi tincidunt nibh a odio mattis, at 
    fringilla enim ultricies. Suspendisse bibendum tincidunt justo in pharetra. Duis fermentum velit at metus laoreet porta. Donec sit amet condimentum eros.
     Cras eget molestie tellus. Donec in tempus enim. Pellentesque vel varius sem. Ut eget massa mi.
    Mauris aliquam est nec quam accumsan, in porta ipsum ultrices. Fusce ullamcorper est at lacus condimentum blandit. Curabitur eu metus ante. Aliquam euismod
     vestibulum metus vitae dictum. In fringilla nisi quam, at ornare enim ultrices condimentum. Aliquam erat volutpat. Aenean ut finibus tellus. Nunc aliquet 
     magna varius, rhoncus ante quis, dignissim leo. Proin scelerisque, eros non ullamcorper blandit, nunc lectus posuere odio, nec varius dolor augue at purus.
      Donec interdum lorem vitae justo interdum, vitae feugiat nibh vehicula. Curabitur feugiat arcu non sapien auctor, eget pharetra ligula porttitor. Duis ut 
      erat est. Nam in urna velit. Aenean venenatis lacus dui, eu laoreet diam interdum ut. Nulla mollis risus quis turpis interdum, sit amet blandit ligula interdum.
       Mauris sed nisl nec lectus scelerisque maximus`
  //readmore react hook  
  /*
   readMore = true --> Text Large
   readMore = false --> Text Small
  */    
  const [readMore,setReadMore] = useState(false)
  //function to set value of readmore

  /*@params object
    event parameter is the original event passed throught the onClick event of readMore button
  */
  function readMoreToggler(event){
    setReadMore(!(readMore)) //setting readMore to opposite of what it is now
    readMore?event.target.innerText = "READ MORE":event.target.innerText = "CLOSE" //set the value of inner text of read more button depending on value of readMore
  }


  return (
    <section className='container bg-container'>

        <img src="https://images.unsplash.com/photo-1630208232589-e42b29428b19?ixlib=
                rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto
                =format&fit=crop&w=769&q=80" alt="picture of me" ></img>


        <div className='about-container'>
            <h1 className='text-primary'>I'm Sabyasachi</h1>
            <p className='text-primary'>
              {readMore?text:`${text.slice(0,400)}.....`}
            </p>
            <button className='bg-primary text-light-primary btn-read-more' onClick={(event)=>readMoreToggler(event)}>READ MORE</button>
        </div>        
        
    </section>
  )
}

export default LandingPage

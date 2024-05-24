import React from 'react'
import './Intro.css'
import myimg from '../../Assets/intro.png'
import hire from '../../Assets/hire.png'
import {Link} from 'react-scroll'
 
const Intro = () => {
  return (
   <section id='intro'>
    <div className='intro-content'> 
    <span className='hello'>Hello,</span>
    <span className='intro-text'>I'm <span className='intro-name'>Vithusan </span><br/>Website Designer </span>
    <p className='intro-para'>I am a skilled web designer with experience in creating<br/>  visually appealing and user-friendly websites tailored to<br/>  meet your unique needs.</p>
    <Link> <button className='intro-but'><img src={hire} alt='' className='intro-but-img'/>Hire Me</button></Link>
    </div>
    <img src={myimg} alt='' className='intro-img' />      
   </section>
  )
}

export default Intro       
import React from 'react'
import './Skills.css'
import ui from '../../Assets/ui.jpg';
import web from '../../Assets/web.jpeg';
import webdev from '../../Assets/webdev.jpeg';



const Skills = () => {
  return (
    <section id='skills'>
        <span className='skill-tittle'>What i do  </span>
        <span className='skill-para'>I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. With a strong understanding of design and a keen eye for detail, I am proficient in HTML, CSS, JavaScript, and React, as well as Figma for design. </span>
         
        <div className='skill-bars'>
             <div className='skill-bar'>
                 <img className='skill-img' src={ui} alt=''/> 
                 <div className='skill-bar-text'>
                    <h2>UI/UX design</h2> 
                    <p> This is a demo text, you can write your own content here.</p> 
                 </div>
             </div>
             <div className='skill-bar'>
                 <img className='skill-img' src={web} alt=''/> 
                 <div className='skill-bar-text'>
                    <h2>Website design</h2>
                    <p>This demo text can be changed while making the production ready site.</p> 
                 </div>
             </div>
             <div className='skill-bar'>
                 <img className='skill-img' src={webdev} alt=''/> 
                 <div className='skill-bar-text'>
                    <h2>Website Development</h2>
                    <p>This demo text can be changed while making the production-ready site..</p> 
                 </div>
             </div>
        </div>

    </section>
  )
}

export default Skills
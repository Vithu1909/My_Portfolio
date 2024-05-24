import React from 'react'
import './Works.css'
import img1 from '../../Assets/img1.png'
import img2 from '../../Assets/img-2.jpeg'
import img3 from '../../Assets/img-3.png'
import img4 from '../../Assets/img-4.png'
import img5 from '../../Assets/img-5.jpeg'
import img6 from '../../Assets/img-6.jpeg'
const Works = () => {
  return (
    <section id='works'>
        <h2 className='works-tit'>My portfolio</h2>
        <span className='works-para'>I take immense pride in meticulously crafting each element of my work to ensure it's pixel perfect. My dedication to detail is matched by my passion for helping businesses thrive through a robust and compelling online presence. I am eager to leverage my skills and experience to contribute to your success. </span>
        <div className='work-imgs'>
            <img className='work-img' src={img1} alt=''/>
            <img className='work-img' src={img2} alt=''/>
            <img className='work-img' src={img3} alt=''/>
            <img className='work-img' src={img4} alt=''/>
            <img className='work-img' src={img5} alt=''/>
            <img className='work-img' src={img6} alt=''/> 
            
        </div>

    </section>
  )
}

export default Works
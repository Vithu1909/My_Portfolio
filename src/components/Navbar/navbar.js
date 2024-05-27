  import React, { useState } from 'react'
  import './navbar.css'
  import logo from '../../Assets/logo.png'
  import contact from '../../Assets/contact.png'
  import menu from '../../Assets/menu1.png'
  import {Link} from 'react-scroll'
  
   
  const Navbar = () => { 
    const [showmenu,setshowmenu]=useState(false) 
    return (
      <nav className='navbar'>
          <img src={logo} alt='' className='nav-logo'/>
          <div className='nav-menu'>
                 
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className='nav-menu-item'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}className='nav-menu-item'> About</Link>   
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500}className='nav-menu-item'> Portfolio</Link>
            <Link activeClass='active' to='client' spy={true} smooth={true} offset={-100} duration={500} className='nav-menu-item' > Clients</Link>
             
          </div>
          <button className='nav-button' onClick={()=>{
            document.getElementById('contact').scrollIntoView({behavior:'smooth'}); 
          }}><img src={contact} alt=''className='nav-but-img'/> Contact Me</button>
          <img src={menu} alt='' className='mob' onClick={()=>setshowmenu(!showmenu)}/>
          <div className='navmenu' style={{display: showmenu?'flex':'none'}}>
                 
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className='list-item'onClick={()=>setshowmenu(false)} >Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}className='list-item'onClick={()=>setshowmenu(false)}> About</Link>   
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500}className='list-item'onClick={()=>setshowmenu(false)}> Portfolio</Link>
            <Link activeClass='active' to='client' spy={true} smooth={true} offset={-100} duration={500} className='list-item'onClick={()=>setshowmenu(false)} > Clients</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='list-item'onClick={()=>setshowmenu(false)} > Contact</Link>
             
          </div>
         
 
      </nav>
    )
  }
      
  export default Navbar 
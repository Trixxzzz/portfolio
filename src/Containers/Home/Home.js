import React from 'react'
import "./Home.scss"
// import { useNavigate } from 'react-router-dom'
import { Animate } from 'react-simple-animate'
import { FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon

const Home = () => {
  // const navigate = useNavigate();

  // const handleNavigateToContactMePage = () => {
  //   navigate("/contact");
  // }

  return (
    <section id='home' className='home'>
      <div className='home__text-wrapper'>
        <h1>
          Hello, I'm Aryan Ramteke
          <br/>
          A Web Developer
        </h1> 
      </div>
      <Animate 
        play 
        duration={1.5}
        delay={1}
        start={{
          transform: 'translateY(550px)'
        }}
        end={{
          transform: 'translatex(0px)'
        }}
      >
        <div className='home__contact-me'>
          {/* Replace the "Hire Me" button with a LinkedIn icon */}
          <a href="https://www.linkedin.com/in/ramteke-aryan-ratnaghosh-79334422a/" target="blank" className="linkedin-icon">
            <FaLinkedin />
          </a>
        </div>
      </Animate>
    </section>  
  )
}

export default Home

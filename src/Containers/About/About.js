import React from 'react'
import PageHeaderContent from '../../Components/PageHeaderContent/PageHeaderContent'
import {BsInfoCircleFill} from "react-icons/bs"
import { Animate } from 'react-simple-animate'
import "./About.scss"
import {DiDatabase,DiJsBadge,DiMongodb,DiReact} from "react-icons/di"

const personalDetails=[
  {
    label:"Name",
    value: "Aryan Ramteke"
  },
  {
    label:"Age",
    value: "20"
  },
  {
    label:"Address",
    value: "India"
  },
  {
    label:"Email",
    value: "ramtekearyan2003@gmail.com"
  },
  {
    label:"Contact No",
    value: "+91 9987223941"
  },
  
];

const jobSummary= "I'm Aryan Ramteke, a Backend Development enthusiast skilled in HTML, CSS, JavaScript, and React.js. I'm committed to hard work, eager to learn from experienced individuals, a strong team player, and an attentive listener. I'm dedicated to honing my backend development skills and contributing to innovative projects in this dynamic field. Let's collaborate and make a difference together.";

const About = () => {
  return (
    <section id='about' className='about'>
      <PageHeaderContent 
        headerText="About Me"
        icon={<BsInfoCircleFill size={40}/> }
      />
      <div className='about__content'>
        <div className='about__content__personalWrapper'>
        <Animate 
      play 
      duration={1}
      delay={0.5}
      start={{
        transform: 'translateX(1000px)'
        }}
      end={{
        transform: 'translatex(0px)'
      }}>
        <h3>Front End Developer</h3>
        <p>{jobSummary}</p>
        </Animate>
        <Animate 
      play 
      duration={1}
      delay={.5}
      start={{
        transform: 'translateX(1000px)'
        }}
      end={{
        transform: 'translatex(0px)'
      }}>
        <h3 className='personalInformationHeaderText'>Personal Information</h3>
        <ul>
          {
            personalDetails.map((item,i)=>(
              <li key={i}>
                <span className='title'>{item.label}:</span>
                <span className='value'>{item.value}</span>

              </li>
            ))
          }
        </ul>
      </Animate>
        </div>
        <div className='about__content__servicesWrapper'>
        <Animate 
      play 
      duration={1}
      delay={.5}
      start={{
        transform: 'translateX(1000px)'
        }}
      end={{
        transform: 'translatex(0px)'
      }}>
          
          <div className='about__content__servicesWrapper__innerContent'>

          <div>
          <DiDatabase size={60} color='var(--blue-theme-main-color)'/>  
          </div>
          <div>
          <DiJsBadge size={60} color='var(--blue-theme-main-color)'/>  
          </div>
          <div>
          <DiMongodb size={60} color='var(--blue-theme-main-color)'/>  
          </div>
          <div>
          <DiReact size={60} color='var(--blue-theme-main-color)'/>  
          </div>

        </div>  
        </Animate>  
          </div>
          
        </div>

    </section>
  )
}

export default About
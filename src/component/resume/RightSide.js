import React from 'react'
import Education from './Education'
import Experience from './Experience'
import {  Cell } from 'react-mdl'
import Skills from './Skills'

function RightSide() {
    return (
        <Cell className='resumeRightCol' col={8}>
            <h2>Education</h2>
            <Education 
            start='2000'
            end='2006'
            name='Shaheen Academy'/>
             <Education 
            start='2007'
            end='2009'
            name='Fazaia College'/>

            <hr style={{borderTop:'3px solid #e22947'}}/>

            <h2>Experience</h2>
            
            <Experience
            start='2009'
            end='20011'
            name='Al and ML Developer'
            />
            <Experience
            start='2012'
            end='20018'
            name='Computer Vision Developer'
            />
            
            <hr style={{borderTop:'3px solid #e22947'}}/>
            
            <h2>Skills</h2>
            <Skills
            skill='React'
            progress={80}/>
            <Skills
            skill='Al and ML'
            progress={40}/>
            <Skills
            skill='Python'
            progress={90}/>
            <Skills
            skill='JavaScript'
            progress={66}/>
        
        </Cell>
    )
}

export default RightSide

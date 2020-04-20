import React from 'react'
import { Grid, Cell } from 'react-mdl'
import { useSpring,animated } from "react-spring";

function LandingPage() {
    

    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      })


    return (
        <div style={{width:'100%', margin:'auto'}}>
            <Grid className='Landing-grid'>
                <Cell col={12}>
                <animated.img style={props} src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" 
                className="Avatar-img" 
                alt="avatar"/>
                <div className="banner-text">
                    <animated.h1 style={props}>Full Stack Developer</animated.h1>
                    <hr/>
                    <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | Nodejs | Express | MongoDB  </p>
                    <div className="social-links">
                        {/* Linkedin */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className='fa fa-linkedin-square' aria-hidden="true" />
                        </a>
                         {/* Github */}
                         <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className='fa fa-github-square' aria-hidden="true" />
                        </a>
                         {/* freecodecamp */}
                         <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className='fa fa-free-code-camp' aria-hidden="true" />
                        </a>
                         {/* Youtube */}
                         <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className='fa fa-youtube-square' aria-hidden="true" />
                        </a>

                    </div>

                </div>

                </Cell>
            </Grid>
        </div>
    )
}

export default LandingPage

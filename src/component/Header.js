import React from 'react'
import { Link } from 'react-router-dom'
import {Header,Navigation} from 'react-mdl'

function HeaderComponent() {
    return (           
            <Header className='Header-color' title={
            <Link to="/" style={{textDecoration:'none', color:'white'}}>MyPortfolio</Link> }scroll>
                    <Navigation>                     
                        <Link to="/Resume">Resume</Link>
                        <Link to="/About">About Me</Link>
                        <Link to="/Projects">Projects</Link>
                        <Link to="/Contact">Contact</Link>
                    </Navigation>
                </Header>            
        
    )
}

export default HeaderComponent

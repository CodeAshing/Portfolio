import React from 'react'
import { Link } from 'react-router-dom'
import {Drawer,Navigation} from 'react-mdl'

function DrawerComp() {
    return (
        <Drawer title={
        <Link to="/" style={{textDecoration:'none', color:'Black'}}>MyPortfolio</Link> }>
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/About">About Me</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Drawer>
    )
}

export default DrawerComp

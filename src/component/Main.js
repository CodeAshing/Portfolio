import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import Resume from './resume/Resume'
import AboutMe from './AboutMe'
import Contact from './contact/Contact'
import Projects from './projects/Projects'

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/Resume" component={Resume}/>
            <Route path="/About" component={AboutMe}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/Projects" component={Projects}/>
        </Switch>
    )
}

export default Main

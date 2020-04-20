import React from 'react'
import { Tab, Tabs, Grid, Cell } from 'react-mdl'
import useToggleCategories from './useToggleCategories'

function Projects() {
    const [toggleCategories,activeTab,setactiveTab]=useToggleCategories()

    return (
        <div className='category-tab'>
            <Tabs activeTab={activeTab} onChange={(tabid)=> setactiveTab(tabid)} ripple>
                <Tab>React</Tab>
                <Tab>Angular</Tab>
                <Tab>Vue</Tab>
                <Tab>MongoDB</Tab>
            </Tabs>
                <Grid >
                    <Cell col={12}>
                        <div className='content'>
                            {toggleCategories} 
                                                       
                        </div>
                    </Cell>
                </Grid>
        </div>
    )
}

export default Projects
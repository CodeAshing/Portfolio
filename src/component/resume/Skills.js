import React from 'react'
import { Grid, Cell, ProgressBar } from 'react-mdl'

function Skills(props) {
    return (
        <div>
        <Grid>
            <Cell col={12}>
                <div style={{display:'flex'}}>
                    {props.skill}
                <ProgressBar style={{margin:'auto',width:'75%'}}
                progress={props.progress}
                />
                </div>
            </Cell>
        </Grid>
            
        </div>
    )
}

export default Skills

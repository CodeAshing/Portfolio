import React from 'react'
import { Grid, Cell } from 'react-mdl'

function Education(props) {
    return (
        <div>
            <Grid>
                <Cell col={4}>
                    <p>{props.start}-{props.end}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{margin:'0px'}}>
                        {props.name}
                    </h4>
                    <p>A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.
                         Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.</p>

                </Cell>
            </Grid>
            
        </div>
    )
}

export default Education

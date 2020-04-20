import React from 'react'
import { Grid, Cell } from 'react-mdl'

function AboutMe() {
    return (
        <div>
            
            <Grid style={{width:'100%',height:'560px'}}>
                <Cell style={{width:'80%',height:'80%',margin:'auto'}}   className='aboutme-cell' col={1}>                    
                A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.
                         Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.
                </Cell>
            </Grid>

    </div>
    )
}

export default AboutMe

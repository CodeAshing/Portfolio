import React from 'react'
import { Grid, Cell } from 'react-mdl'
import RightSide from './RightSide'

function Resume() {
    return (
        <div>            
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign:"center"}}>
                        <img 
                        src='https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png'
                        alt='avatar'
                        style={{height:'200px'}}/>
                    </div>
                    <h2 style={{paddingTop:'2em'}}>Asharib Ahmed</h2>
                    <h4 style={{color:'grey'}}>Programmer</h4>
                    <hr style={{borderTop:"3px solid #833fb2", width:'50%'}}/>
                    <p>A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.
                         Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.</p>
                    <hr style={{borderTop:"3px solid #833fb2", width:'50%'}}/>
                    <h5>Address</h5>
                    <p>1 Hacker Way Menlo Park, 94025 </p>
                    <h5>Phone</h5>
                    <p>(+92) 3353011417</p>
                    <h5>Email</h5>
                    <p>Asharibahmed154#gmail.com</p>
                    <h5>Web</h5>
                    <p>mywebsite.com</p>
                    <hr style={{borderTop:"3px solid #833fb2", width:'50%'}}/>
                </Cell>
                <RightSide/>
            </Grid>
            
        </div>
    )
}

export default Resume

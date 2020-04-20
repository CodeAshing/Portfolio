import React from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

function Contact() {
    return (
        <div className='contact-body'>
            <Grid className='contact-grid'>
                <Cell col={6}>
                    <h2>Asharib Ahmed</h2>
                    <img 
                    src='https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png'
                    alt='avatar'
                    style={{height:'250px'}}/>
                    <p style={{width:'75%', margin:'auto',paddingTop:'1em'}}>A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.
                     Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.</p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className='contact-list'>                        
                    <List>
                        <ListItem>
                            <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                <i className='fa fa-phone-square' aria-hidden='true'/>
                                    (+92) 3353011417
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                <i className='fa fa-fax' aria-hidden='true'/>
                                    (+92) 3353011417
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                <i className='fa fa-envelope' aria-hidden='true'/>
                                 Asharib@gmail.com
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                <i className='fa fa-skype' aria-hidden='true'/>
                                 Asharib90
                            </ListItemContent>
                        </ListItem>
                    </List>

                    </div>

                </Cell>
            </Grid>
        </div>
    )
}

export default Contact
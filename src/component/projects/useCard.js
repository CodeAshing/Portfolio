import React from 'react'
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'


function useCard(title,text,url) {
    const card=()=>{ 
        return(     
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff',height:'176px',
                    background:`url(${url}) center/cover`}}>
                        {title}
                    </CardTitle>
                    <CardText>
                        {text}
                    </CardText>
                    <CardActions>
                        <Button colored>Github</Button>
                        <Button colored>Code Pen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>
            )

    }   
    return [card]
}

export default useCard

import React, { useState } from 'react'
import useCard from './useCard'


const useToggleCategories = () => {  

    const [activeTab, setactiveTab] = useState(0)
   //  react card 
    const [react]=useCard('project1','this is how I creat my project with love','https://reactjs.org/logo-og.png')
    const [react1]=useCard('project2','this is how I creat my project with love','https://reactjs.org/logo-og.png')    
    const [react2]=useCard('project3','this is how I creat my project with love','https://reactjs.org/logo-og.png')
   // angular cards
    const [Angular]=useCard('project1','this is how I creat my project with love','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWADKEQ7p96zeYYlXuOJ7KOnui-RO08LpzRlcF0He7g0pPb9SA&usqp=CAU')
    const [Angular1]=useCard('project2','this is how I creat my project with love','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWADKEQ7p96zeYYlXuOJ7KOnui-RO08LpzRlcF0He7g0pPb9SA&usqp=CAU')    
   //  mangoDB card
    const [mango]=useCard('project1','this is how I creat my project with love','https://4.bp.blogspot.com/-R2D3RLQuP_U/VAAWQqa1GdI/AAAAAAAAAuw/GqaHO06qcl0/s1600/mango%2BDB.PNG')    
   //  vue card
    const [vue]=useCard('project1','this is how I creat my project with love','https://miro.medium.com/max/3920/1*oZqGznbYXJfBlvGp5gQlYQ.jpeg')    
    
    

   const toggleCategories=()=>{    

      if( activeTab===0){
         return( 
            <div className='project-grid'>    
            {react()}
            {react1()}
            {react2()}               
            </div>
            )
      }else if( activeTab===1){
         return(  
            <div className='project-grid'>    
            {Angular()}
            {Angular1()}          
            </div>
            )
      }else if( activeTab===2){
         return(  
            <div className='project-grid'>    
            {vue()}              
            </div>
            )
      }else if( activeTab===3){
         return(   
            <div className='project-grid'>    
            {mango()}             
            </div>
            )
      }                   
      
   }

    return [toggleCategories(),activeTab,setactiveTab ]
   
    
}



export default useToggleCategories

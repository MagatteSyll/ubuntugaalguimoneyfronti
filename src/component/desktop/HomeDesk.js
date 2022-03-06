import React, { Fragment } from 'react'
import CourAction from '../CourAction'
import LastMessage from './LastMessage'
import '../style.css'
import GaalguiPay from './GaalguiPay'

//Accueil sur desktop
function HomeDesk() {
    return (
       <div className='homedesk'>    
        <div className='desk' >  
            <CourAction/>
            <GaalguiPay/>
            <LastMessage/> 
             
        </div>
       </div>
    )
}

export default HomeDesk

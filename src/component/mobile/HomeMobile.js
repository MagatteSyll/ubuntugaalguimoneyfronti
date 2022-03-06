import React from 'react'
import Menu from './Menu'
import Tabu from './Tabu'
import '../style.css'
import PayementMobile from './PayementMobile'



function HomeMobile() {
    return (
        <div className='mobile'>
          <Menu/>
          <PayementMobile/>

          <Tabu/> 
          
        </div>
    )
}

export default HomeMobile

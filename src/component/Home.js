import React, { Fragment } from 'react'
import HomeMobile from './mobile/HomeMobile'
import HomeDesk from './desktop/HomeDesk'



//Page accueil personnelle
function Home() {
    return (
        <div className='content'>
            <HomeDesk/>
            <HomeMobile/>
        </div> 
    )
}

export default Home

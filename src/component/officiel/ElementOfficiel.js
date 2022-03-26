import NavOfficiel from './NavOfficiel'
import Segment from './Segment'
import HomeOfficiel from './HomeOfficiel'
import {Fragment} from 'react'



//Page officiel
function ElementOfficiel({islog}) {

   

  
   
   
    return (
      <Fragment>
      <NavOfficiel/>
       <Segment/>
       <HomeOfficiel/> 
       
      </Fragment>
    )
}

export default ElementOfficiel

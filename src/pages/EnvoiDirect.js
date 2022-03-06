import React,{useState,Fragment} from 'react'
import  '../component/style.css'
import Envoyerdirect from '../component/mobile/Envoyerdirect'
import EnvoiDirectDesk from '../component/desktop/EnvoiDirectDesk';



function EnvoiDirect(props) {
  const  isstaf=props.isstaf
  
   
 return (
 <Fragment>
 {isstaf?null:
  <Fragment>
  <EnvoiDirectDesk getuser={props.getuser}/>
  </Fragment>}
</Fragment>

    ) 
}

export default EnvoiDirect

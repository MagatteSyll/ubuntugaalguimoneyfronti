import React,{Fragment, useState} from 'react'
import  '../component/style.css'
import Envoyercode from '../component/mobile/Envoyercode'
import EnvoiCodeDesk from '../component/desktop/EnvoiCodeDesk'


function EnvoiViaCode(props) {
    let isstaf=props.isstaf
 
   
    return (
        <Fragment>
          {isstaf?null:
          <Fragment>
          <EnvoiCodeDesk  getuser={props.getuser}/>
        </Fragment>}
        </Fragment>
    )
}

export default EnvoiViaCode

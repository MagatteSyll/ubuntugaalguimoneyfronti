import React,{Fragment} from 'react'
import FooterDesk from './desktop/FooterDesk'
import FooterMobile from './mobile/FooterMobile'
import FootStaf from '../Staf/FootStaf'

function Footer({isstaf}) {
    return (
        <div>
            {isstaf?
            <FootStaf/>:
            <div>
            <FooterDesk/>
            <FooterMobile/>
            </div>
         }
           
            
        </div>
    )
}

export default Footer

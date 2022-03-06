import React,{Fragment} from 'react'
import FooterDesk from './desktop/FooterDesk'
import Pied from './mobile/Pied'

function Footer(props) {
    const islog=props.islog
    const isstaf=props.isstaf
    return (
        <div>
            {isstaf?null:
            <div>
            {islog?
            <Fragment>
             <FooterDesk/>
             <Pied/>
            </Fragment>
            :null}
            </div>}
            
        </div>
    )
}

export default Footer

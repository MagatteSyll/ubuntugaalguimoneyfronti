import React,{Fragment} from 'react'
import CourAction from '../component/CourAction'
import GaalguiPay from '../component/desktop/GaalguiPay'
import FootStaf from './FootStaf'
import LastOperation from './LastOperation'
import Navigation from './Navigation'
import '../component/style.css'


function AccueilStaff(props) {

    return (
        <div className='staff'>
           <Navigation/> 
           <CourAction/>
           <GaalguiPay/>
           <LastOperation/>
           <FootStaf/>
        </div>
    )
}

export default AccueilStaff

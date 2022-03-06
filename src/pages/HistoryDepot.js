import React,{useState,useEffect, Fragment} from 'react'
import axiosInstance from '../axios'
import {IonCard, IonItem, IonLoading} from '@ionic/react'
import HistroyDepotDesk from '../component/desktop/HistroyDepotDesk'
import HistoryDepotMobile from '../component/mobile/HistoryDepotMobile'

function HistoryDepot(props) {
    const  isstaf=props.isstaf
    const  [message, setmessage] = useState([])
    const  [load, setload] = useState(false)
    const [showLoading, setShowLoading] = useState(true);

    useEffect(()=>{
     axiosInstance
     .get('client/historydepot/')
     .then((res=>{
         setmessage(res.data)
         setload(true)
     }))
    },[])
    return (
        <Fragment>
        {isstaf?null:
        <div>
        {load?
        <Fragment>
         <HistroyDepotDesk message={message}/>  
         <HistoryDepotMobile message={message}/>    
        </Fragment>
        :<IonLoading
        cssClass='my-custom-class'
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Chargement...'}
        duration={5000}
        />} 
        </div>}
    </Fragment>

    )
}

export default HistoryDepot

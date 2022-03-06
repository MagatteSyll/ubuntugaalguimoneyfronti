import React,{useState,useEffect, Fragment} from 'react'
import axiosInstance from '../axios'
import {IonCard, IonItem, IonLoading} from '@ionic/react'
import HistoriqueReceptionDesk from '../component/desktop/HistoriqueReceptionDesk'
import HistoriqueReceptionMobile from '../component/mobile/HistoriqueReceptionMobile'

function HistoryReception(props) {
    const  isstaf=props.isstaf
    const  [message, setmessage] = useState([])
    const  [load, setload] = useState(false)
    const [showLoading, setShowLoading] = useState(true);

    useEffect(()=>{
     axiosInstance
     .get('client/historyreception/') 
     .then((res=>{
         setmessage(res.data)
         setload(true)
         console.log(res.data)
     }))
    },[])
    return ( 
        <Fragment>
     {isstaf?null:
      <div>
        {load?
        <div>
        <HistoriqueReceptionDesk message={message}/>
        <HistoriqueReceptionMobile message={message}/> 
      </div>
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
export default HistoryReception

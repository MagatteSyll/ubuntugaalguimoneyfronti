import React,{useState,useEffect,Fragment} from 'react'
import axiosInstance from '../axios'
import {IonCard, IonItem, IonLoading} from '@ionic/react'
import HistoryEnvoiDirectDesk from '../component/desktop/HistoryEnvoiDirectDesk'
import HistoryEnvoiDirectMobile from '../component/mobile/HistoryEnvoiDirectMobile'

function HistoryEnvoiDirect(props) {
    const  isstaf=props.isstaf
    const  [message, setmessage] = useState([])
    const  [load, setload] = useState(false)
    const [showLoading, setShowLoading] = useState(true);

    useEffect(()=>{
     axiosInstance
     .get('client/historyenvoidirect/')
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
     <div>
      <HistoryEnvoiDirectDesk message={message} />
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
export default HistoryEnvoiDirect

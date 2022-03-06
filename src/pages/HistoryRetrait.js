import React,{useState,useEffect, Fragment} from 'react'
import axiosInstance from '../axios'
import { IonLoading} from '@ionic/react'
import HistoryRetraitDesk from '../component/desktop/HistoryRetraitDesk'
import HistoryRetraitMobile from '../component/mobile/HistoryRetraitMobile'

function HistoryRetrait(props) {
    const isstaf=props.isstaf
    const  [message, setmessage] = useState([])
    const  [load, setload] = useState(false)
    const [showLoading, setShowLoading] = useState(true);

    useEffect(()=>{
     axiosInstance
     .get('client/historyretrait/')
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
      <HistoryRetraitDesk message={message}/>
      <HistoryRetraitMobile  message={message}/>
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

export default HistoryRetrait

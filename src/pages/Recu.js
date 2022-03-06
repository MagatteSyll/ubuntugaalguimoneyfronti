import React,{useState,useEffect, Fragment} from 'react'
import {callOutline,locationOutline} from 'ionicons/icons'
import '../component/style.css'
import { IonLoading } from '@ionic/react'
import RecuDesk from '../component/desktop/RecuDesk'
import RecuMobile from '../component/mobile/RecuMobile'
import { useParams } from 'react-router-dom';
import axiosInstance from '../axios'




function Recu() {
   const {id}=useParams()
    const  [code, setcode] = useState(true)
    const  [recu, setrecu] = useState([])
    const  [load, setload] = useState(false)
    const [showLoading, setShowLoading] = useState(true);

    useEffect(()=>{
      axiosInstance
      .post('client/messagespecifique/',{'id':id})
      .then(res=>{
        console.log(res.data)
        setrecu(res.data)
        setload(true)
      })

    },[])

    return (
     <Fragment>
       {load?
       <div>
       <RecuDesk recu={recu} />
       <RecuMobile recu={recu} />
       </div>:<IonLoading
        cssClass='my-custom-class'
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Chargement...'}
        duration={5000}
      />}
            
     </Fragment>   
     
       
    )
}

export default Recu

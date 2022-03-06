import React,{useState,useEffect} from 'react'
import axiosInstance from '../axios';
import {IonCard, IonItem, IonLoading} from '@ionic/react'
import Navigation from './Navigation';
import FootStaf from './FootStaf';


function HistoriqueStaff() {
    const [messages,setmessages]=useState([])
    const  [ismes, setismes] = useState(false)
    const [showLoading, setShowLoading] = useState(true);

    useEffect(()=>{
      
    axiosInstance
    .get('staff/notifstaff/')
  .then(res=>{
    setmessages(res.data)
    setismes(true)
    console.log(res.data)
},[])

   
         
    })
    return (
        <div>
     <Navigation/>
        <IonCard>
        {ismes?
     <div>
       {messages.length>0?
       <div className='container'>
      {messages.map(m=>
     <IonItem >{m.notification} ,{new Date(m.created).toLocaleDateString()}</IonItem>
    )}</div>:<h1 style={{color:'magenta'}}>Aucune transaction effectuée</h1>}
    </div>:<IonLoading
   cssClass='my-custom-class'
   isOpen={showLoading}
   onDidDismiss={() => setShowLoading(false)}
   message={'Chargement...'}
   duration={5000}
  />} </IonCard>

  <FootStaf/>
  </div>
    )
}

export default HistoriqueStaff



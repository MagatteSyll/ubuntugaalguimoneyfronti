import React,{useEffect,useState} from 'react'
import { IonLabel, IonCard, IonItem, IonLoading} from '@ionic/react'
import { Link } from 'react-router-dom'
import  {arrowBackOutline}  from 'ionicons/icons'
import axiosInstance from '../../axios'

//Historique de depot sur mobile
function HistoryDepotMobile(props) {
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
       <div className='mobile'>
         {load?
          <IonCard>
          {message.length>0?
           <div className='container'>
               {message.map(m=>
           <IonCard key={m.id}>
          <IonItem style={{textAlign:'center'}}  >
          <Link to={`/recu/${m.id}`} style={{textDecoration:'none',color:'black'}}> 
          {m.message},{new Date(m.created).toLocaleDateString()}</Link></IonItem>
            </IonCard>
         )}
         </div>:<IonCard> <IonLabel>Oups vous n avez effectué aucun depot</IonLabel></IonCard>}
        </IonCard>:<IonLoading
        cssClass='my-custom-class'
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Chargement...'}
        duration={5000}
        />}
       </div>
   )
       
}

export default HistoryDepotMobile

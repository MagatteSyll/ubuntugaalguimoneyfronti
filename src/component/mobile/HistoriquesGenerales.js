import { IonLabel, IonCard, IonItem, IonIcon} from '@ionic/react'
import React from 'react'
import { Link } from 'react-router-dom'
import  {arrowBackOutline}  from 'ionicons/icons'


//tout l historique  sur mobile
const  HistoriqueGenerales =(props)=> {
   const messages=props.messages
   
   return (
       <div className='mobile'>
          <IonCard>
          {messages.length>0?
           <div className='container'>
               {messages.map(m=>
           <IonCard key={m.id}>
          <IonItem style={{textAlign:'center'}}  >
           <Link to={`/recu/${m.id}`} style={{textDecoration:'none',color:'black'}}> {m.message},{new Date(m.created).toLocaleDateString()}</Link></IonItem>
            </IonCard>
         )}
         </div>:<IonCard> <IonLabel>Oups vous n avez effectué aucune transaction</IonLabel></IonCard>}
        </IonCard>
       </div>
   )
}

export default HistoriqueGenerales



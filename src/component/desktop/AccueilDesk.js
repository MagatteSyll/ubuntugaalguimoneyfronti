import {IonText,IonItem,IonCard,IonCardTitle,IonCardContent} from '@ionic/react'
import {Link} from 'react-router-dom'


function AccueilDesk({user,message}){

return(
    <div className='desk displayside'>
     <IonCard className=' cartaccueiltaux m-4'>
    <IonCardTitle>
     Taux d échange en CFA
    </IonCardTitle>
    <IonCardContent>
     <p>
    <IonText>Euro  <b> 550 </b></IonText>
     </p>
    <p>
   <IonText>USD <b> 450</b></IonText>
    </p>
    <p>
    <IonText>CAD <b> 445</b> </IonText>
    </p>
    </IonCardContent>
    </IonCard>
     {message.length>0?
       <div>
      <h3 className='m-4'>Dernières Transactions</h3>
      <div className='m-4'>
        {message.map(m=>
       <IonItem  key={m.id}  >
       <Link to={`/recu/${m.id}/${m.nature_transaction}`} className='link' >
       <IonText>{m.message},{new Date(m.created).toLocaleDateString('en-GB',
                     {hour: '2-digit', minute:'2-digit'})}
        </IonText></Link></IonItem>
         )}</div>
          <Link className='link m-4' to='/transaction' >
             Voir l historique </Link>
         </div>:<p><b>Oups vous n avez effectué aucune transaction</b></p>}
    </div>

	);
}


export default AccueilDesk;
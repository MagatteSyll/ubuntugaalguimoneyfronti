import {Link} from 'react-router-dom'
import {IonCard,IonItem,} from '@ionic/react'


function AccueilMobile({message}){

return(
<div className='mobile'>
{message.length>0?
 <div>
 <h3 className='m-3'>Dernières Transactions</h3>
   <div>
  {message.map(m=>
   <IonCard>
   <IonItem  key={m.id} > <Link className='link' to={`/recu/${m.id}/${m.nature_transaction}`} >
    {m.message},{new Date(m.created).toLocaleDateString('en-GB',
     {hour: '2-digit', minute:'2-digit'})}</Link></IonItem></IonCard>
   )}</div>
  <Link className='link m-4' to='/transaction' >
  Voir l historique  </Link>
 </div>:<p><b>Oups vous n avez effectué aucune transaction</b></p>}
</div>

	);
}


export default AccueilMobile;
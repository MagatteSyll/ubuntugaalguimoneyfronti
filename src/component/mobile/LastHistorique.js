import { IonPopover,IonIcon,IonContent, IonCard, IonCardContent, 
    IonItem, IonList ,IonLoading,IonGrid,
    IonRow,IonCol,IonSearchbar, IonModal, IonLabel, IonText} from '@ionic/react'
import React, { Fragment,useState ,useEffect} from 'react'
import { ellipsisHorizontalOutline } from 'ionicons/icons'
import { Link } from 'react-router-dom'
import axiosInstance from '../../axios'

//Dernieres transactions
const  LastHistorique=()=>{
    const  [pop, setpop] = useState(false)
    const  [message, setmessage] = useState([])
    const  [load, setload] = useState(false)
    const [showLoading, setShowLoading] = useState(true);

    useEffect(()=>{
        axiosInstance
        .get('client/lastmessage/')
        .then((res=>{
            //console.log(res.data)
            setmessage(res.data)
            setload(true)
        }))
    },[])


    const handlepop=()=>{
        setpop(true)
    }

    return (
      <Fragment>
       <IonCard className='ion-text-center'>
            {load?
            <div>
            {message.length>0?
            <div>
           <h3 style={{textAlign:'center'}}>Dernières Transactions</h3>
           <div>
           {message.map(m=>
           <IonCard>
          <IonItem  key={m.id} > <Link to={`/recu/${m.id}`} style={{textDecoration:'none',color:'black'}} >
              {m.message},{new Date(m.created).toLocaleDateString()}</Link></IonItem></IonCard>
         )}</div>
        <button className="w3-button w3-black" type="submit">
         <Link style={{textAlign:'center',color:'white',textDecoration:'none'}} to='/transaction' >
             Voir l historique  </Link></button>
         </div>:<p><b>Oups vous n avez effectué aucune transaction</b></p>}
         </div>:<IonLoading
        cssClass='my-custom-class'
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Chargement...'}
        duration={5000}
       />}
        </IonCard>   

         <IonPopover
        cssClass='my-custom-class'
        isOpen={pop}
        onDidDismiss={() => setpop(false)}
      >
        <IonGrid>
            <IonRow>
             <IonCol size='12'>
            <Link to=''>Transactions Gaalgui</Link>
        </IonCol>
        <IonCol size='12'>
        <Link to=''>Compte professionnel</Link>
        </IonCol>
        <IonCol size='12'>
        <Link to=''>GaalguiMoneyBusinees</Link>
        </IonCol>
         </IonRow>
        </IonGrid>
        
      </IonPopover>
          
      </Fragment>
    )
}

export default LastHistorique


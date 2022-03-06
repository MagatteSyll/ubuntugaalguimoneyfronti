import React,{Fragment, useState,useEffect} from 'react'
import '../component/style.css'
import {callOutline,locationOutline,chevronBackOutline,checkmarkDoneOutline} from 'ionicons/icons'
import { IonCard, IonCol, IonGrid, IonIcon, IonItem, IonRow, IonText,IonLoading } from '@ionic/react'
import {Link,useParams} from 'react-router-dom'
import axiosInstance from '../axios'

function RecuRetraitCode() {
    const {id}=useParams()
    const  [recu, setrecu] = useState([])
    const  [load, setload] = useState(false)
    const [showLoading, setShowLoading] = useState(true);

    useEffect(()=>{
      axiosInstance
      .post('staff/recuretraitcode/',{'id':id})
      .then(res=>{
        //console.log(res.data)
        setrecu(res.data)
        setload(true)
      })

    },[])
    return (
        <div>
        {load?
        <div>
     <IonGrid>
         <IonRow>
             <IonCol size='3'>
             <IonItem>
             <Link to='/accueil'><IonIcon icon={chevronBackOutline} style={{zoom:'1.5'}}/></Link> 
              </IonItem>
             <IonCard>Logo</IonCard>
             </IonCol>
             <IonCol size='6' style={{marginLeft:'170px'}}>
              <IonItem>
                  <IonText> <IonIcon icon={locationOutline}/> Dakar, rue on s en fiche</IonText>
              </IonItem>
              <IonItem>
                  <IonText> <IonIcon icon={callOutline}/> +(221)772059140</IonText>
                  <IonText style={{marginLeft:'40px'}} > +(221)772197305</IonText>
                  <IonText style={{marginLeft:'40px'}} > www.gaalguimoney.com</IonText>
              </IonItem>
             </IonCol>
         </IonRow>
     </IonGrid>
    
     <div style={{textAlign:'center'}}>
     <h2 style={{textAlign:'center'}}> <IonIcon  icon={checkmarkDoneOutline}/> transaction GaalguiMoney</h2>
         <IonGrid>
             <IonRow>
                 <IonCol size='5'>
                 <p>Date de la transaction</p>
                 <h4>{new Date(recu.created).toLocaleDateString()}</h4>
                 </IonCol>
                 <IonCol size='5' style={{marginLeft:'0px'}}>
                 <p>Nature de la transaction </p>
                 <h4>Retrait via  code </h4>
                  </IonCol>
                 <IonCol size='5'>
                 <p>Montant à retirer </p>
                 <h4>{recu.somme} CFA </h4>
                 </IonCol>
                 <IonCol size='5' style={{marginLeft:'0px'}}>
                 <p>Expediteur </p>
                 <h4>{recu.Nom_complet_de_l_envoyeur} </h4>
                 </IonCol>
                 <IonCol size='5' style={{marginLeft:'0px'}}>
                 <p>Beneficiaire </p>
                 <h4>{recu.Nom_complet_du_receveur} </h4>
                 </IonCol> 
             </IonRow>
         </IonGrid>
     </div>
     <div style={{marginLeft:'500px'}}>
         <IonCard>
         Signature
         </IonCard>    
     </div> 
     </div>:<IonLoading
        cssClass='my-custom-class'
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Chargement...'}
        duration={5000}
    />}      
 </div> 
    )
}

export default RecuRetraitCode

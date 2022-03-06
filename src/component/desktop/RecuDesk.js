import React,{Fragment, useState} from 'react'
import '../style.css'
import {callOutline,locationOutline,chevronBackOutline} from 'ionicons/icons'
import { IonCard, IonCol, IonGrid, IonIcon, IonItem, IonRow, IonText } from '@ionic/react'
import {Link} from 'react-router-dom'

function RecuDesk(props) {
 
    const recu=props.recu
    return (
        <div className='desk'>
     <div className='recu'>
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
         <h2 style={{textAlign:'center'}}> Recu de transaction GaalguiMoney</h2>
             <IonGrid>
                 <IonRow>
                     <IonCol size='5'>
                     <p>Date de la transaction</p>
                     <h4>{new Date(recu.created).toLocaleDateString()}</h4>
                     </IonCol>
                     <IonCol size='5' style={{marginLeft:'0px'}}>
                     <p>Nature de la transaction </p>
                     <h4>{recu.nature_transaction}</h4>
                      </IonCol>
                     {recu.code!=null?
                     <IonCol size='5'>
                         <p>code de la transaction</p>
                         <h4>{recu.code}</h4>
                         </IonCol>:null}
                     <IonCol size='5'>
                     <p>Montant de la transaction </p>
                     <h4>{recu.montant} CFA </h4>
                     </IonCol>
                     {recu.commission!=null?
                     <IonCol size='5' style={{marginLeft:'0px'}}>
                     <p>Commission </p>
                     <h4>{recu.commission} CFA </h4>
                     </IonCol>:null}
                     {recu.beneficiaire!=null?
                     <IonCol size='5' style={{marginLeft:'0px'}}>
                     <p>Beneficiaire </p>
                     <h4>{recu.beneficiaire}</h4>
                     </IonCol>:null}  
                 </IonRow>
             </IonGrid>
         </div>
         <div style={{marginLeft:'500px'}}>
             <IonCard>
             Signature
             </IonCard>    
         </div>       
     </div>  
     </div>
     )
}

export default RecuDesk



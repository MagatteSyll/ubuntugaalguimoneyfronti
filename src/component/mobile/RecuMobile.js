import { IonCard, IonCol, IonGrid, IonItem, IonRow,IonIcon,IonText } from '@ionic/react'
import React,{useState} from 'react'
import '../style.css'
import {callOutline,locationOutline,chevronBackOutline} from 'ionicons/icons'
import { Link } from 'react-router-dom'

function RecuMobile(props) {
    const  [code, setcode] = useState(true)
    const recu=props.recu
    return (
        <div className='mobile'>
            <IonGrid>
                <IonRow>
                    <IonCol size='8'>
                    <IonItem>
                 <Link to='/accueil'> <IonIcon icon={chevronBackOutline} style={{zoom:'1.5'}}/></Link> 
                  </IonItem>
                    <IonCard>
                    Logo
                  </IonCard>
                 

                    </IonCol>   
                </IonRow>
            </IonGrid>
            <div style={{marginLeft:'15px'}}>
                <h6><b>Reçu de transaction GaalguiMoney</b></h6>
                <p>Date de la transaction <b>{new Date(recu.created).toLocaleDateString()}</b></p>
                <p>Nature de la transaction <b>{recu.nature_transaction}</b></p>
               {recu.code!=null? <p>Code de retrait:<b>{recu.code}</b></p>:null}
               <p>Montant de la transaction <b>{recu.montant} CFA </b></p>
               {recu.commission!=null?<p>Commission <b>{recu.commission} CFA</b></p>:null}
              {recu.beneficiaire!=null? <p>Beneficiaire <b>{recu.beneficiaire}</b></p>:null}
            </div>
           <div style={{marginTop:'30px'}}>
               <IonCard>
                   Signature
               </IonCard>
               <IonItem>
               <IonIcon icon={locationOutline}/> Dakar, rue on s en fiche
               </IonItem>
               <IonItem>
                      <IonText> <IonIcon icon={callOutline}/> +(221)772059140</IonText>
                      <IonText style={{marginLeft:'40px'}} > +(221)772197305</IonText>
                  </IonItem>
                  <IonItem>
                  <IonText style={{marginLeft:'40px'}} > www.gaalguimoney.com</IonText>
                  </IonItem>
                      
           </div>

        </div>
    )
}

export default RecuMobile

import { IonCard, IonCol, IonGrid, IonIcon, IonItem, IonRow, IonText } from '@ionic/react'
import {Link} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function RecuDesk({recu}) {
 
    return (
        <div className='desk'>
     <div className='recu'>
         <IonGrid>
             <IonRow>
                 <IonCol size='3'>
                 <IonItem>
                 <Link to='/accueil'><ArrowBackIcon className='iconsocial'/></Link> 
                  </IonItem>
                 <IonCard>Logo</IonCard>
                  </IonCol>
                 <IonCol size='6' className='recucol'>
                  <IonItem>
                      <IonText> <LocationOnIcon />  Dakar, rue on s en fiche</IonText>
                  </IonItem>
                  <IonItem>
                      <IonText> <LocalPhoneIcon/> +(221)772059140</IonText>
                      <IonText className='recutext' > +(221)772197305</IonText>
                      <IonText className='recutext' > www.gaalguimoney.com</IonText>
                  </IonItem>
                 </IonCol>
             </IonRow>
         </IonGrid>
        
         <div className='centerbtn'>
         <h2 className='centerbtn'> Recu de transaction GaalguiMoney</h2>
             <IonGrid>
                 <IonRow>
                     <IonCol size='5'>
                     <p>Date de la transaction</p>
                     <h4>{new Date(recu.created).toLocaleDateString('en-GB',
                     {hour: '2-digit', minute:'2-digit'})}</h4>
                     </IonCol>
                     <IonCol size='5' >
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
                     <IonCol size='5' >
                     <p>Commission </p>
                     <h4>{recu.commission} CFA </h4>
                     </IonCol>:null}
                     {recu.beneficiaire!=null?
                     <IonCol size='5' >
                     <p>Beneficiaire </p>
                     <h4>{recu.beneficiaire}</h4>
                     </IonCol>:null}  
                 </IonRow>
             </IonGrid>
         </div>
         <div className='cartsignature'>
             <IonCard>
             Signature
             </IonCard>    
         </div>       
     </div>  
     </div>
     )
}

export default RecuDesk



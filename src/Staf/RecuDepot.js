import { useState,useEffect} from 'react'
import { IonCard, IonCol, IonGrid, IonItem, IonRow, IonText } from '@ionic/react'
import {Link,useParams} from 'react-router-dom'
import axiosInstance from '../axios'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function RecuDepot() {
    const {id}=useParams()
    const {nature}=useParams()
    const  [recu, setrecu] = useState([])
    const  [load, setload] = useState(false)
   ;

    useEffect(()=>{
      axiosInstance
      .post('staff/recudepot/',{'id':id})
      .then(res=>{
       // console.log(res.data)
        setrecu(res.data)
        setload(true)
      })

    },[])
    return (
        <div>
            {load && nature==="depot"?
            <div>
         <IonGrid>
             <IonRow>
                 <IonCol size='3'>
                 <IonItem>
                 <Link to='/accueil' className='link'><ArrowBackIcon className='iconsocial'/></Link> 
                  </IonItem>
                 <IonCard>Logo</IonCard>
                 </IonCol>
                 <IonCol size='6' className='recucol'>
                  <IonItem>
                      <IonText> <LocationOnIcon/> Dakar, rue on s en fiche</IonText>
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
         <h2 className='centerbtn'> <DoneOutlineIcon/> transaction GaalguiMoney</h2>
             <IonGrid>
                 <IonRow>
                     <IonCol size='5'>
                     <p>Date de la transaction</p>
                     <h4>{new Date(recu.created).toLocaleDateString()}</h4>
                     </IonCol>
                     <IonCol size='5'>
                     <p>Nature de la transaction </p>
                     <h4>Depot</h4>
                      </IonCol>
                     <IonCol size='5'>
                     <p>Montant à deposer  </p>
                     <h4>{recu.somme} CFA </h4>
                     </IonCol>
                     <IonCol size='5'>
                     <p>Client </p>
                     <h4>{recu.depositaire.prenom} {recu.depositaire.nom} </h4>
                     </IonCol> 
                 </IonRow>
             </IonGrid>
         </div>
         <div className='cartsignature'>
             <IonCard>
             Signature
             </IonCard>    
         </div> 
         </div>:null}     
     </div>  
  
            
        
    )
}

export default RecuDepot


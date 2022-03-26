import { IonCard, IonCol, IonGrid, IonItem, IonRow,IonIcon, IonText ,IonLoading} from '@ionic/react'
import React,{useState,useEffect, Fragment} from 'react'
import {Link } from 'react-router-dom'
import  {arrowBackOutline,checkmarkDoneOutline}  from 'ionicons/icons'
import axiosInstance from '../axios'
import { useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';


function SuccesEnvoiDirect() {
    const {id} =useParams()
    const  [recu, setrecu] = useState([])
    const  [load, setload] = useState(false)
    const [showLoading, setShowLoading] = useState(true);

    useEffect(()=>{
        let formdta=new FormData()
        formdta.append('id',id)
        axiosInstance
        .post('client/recudirect/',formdta)
        .then(res=>{
            setrecu(res.data)
            setload(true)
        })

    },[])

    return (
        <Fragment>
        {load?
        <div> 
           <div className="w3-bar w3-green">
           <div className="w3-bar-item w3-center">
           <Link to='/accueil' className='nodecolink'> <ArrowBackIcon className='iconsocial'/> </Link>
          <IonText  >  Transaction effectuée</IonText></div>
           </div>
            <div className='centerbtn'> 
             <IonCard>
                <h3><DoneOutlineIcon/> Envoi direct  GaalguiMoney</h3> 
                <h3> <b>{recu.envoi.somme} CFA</b></h3> 
             </IonCard>
             <h4>Informations  sur la transaction</h4>
             <IonGrid>
                 <IonRow>
                 <IonCol size='5'>
                      <p>Date de l envoi </p>
                      <p><b>{new Date(recu.envoi.created).toLocaleDateString()}</b></p>
                     </IonCol>
                     <IonCol size='5'>
                      <p>Montant envoyé </p>
                      <p><b>{recu.envoi.somme} CFA</b></p>
                     </IonCol>
            
                     <IonCol size='5'>
                      <p>Commission de l envoi</p>
                      <p><b>{recu.envoi.commission} CFA</b></p>
                     </IonCol>
                     <IonCol size='5'>
                      <p>Beneficiaire</p>
                      <p><b>{recu.receveur.prenom} {recu.receveur.nom}</b></p>
                     </IonCol>
                 </IonRow>
             </IonGrid>
             <IonCard className='cartsignature'>
                 Signature
             </IonCard>
            </div>
            
        </div>:null}
        </Fragment>
    )
}

export default SuccesEnvoiDirect

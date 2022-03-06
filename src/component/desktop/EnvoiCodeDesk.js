import React,{Fragment, useState} from 'react'
import axiosInstance from '../../axios'
import { useHistory } from 'react-router-dom';
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { IonText,IonModal,IonIcon, IonGrid, IonRow, IonCol, IonCard } from '@ionic/react';


function EnvoiCodeDesk(props) {
    const getuser=()=>{props.getuser()}
    const  [data, setdata] = useState({
        phone:'',
        somme:'',
        nom:''
    })
    const  [frais, setfrais] = useState()
    const history=useHistory()
    const  [modal, setmodal] = useState(false)
  

    const handlenom=e=>{
        setdata({...data,nom:e.target.value})
    }
    const handletel=e=>{
        setdata({...data,phone:e.target.value})
    }
    const handlesomme=e=>{
      if(e.target.value===isNaN||e.target.value <=0){
        novalidnan()
        return;

      }
        setdata({...data,somme:e.target.value})
        
    }
    const Erreur = () => toast.error("Erreur!Transaction impossible",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });
    const novalidnan = () => toast.error("Entrez un nombre valide",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });



    const handlecode=e=>{
        e.preventDefault()
        let formdata=new FormData()
        formdata.append('somme',data.somme)
        
        axiosInstance
        .post('client/verificationviacode/',formdata)
        .then(res=>{
          
            setfrais(res.data)
            setmodal(true)})

       .catch(()=>{
        Erreur()
     
      }) }


    const Confirmation=e=>{
        e.preventDefault()
        let formdata=new FormData()
        formdata.append('phone_beneficiaire',data.phone)
        formdata.append('somme',data.somme)
        formdata.append('Nom_complet_du_receveur',data.nom)
        axiosInstance
        .post('client/envoicodedirect/',formdata)
        .then(res=>{
            getuser()
            setmodal(false)
            //console.log(res.data)
            history.push(`/successenvoicode/${res.data.id}`)
            
          })
        
          
          }

    const handleclose=()=>{
        setmodal(false)
       
       
    }
    return (
      <Fragment> 
      <div >
      </div>
        <div className='content'>  
        <form className="w3-container" onSubmit={handlecode}>
        <div className="w3-section">
        <p className='centerbtn'>  <label><b>Nom complet du beneficiaire</b></label></p>
          <input className="w3-input w3-border w3-margin-bottom" type="text" onChange={handlenom} placeholder='Modou Syll' required/>
          <p className='centerbtn'>  <label><b>Numero telephone du beneficiaire</b></label></p>
          <input className="w3-input w3-border" type="tel" placeholder='+221'  onChange={handletel} required />
          <p className='centerbtn'> <label><b>Somme</b></label></p>
          <input className="w3-input w3-border" type="number" placeholder='150.90' onChange={handlesomme} required />
          <p className='centerbtn'>
          <button className="w3-button w3-round-xxlarge w3-green w3-center w3-margin" type="submit">Envoyer</button>  </p>
        </div>
      </form>
      <IonModal isOpen={modal} cssClass='my-custom-class'
       swipeToClose={true}
       onDidDismiss={() => setmodal(false)}>

<div className="w3-section w3-center">
           <IonGrid>
             <IonRow>
               <IonCol size='8'>
               <IonCard>
                logo
              </IonCard>
               </IonCol>
               <IonCol size='5'>
               <p>Nature de l operation</p>
               <p><b>Envoi via code </b></p>
               </IonCol>
               <IonCol size='5'>
               <p>Beneficiaire</p>
               <p><b> {data.nom}  </b></p>
               </IonCol>
               <IonCol size='5'>
               <p>Montant de l envoi</p>
               <p><b> {data.somme} CFA </b></p>
               </IonCol>
               <IonCol size='5'>
               <p>telephone du beneficiaire</p>
               <p><b> {data.phone}  </b></p>
               </IonCol>
               <IonCol size='5'>
               <p>Commission</p>
               <p><b> {frais} CFA </b></p>
               </IonCol>
             </IonRow>
           </IonGrid>
            <p className='centerbtn'>
            <button className="w3-button w3-white w3-border w3-border-green w3-round-large" onClick={Confirmation}>Confirmer</button>
            <button className="w3-button w3-white w3-border w3-border-red w3-round-large w3-margin" onClick={handleclose}>Annuler</button>
            </p>
            </div>   
   
     </IonModal> 
       
        </div>  
        </Fragment>  
       
    )
}

export default EnvoiCodeDesk

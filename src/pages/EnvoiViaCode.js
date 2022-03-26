import React,{Fragment, useState} from 'react'
import axiosInstance from '../axios'
import { useHistory,Link } from 'react-router-dom';
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { IonText,IonModal,IonIcon, IonGrid, IonRow, IonCol, IonCard } from '@ionic/react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function EnvoiViaCode(props) {
    const history=useHistory()
    const  [data, setdata] = useState({
        phone:'',
        somme:'',
        nom:''
    })
    
    const handledata=e=>{
    setdata({
    ...data,[e.target.name]:e.target.value.trim()
    })
    }
    const errtel= () => toast.error("Numero de telephone invalide",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });
    const errnom= () => toast.error("Entrez un nom valide",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
    });
    const Erreur = () => toast.error("Erreur!Transaction impossible",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });
    const novalidnan = () => toast.error("Entrez un nombre valide",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });
  
const Confirmation=e=>{
        e.preventDefault()
        if(data.phone===""||data.phone<11)
        {
          errtel()
          return;
        }
        if(data.nom===""||data.nom.match(/^ *$/)!== null){
           errnom()
           return;
        }
        if(data.somme===""||data.somme<0){
            novalidnan()
            return;
        }
        let formdata=new FormData()
        formdata.append('phone',data.phone)
        formdata.append('somme',data.somme)
        formdata.append('nom',data.nom)
        axiosInstance
        .post('client/verificationviacode/',formdata)
        .then(res=>{
          history.push(`/confirmationenvoicode/${res.data.id}/${res.data.nom}`)
            
          })
        
          
          }
 
   
    return ( 
        <div >
        <p className='m-4'>
  <Link to='/accueil' className='link'><ArrowBackIcon className='iconsocial'/></Link></p>
        <form className='container' onSubmit={Confirmation}>
        <IonGrid>
       <IonRow>
    <IonCol size='10' className='centerbtn'>
    <p> <label>Nom complet du beneficiaire</label></p>
    <p> <input className="w3-input w3-border"
     type="text" placeholder="Modou Syll"
      onChange={handledata} 
      name='nom'
      required /></p>
        </IonCol>
    <IonCol size='10' className='centerbtn'>
         <p>  <label>Numero de telephone du beneficiaire</label></p>
         <p><input className="w3-input w3-border"
         type="tel" placeholder="+221"
          onChange={handledata} 
         name='phone'
         defaultValue='+221'
         required/>
         </p>
         </IonCol>
         <IonCol size='10' className='centerbtn'>
            <p><label>Montant à envoyer</label></p>  
             <p>
             <input className="w3-input w3-border"
            type="number" placeholder="1000.00"
            onChange={handledata} 
            name='somme'
            required/>
             </p>
            </IonCol>
            <IonCol size='10'className='centerbtn'>
            <button className='w3-button w3-green' type='submit'>Envoyer</button>
            </IonCol>
            </IonRow>
        </IonGrid>
        </form>
        </div>
    )
}

export default EnvoiViaCode

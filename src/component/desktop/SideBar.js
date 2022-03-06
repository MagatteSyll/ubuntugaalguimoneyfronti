import React,{useEffect,useState} from 'react'
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';
import { Fragment } from 'react';
import {IonCard, IonIcon, IonItem, IonLoading, IonText}  from '@ionic/react'
import '../style.css'
import {settings,locationOutline,personCircleOutline} from 'ionicons/icons'
//import { w3cwebsocket as W3CWebSocket } from "websocket";


//Sidebar page personnelle desktop
const  SideBar=(props) =>{
    const islog=props.islog
    const user=props.user
    const history=useHistory()
    const  load=props.load
    const isstaf=props.isstaf
    const [showLoading, setShowLoading] = useState(true);
   
  const envoi=()=>{
    history.push('/envoyer')
  }
  const coda=()=>{
    history.push('/envoiviacode')
  }
  const handleEnvoidirect=()=>{
    history.push('/historiquedenvoidirect')
  }
  const handleEnvoicode=()=>{
    history.push('/historiquedenvoiviacode')
  }
  const handleDepot=()=>{
    history.push('/historiquedepot')
  }
  const handleRetrait=()=>{
    history.push('/historiqueretrait')
  }
  const handleReception=()=>{
    history.push('/historiquereception')
  }
  const handlePayement=()=>{
    history.push('/historiquepayement')
  }
  const handleparametre=()=>{
    history.push('/parametre')
  }
  const handlepoint=()=>{
    history.push('/pointdacces')
  }
  
  
  
    return (
      <Fragment>
        {islog?
    <Fragment>
      {isstaf?null:
   <Fragment> 
     {load?  
     <div >
        
<div className="sidebar"  >
<IonCard  className="w3-bar-item"><h4><IonItem><IonIcon icon={personCircleOutline}/>{user.prenom} {user.nom}</IonItem>
  <IonItem>Solde:<IonText style={{color:'red'}}>{user.solde} CFA</IonText></IonItem>
  </h4>
  </IonCard>
  <IonCard className="w3-bar-item">
    <h4 style={{textAlign:'center'}}> Transactions</h4>
    		<IonItem><button onClick={envoi} className="w3-bar-item w3-button">Envoyer direct</button></IonItem>
    		<IonItem><button  onClick={coda} className="w3-bar-item w3-button">Envoyer  code </button></IonItem>	
       <h4 style={{textAlign:'center'}}> Historiques</h4> 
     <IonItem> <button  onClick={handleEnvoidirect}  className="w3-bar-item w3-button"> Envoi direct</button></IonItem>
     <IonItem><button onClick={handleEnvoicode} className="w3-bar-item w3-button">Envoi par code</button></IonItem>
     <IonItem> <button onClick={handleReception} className="w3-bar-item w3-button">Reception</button> </IonItem>
     <IonItem> <button onClick={handleDepot} className="w3-bar-item w3-button">Depot</button> </IonItem>
     <IonItem> <button onClick={handleRetrait} className="w3-bar-item w3-button">Retrait</button> </IonItem>
     <IonItem> <button onClick={handlePayement} className="w3-bar-item w3-button">Payement</button> </IonItem>
     <IonItem> ​<button onClick={handleparametre} className="w3-bar-item w3-button"><IonIcon icon={settings}/> Parametres</button></IonItem>
     <IonItem> ​<button onClick={handlepoint} className="w3-bar-item w3-button"> 
     <IonIcon icon={locationOutline}/> Acces</button> </IonItem>
 </IonCard></div>
  
</div>:<IonLoading
        cssClass='my-custom-class'
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Chargement...'}
        duration={5000}
       />}
</Fragment>}
</Fragment>:null}
</Fragment>

        
    )
}

export default SideBar

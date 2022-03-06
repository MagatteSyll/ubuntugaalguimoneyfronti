import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import axiosInstance from '../axios';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { IonIcon,IonLoading } from '@ionic/react';
import {personCircleOutline} from 'ionicons/icons'

function Navigation() {
    const  [user, setuser] = useState([])
    const  [load, setload] = useState(false)
    const [showLoading, setShowLoading] = useState(true);
    const [bureaucrate, setbureaucrate] = useState(false)
    const history=useHistory()
    const Deconnexion=()=>{
		localStorage.removeItem('__jdkm__');
		localStorage.removeItem('__jvqm__');
		axiosInstance.defaults.headers['Authorization'] = null;
		history.push('/');
  }
  useEffect(()=>{
    axiosInstance
    .get('client/getuser')
    .then(res=>{
      setuser(res.data)
      setload(true)
    })
  },[])
  useEffect(()=>{
    axiosInstance
    .get('staff/isbureaucrate/')
    .then(res=>{
      setbureaucrate(res.data)
      
    })
  },[])

  const home=()=>{
    history.push('/accueil')
  }
  const depot=()=>{
    history.push('/depot')
  }
  const retrait=()=>{
    history.push('/retrait')
  }
  const envoicode=()=>{
    history.push('/viacode')
  }
  const retraitcode=()=>{
    history.push('/retraitparcode')
  }
  const historique=()=>{
    history.push('/historique')
  }
  const professionnel=()=>{
    history.push('/compteprofessionnel')
  }
    return (
    <div>
      {load?
  <div className="w3-bar w3-black">
  <button onClick={home} className="w3-bar-item w3-button">GaalguiMoney</button>
  <button  onClick={depot} className="w3-bar-item w3-button">Depot</button>
  <button onClick={retrait} className="w3-bar-item w3-button">Retrait</button>
  <button onClick={envoicode}  className="w3-bar-item w3-button">Envoi par code</button>
  <button onClick={retraitcode}  class="w3-bar-item w3-button">Retrait par code </button>
  {bureaucrate?
  <button  onClick={professionnel} class="w3-bar-item w3-button">
    Creation de compte professionnel</button>:null}
  <button  className="w3-bar-item w3-button w3-right" onClick={Deconnexion}>Deconnexion </button>
  <button  className="w3-bar-item w3-button w3-right " > <IonIcon  icon={personCircleOutline}/> {user.prenom}</button>
  
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

export default Navigation


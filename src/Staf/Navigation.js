import { useHistory } from 'react-router-dom';
import axiosInstance from '../axios';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { IonIcon,IonLoading,IonSearchbar,IonCol,IonRow,IonGrid } from '@ionic/react';
import {personCircleOutline} from 'ionicons/icons'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Navigation({user}) {
  const history=useHistory()
  const Deconnexion=()=>{
		localStorage.removeItem('__jmdf__');
		localStorage.removeItem('__jvmdf__');
		axiosInstance.defaults.headers['Authorization'] = null;
    window.location.reload()
		history.push('/');
  }

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
  const activation=()=>{
    history.push('/activationcompteclient')
  }
  const desactivation=()=>{
    history.push('/desactivationcompteclient')
  }
  const reactivation=()=>{
     history.push('/reactivationcompte')
  }
  const membre=()=>{
    history.push('/nouvelmembrestaff')
  }
    
    return (
    <div>
  <button onClick={home} className="w3-bar-item w3-button noeffecthove">GaalguiMoneylogo</button>
  <div className="w3-bar">
  <button  onClick={depot} className="w3-bar-item w3-button noeffecthove">Depot</button>
  <button onClick={retrait} className="w3-bar-item w3-button noeffecthove">Retrait</button>
  <button onClick={envoicode}  className="w3-bar-item w3-button noeffecthove">Envoi par code</button>
  <button onClick={retraitcode}  className="w3-bar-item w3-button noeffecthove">Retrait par code </button>
  <button onClick={activation}  className="w3-bar-item w3-button noeffecthove">Activation compte (document) </button>
  <button  className="w3-bar-item w3-button w3-right noeffecthove" title='deconnexion' onClick={Deconnexion}><ArrowForwardIcon /> </button>
  <button  className="w3-bar-item w3-button w3-right noeffecthove" > <IonIcon  icon={personCircleOutline}/> {user.prenom}
  </button>
   <IonGrid>
  <IonRow>
  <IonCol size='10' className='container'>
  <IonSearchbar
  placeholder='gaalguipay'/>
  </IonCol>
  </IonRow>
  </IonGrid>
  </div>
  {user.bureaucrate?
 <div className="w3-bar">
  <button  onClick={professionnel} className="w3-bar-item w3-button noeffecthove">
    Creation de compte professionnel</button>
   <button onClick={desactivation}  className="w3-bar-item w3-button noeffecthove">Desactivation compte </button>
   <button onClick={reactivation} 
    className="w3-bar-item w3-button noeffecthove">Reactivation compte </button>
   {user.manager?
    <span>
  <button  onClick={membre} className="w3-bar-item w3-button noeffecthove">
   Nouveau membre du staff</button>
  <button  onClick={membre} className="w3-bar-item w3-button noeffecthove">
   </button>
    </span>:null}
    </div>:null}


  </div>
    )
}

export default Navigation


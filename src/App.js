import React,{useState,useEffect,Fragment} from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Accueil from './pages/Accueil';
import Connexion from './pages/Connexion';
import SideBar from './component/desktop/SideBar';
import Nav from './component/NavBar';
import EnvoiDirect from './pages/EnvoiDirect';
import Modal from 'react-modal'
import Inscription from './pages/Inscription';
import EnvoiViaCode from './pages/EnvoiViaCode';
import axiosInstance from './axios';
import EnvoiCode from './Staf/EnvoiCode';
import Depot from './Staf/Depot';
import Retrait from './Staf/Retrait';
import RetraitParCode from './Staf/RetraitParCode';
import {toast} from 'react-toastify'
import Footer from './component/Footer'
import Historique from './pages/Historique';
import Parametres from './pages/Parametres';
import PointAcces from './pages/PointAcces';
import ResetPassword from './pages/ResetPassword';
import HistoriqueStaff from './Staf/HistoriqueStaff';
import './component/style.css'
import Officiel from './pages/Officiel';
import CompteProfessionnel from './Staf/CompteProfessionnel';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import {IonLoading} from '@ionic/react'
import Tarif from './pages/Tarif'
import Carriere from './pages/Carriere'
import Professionnel from './pages/Professionnel'
import ServiceClient from './pages/ServiceClient';
import GaalguiPay from './pages/GaalguiPay';
import Recu from './pages/Recu';
import SuccesEnvoiDirect from './pages/SuccesEnvoiDirect';
import SuccessEnvoiCode from './pages/SuccessEnvoiCode';
import RecuDepot from './Staf/RecuDepot';
import RecuRetrait from './Staf/RecuRetrait'
import RecuEnvoiCode from './Staf/RecuEnvoiCode';
import RecuRetraitCode from './Staf/RecuRetraitCode';
import { Redirect } from 'react-router'
import VerificationPhone from './pages/VerificationPhone'
import ConfirmationEnvoiDirect from './pages/ConfirmationEnvoiDirect'
import ConfirmationEnvoiCode from './pages/ConfirmationEnvoiCode'
import ConfirmationResetPassword from './pages/ConfirmationResetPassword'
import ChangePassword from './pages/ChangePassword'
import ConfirmationDepot from './Staf/ConfirmationDepot'
import ConfirmationRetrait from './Staf/ConfirmationRetrait'
import ConfirmationEnvoiCodeStaf from './Staf/ConfirmationEnvoiCodeStaf'
import ConfirmationRetraitCode from './Staf/ConfirmationRetraitCode'
import ActivationCompte from './Staf/ActivationCompte'
import ConfirmationActivation from './Staf/ConfirmationActivation'
import DesactivationClient from './Staf/DesactivationClient'
import ConfirmationDesactivation from './Staf/ConfirmationDesactivation'
import ReactivationCompte from './Staf/ReactivationCompte'
import ConfirmationReactivation from './Staf/ConfirmationReactivation'
import NouvelMembreStaff from './Staf/NouvelMembreStaff'
import ConfirmationNouvelMembre from './Staf/ConfirmationNouvelMembre'



Modal.setAppElement('#root')
toast.configure()

function App() {
  const  [islog, setislog] = useState(false)
  const  [isstaf, setisstaf] = useState(false)
  const  [user, setuser] = useState([])
  const [userload,setuserload]=useState(false)
  const  [data, setdata] = useState()
  const  [logload, setlogload] = useState(false)
  const [stafload,setstafload]=useState(false)
  const [showLoading, setShowLoading] = useState(true);

    const getuser=()=>{
     
      axiosInstance
      .get('http://127.0.0.1:8000/api/client/getuser/')
      .then(res=>{
        setuser(res.data)
        setuserload(true)
         //console.log(res.data)
        
      })}

  useEffect(()=>{
    getuser()
  },[])
  
  useEffect(()=>{

    axiosInstance
    .get('client/islog/')
    .then(res=>{
      setislog(res.data)
      setlogload(true)
    //  console.log(res.data)

    })
  })
  useEffect(()=>{
 
    axiosInstance
    .get('staff/isstaff/')
    .then(res=>{
      setisstaf(res.data)
      setstafload(true)
    })
  })
 
  
  const client=()=>(
    <Fragment> 
    <Fragment>
    <Nav islog={islog} isstaf={isstaf} user={user}  />
   <SideBar islog={islog} getuser={getuser} user={user}  isstaf={isstaf}/>
    <div >
   <Route exact path='/accueil' render={(props) =>(islog?<Accueil {...props} isstaf={isstaf} user={user}/>:null)}/>
   {islog?
    <>
   <Route exact path='/transaction' render={(props) =>(isstaf?null:<Historique {...props} />)}/> 
   <Route exact path='/depot' render={(props) =>(isstaf?<Depot {...props}  />:<Redirect to='/'/>)}/>
  <Route exact path='/retrait'  render={(props) =>(isstaf?<Retrait {...props}   />:null)}/>
   <Route exact path='/viacode' 
     render={(props) =>(isstaf?<EnvoiCode {...props}  />:null)}/>
   <Route exact path='/retraitparcode' 
     render={(props) =>(isstaf?<RetraitParCode {...props}   />:null)}/>
  <Route exact path='/activationcompteclient' 
     render={(props) =>(isstaf?<ActivationCompte {...props}   />:null)}/>
  <Route exact path='/desactivationcompteclient' 
   render={(props) =>(user.bureaucrate?<DesactivationClient {...props}   />:null)}/>
  <Route exact path='/reactivationcompte' 
   render={(props) =>(user.bureaucrate?<ReactivationCompte {...props}   />:null)}/>
  <Route exact path='/nouvelmembrestaff' 
   render={(props) =>(user.manager?<NouvelMembreStaff {...props}   />:null)}/>
   </>:
  <Redirect to='/' />}
  <Footer  isstaf={isstaf}/>

  </div>
   

   
   </Fragment>
  </Fragment>

  )
  return (
    <div>
     {userload && stafload && logload?
    <BrowserRouter>
    <Switch>  
    <Route exact path='/connexion'  render={(props) => (islog?<Redirect to='/accueil'/>:<Connexion  {...props} staf={isstaf} />)}/>
    <Route exact path='/'  render={(props) => <Officiel  {...props} staf={isstaf} />}/>
    <Route exact path='/phoneconfirmation/:code/:id/:nom' 
    render={(props)=>(islog?<Redirect to='/accueil'/>:
    <VerificationPhone {...props}/>)} />
    <Route exact path='/resetpassword/:id/codeconfirmation' 
    render={(props)=>(islog?<Redirect to='/accueil'/>:
    <ConfirmationResetPassword {...props}/>)} />
    <Route exact path='/changepassword/:id/resetpassword' 
    render={(props)=>(islog?<Redirect to='/accueil'/>:
    <ChangePassword {...props}/>)}/>
     <Route exact path='/envoyer' 
   render={(props) => (isstaf?null:<EnvoiDirect {...props}  getuser={getuser}/>)} />
    <Route exact path='/confirmationenvoidirect/:id/:nom' 
   render={(props) => (isstaf?null:<ConfirmationEnvoiDirect {...props}  getuser={getuser}/>)} />
    <Route exact path='/confirmationenvoicode/:id/:nom' 
   render={(props) => (isstaf?null:<ConfirmationEnvoiCode {...props}  getuser={getuser}/>)} />
    <Route exact path='/envoiviacode' render={(props) =>
     (isstaf?null:<EnvoiViaCode  {...props}  getuser={getuser} />)} /> 
    <Route exact path='/successenvoi/:id/:nature'  render={(props) =>(islog?<SuccesEnvoiDirect />:null)}/>
    <Route exact path='/successenvoicode/:id/:nature'  render={(props) =>(islog?<SuccessEnvoiCode/>:null)}/>
    <Route exact path='/recu/:id/:transaction'  render={(props) =>  (islog?<Recu />:null)}/>
    <Route exact path='/inscription' render={(props)=>(islog?<Redirect to='/accueil'/>:<Inscription {...props}/>)}/>
    <Route exact path='/resetpassword' render={(props)=>(islog?<Redirect to='/accueil'/>:<ResetPassword {...props}/>)} />
    <Route exact path='/successviacode/:id/:nature'  render={(props) =>(isstaf?<RecuEnvoiCode {...props}  />:null)}/>
    <Route exact path='/compteprofessionnel'  render={(props) =>(isstaf?<CompteProfessionnel {...props}  />:null)}/>
    <Route exact path='/confirmationdepot/:id/:nature' 
   render={(props) => (isstaf?<ConfirmationDepot {...props}  />:null)} />
    <Route exact path='/confirmationretrait/:id/:nature' 
     render={(props) => (isstaf?<ConfirmationRetrait {...props}  />:null)} />
    <Route exact path='/confirmationenvoiviacodeworker/:id/:nature' 
     render={(props) => (isstaf?<ConfirmationEnvoiCodeStaf {...props}  />:null)} />
    <Route exact path='/confirmationretraitcode/:id/:nature' 
     render={(props) => (isstaf?<ConfirmationRetraitCode {...props}  />:null)} />
    <Route exact path='/confirmationactivation/:id/:nom' 
   render={(props) => (isstaf?<ConfirmationActivation {...props}  />:null)} />
    <Route exact path='/confirmationdesactivation/:id/:nom' 
   render={(props) => (user.bureaucrate?<ConfirmationDesactivation {...props}  />:null)} />
    <Route exact path='/confirmationreactivation/:id/:nom' 
   render={(props) => (user.bureaucrate?<ConfirmationReactivation {...props}  />:null)} />
   <Route exact path='/confirmationnouvelstaff/:id/:nom' 
   render={(props) => (user.manager?<ConfirmationNouvelMembre {...props}  />:null)} />
    <Route exact path='/successdepot/:id/:nature' render={(props) =>(isstaf?<RecuDepot {...props}  />:<Officiel/>)}/>
    <Route exact path='/historique' render={(props) =>(isstaf?<HistoriqueStaff {...props}  />:<Officiel/>)}/>
    <Route exact path='/successretrait/:id/:nature'  render={(props) =>(isstaf?<RecuRetrait {...props}   />:null)}/>
    <Route exact path='/successretraitcode/:id/:nature'  render={(props) =>(isstaf?<RecuRetraitCode {...props}   />:<Officiel/>)}/>
    <Route exact path='/nostarifs' component={Tarif}/>
    <Route exact path='/carriere' component={Carriere}/>
    <Route exact path='/pourprofessionnel' component={Professionnel}/>
    <Route exact path='/serviceclient' component={ServiceClient}/>
    <Route exact path='/gaalguimoneypay' component={GaalguiPay}/>
    <Route exact path='/nospointdacces' component={PointAcces}/>
    <Route component={client}/>
    </Switch> 
    </BrowserRouter>
   :<IonLoading
      cssClass='my-custom-class'
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={'Chargement...'}
      duration={5000}
     />}
  

    </div>
  );
}

export default App;



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
import HistoryPayement from './pages/HistoryPayement';
import HistoryDepot from './pages/HistoryDepot';
import HistoryRetrait from './pages/HistoryRetrait';
import HistoryReception from './pages/HistoryReception';
import HistoryEnvoiDirect from './pages/HistoryEnvoiDirect';
import HistoryEnvoiCode from './pages/HistoryEnvoiCode';
import Parametres from './pages/Parametres';
import PointAcces from './pages/PointAcces';
import ResetPassword from './pages/ResetPassword';
import HistoriqueStaff from './Staf/HistoriqueStaff';
import './component/style.css'
import Officiel from './pages/Officiel';
import CompteProfessionnel from './Staf/CompteProfessionnel';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import {IonToast,IonAlert} from '@ionic/react'
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




Modal.setAppElement('#root')
toast.configure()

function App() {
 // const socket = new W3CWebSocket( 'ws://localhost:8000/ws/merde/')
  const  [islog, setislog] = useState(false)
  const  [isstaf, setisstaf] = useState(false)
  const  [user, setuser] = useState([])
  const [alerti, setalerti] = useState(false);
  const  [data, setdata] = useState()
  const  [load, setload] = useState(false)

    const getuser=()=>{
      axiosInstance
      .get('client/getuser/')
      .then(res=>{
        setuser(res.data)
        setload(true)
        
      })}

  useEffect(()=>{
    getuser()
  },[])
  
 
  /*useEffect(()=>{
    axiosInstance
    .get('client/getuser/')
    .then(res=>{
     // console.log(res.data)
      if(res.data.length!==null){
      const socket = new W3CWebSocket( 'ws://localhost:8000/ws/'+res.data.channel+'/')
      socket.onopen=()=>{
        console.log('client logged')
        
         }
       socket.onmessage=message=>{
          const data=JSON.parse(message.data)
          setdata(data);
          setalerti(true)
         
         
          
       }
      socket.onclose=()=>{
         console.log('socket close')}
      }
    })
  },[])*/
  
  useEffect(()=>{
    axiosInstance
    .get('client/islog/')
    .then(res=>{
      setislog(res.data)
    })
  })
 /* useEffect(()=>{
   axiosInstance
   .put('staff/payement/payer/')
   .then(res=>{
   // console.log(res.data)
   })
  },[])*/
  useEffect(()=>{
    axiosInstance
    .get('staff/isstaff/')
    .then(res=>{
      setisstaf(res.data)
    })
  })
 
  
  const client=()=>(
    <Fragment>
     
         <Fragment>
       <Nav islog={islog} isstaf={isstaf} user={user} load={load} />
    <SideBar islog={islog} getuser={getuser} user={user} load={load} isstaf={isstaf}/>
    <div>
  <Route exact path='/accueil' render={(props) =>(islog?<Accueil {...props}  />:<Officiel/>)}/>
  <Route exact path='/transaction' render={(props) =>(islog?<Historique {...props} isstaf={isstaf}  />:null)}/>
  <Route exact path='/envoyer' render={(props) => (islog ?<EnvoiDirect {...props} isstaf={isstaf}  getuser={getuser}/> :null)} />
  <Route exact path='/envoiviacode' render={(props) => (islog ?<EnvoiViaCode  {...props} isstaf={isstaf}  getuser={getuser} /> :null)} /> 
   <Route exact path='/historiquepayement' render={(props) => (islog ?<HistoryPayement  {...props} isstaf={isstaf} /> :null)} /> 
   <Route exact path='/historiquedepot' render={(props) => (islog ?<HistoryDepot  {...props} isstaf={isstaf} /> :null)} /> 
   <Route exact path='/historiqueretrait' render={(props) => (islog ?<HistoryRetrait  {...props} isstaf={isstaf}  /> :null)} /> 
   <Route exact path='/historiquereception' render={(props) => (islog ?<HistoryReception  {...props} isstaf={isstaf} /> :null)} /> 
   <Route exact path='/historiquedenvoidirect' render={(props) => (islog ?<HistoryEnvoiDirect  {...props} isstaf={isstaf} /> :null)} /> 
   <Route exact path='/historiquedenvoiviacode' render={(props) => (islog ?<HistoryEnvoiCode  {...props} isstaf={isstaf} /> :null)} />
   <Route exact path='/parametre' render={(props) => (islog ?<Parametres  {...props} isstaf={isstaf} /> :null)} />  
  <Footer islog={islog} isstaf={isstaf}/>
  </div></Fragment>
  </Fragment>

  )
  return (
    <div>
     
    <BrowserRouter>
    <Switch>
    
    <Route exact path='/connexion'  render={(props) => <Connexion  {...props} staf={isstaf} />}/>
    <Route exact path='/'  render={(props) => <Officiel  {...props} staf={isstaf} />}/>
    <Route exact path='/successenvoi/:id'  render={(props) =>(islog?<SuccesEnvoiDirect />:null)}/>
    <Route exact path='/successenvoicode/:id'  render={(props) =>(islog?<SuccessEnvoiCode/>:null)}/>
    <Route exact path='/recu/:id'  render={(props) =>  (islog?<Recu />:null)}/>
    <Route exact path='/inscription' component={Inscription} />
    <Route exact path='/resetpassword' component={ResetPassword} />
    <Route exact path='/viacode'  render={(props) =>(isstaf?<EnvoiCode {...props}  />:<Officiel/>)}/>
    <Route exact path='/recuviacode/:id'  render={(props) =>(isstaf?<RecuEnvoiCode {...props}  />:<Officiel/>)}/>
    <Route exact path='/compteprofessionnel'  render={(props) =>(isstaf?<CompteProfessionnel {...props}  />:<Officiel/>)}/>
    <Route exact path='/depot' render={(props) =>(isstaf?<Depot {...props}  />:<Officiel/>)}/>
    <Route exact path='/recudepot/:id' render={(props) =>(isstaf?<RecuDepot {...props}  />:<Officiel/>)}/>
    <Route exact path='/historique' render={(props) =>(isstaf?<HistoriqueStaff {...props}  />:<Officiel/>)}/>
    <Route exact path='/retrait'  render={(props) =>(isstaf?<Retrait {...props}   />:null)}/>
    <Route exact path='/recuretrait/:id'  render={(props) =>(isstaf?<RecuRetrait {...props}   />:null)}/>
    <Route exact path='/retraitparcode'  render={(props) =>(isstaf?<RetraitParCode {...props}   />:<Officiel/>)}/>
    <Route exact path='/recuretraitparcode/:id'  render={(props) =>(isstaf?<RecuRetraitCode {...props}   />:<Officiel/>)}/>
    <Route exact path='/nostarifs' component={Tarif}/>
    <Route exact path='/carriere' component={Carriere}/>
    <Route exact path='/pourprofessionnel' component={Professionnel}/>
    <Route exact path='/serviceclient' component={ServiceClient}/>
    <Route exact path='/gaalguimoneypay' component={GaalguiPay}/>
    <Route exact path='/nospointdacces' component={PointAcces}/>
    <Route component={client}/>

    </Switch> 
    </BrowserRouter>
    <IonToast
          position='top'
          isOpen={alerti}
          onDidDismiss={() => setalerti(false)}
          cssClass='my-custom-class'
          message={data}
          buttons={['ok']}
          style={{color:'green'}}
        />

    </div>
  );
}

export default App;



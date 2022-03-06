import React,{Fragment, useEffect,useState} from 'react'
import axiosInstance from '../axios';
import { IonLoading} from '@ionic/react'
import Navigation from '../Staf/Navigation';
import './style.css'
import Navi from './mobile/Navi'
import NavDestok from './desktop/NavDestok';

//Navigation de la page personnelle
function Nav(props) {
  const isstaf=props.isstaf
  const islog=props.islog
  const user=props.user
  const load=props.load
  const [showLoading, setShowLoading] = useState(true);
  
  
  
    return (
      <Fragment>
        {isstaf? null:
      <Fragment>
        {islog?
      <Fragment>  
      <div> 
        {load?
      <Fragment>  
        <NavDestok user={user}/> 
       <Navi user={user}/>
     </Fragment>
      :<IonLoading
      cssClass='my-custom-class'
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={'Chargement...'}
      duration={5000}
     />}
      </div>
      </Fragment>:null}
      </Fragment>}
      </Fragment>
      
    )
}

export default Nav



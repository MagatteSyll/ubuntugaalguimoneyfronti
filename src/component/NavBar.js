import React,{Fragment, useEffect,useState} from 'react'
import axiosInstance from '../axios';
import { IonLoading} from '@ionic/react'
import Navigation from '../Staf/Navigation';
import './style.css'
import NavMobile from './mobile/NavMobile'
import NavDesk from './desktop/NavDesk';
import {useHistory} from 'react-router-dom'

//Navigation de la page personnelle
function Nav({isstaf,islog,user}) {
  const history=useHistory()
  
    const handleparametre=()=>{
        history.push('/parametre')
    }
 
    const handlehome=()=>{
        history.push('/')
    }

   const deconnexion=()=>{
    localStorage.removeItem('__jmdf__');
    localStorage.removeItem('__jvmdf__');
    axiosInstance.defaults.headers['Authorization'] = null;
    window.location.reload()
    history.push('/');

   }
    
  
  
    return (
      <Fragment>
       {isstaf? <Navigation user={user}/>:
        <div>
         <NavDesk user={user} handleparametre={handleparametre} handlehome={handlehome} islog={islog}
          deconnexion={deconnexion}/>
         <NavMobile user={user}
          deconnexion={deconnexion}
           handleparametre={handleparametre} handlehome={handlehome} islog={islog}/>
        </div>}
        
      </Fragment>
      
    );
}

export default Nav



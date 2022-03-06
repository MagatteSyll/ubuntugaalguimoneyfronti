import React,{Fragment,useEffect,useState} from 'react'
import axiosInstance from '../axios';
import AccueilStaff from '../Staf/AccueilStaff';
import 'react-toastify/dist/ReactToastify.css';
import {IonLoading} from '@ionic/react'
import '../component/style.css'
import Home from '../component/Home';
import '../component/style.css'


function Accueil(props) {
    const  [isstaf, setisstaf] = useState(false)
    const  [isload, setisload] = useState(false)
    const [showLoading, setShowLoading] = useState(true);
  
    useEffect(()=>{
        axiosInstance
        .get('staff/isstaff/')
        .then(res=>{
         // console.log(res.data)
          setisstaf(res.data)
          setisload(true)
        })
      })
   
    return ( 
        
        <Fragment>
        {isload?
        <Fragment>
            {isstaf? <AccueilStaff />:
            <Home/> }
        </Fragment>:<IonLoading
      cssClass='my-custom-class'
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={'Chargement...'}
      duration={5000}
     />}
        </Fragment>
    )
}

export default Accueil

import NavOfficiel from './NavOfficiel'
import Segment from './Segment'
import HomeOfficiel from './HomeOfficiel'
import {Fragment,useEffect,useState} from 'react'
import {IonLoading} from '@ionic/react'
import axiosInstance from '../../axios'



//Page officiel
function ElementOfficiel({islog}) {
 const [pub,setpub]=useState([])
 const [load,setload]=useState(false)
 const [showLoading, setShowLoading] = useState(true);

  useEffect(()=>{
    axiosInstance
  .get('client/getpub')
  .then(res=>{
     setpub(res.data)
     setload(true)
     //console.log(res.data)
  })
 
 },[])
  
   
   
    return (

      <Fragment>
      {load?
      <div>
      <NavOfficiel/>
       <Segment/>
       <HomeOfficiel pub={pub}/> 
       </div>:<IonLoading
      cssClass='my-custom-class'
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={'Chargement...'}
      duration={5000}
     />}
  
      </Fragment>
    )
}

export default ElementOfficiel

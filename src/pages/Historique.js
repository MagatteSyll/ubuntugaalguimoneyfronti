import React,{useState,useEffect, Fragment} from 'react'
import axiosInstance from '../axios';
import { IonLoading} from '@ionic/react'
import MenuHistory from '../component/MenuHistory';


//Toute l historique
function Historique(props) {
    const  isstaf=props.isstaf
    const [messages,setmessages]=useState([])
    const [showLoading, setShowLoading] = useState(true);
    const  [load, setload] = useState(false)
  

    useEffect(()=>{
      
    axiosInstance
    .get('client/message/')
  .then(res=>{
  
       setmessages(res.data)
      setload(true)
      
        }) 
    },[])

   
   
    return (
        <Fragment>
          {isstaf? null:
          <Fragment>
            {load?
            <Fragment>
          <MenuHistory messages={messages}/>
          </Fragment>
          :<IonLoading
      cssClass='my-custom-class'
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={'Chargement...'}
      duration={5000}/>}
      </Fragment>}
      </Fragment>
        
   
   
        
    )
}

export default Historique

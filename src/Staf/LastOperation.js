import React,{useState,useEffect, Fragment} from 'react'
import axiosInstance from '../axios'
import {IonCard, IonItem, IonLoading, IonText} from '@ionic/react'
import {Link} from 'react-router-dom'

function LastOperation() {
    const  [message, setmessage] = useState([])
    const  [load, setload] = useState(false)
    const [showLoading, setShowLoading] = useState(true);

    useEffect(()=>{
        axiosInstance
        .get('staff/dernierestransaction/')
        .then((res=>{
           setmessage(res.data)
            setload(true)
            
        })) 
    },[])
    return (
        <Fragment>
        <div>
            {load?
            <div>
            {message.length>0?
            <div>
            <h3 style={{textAlign:'center'}}>Dernières operations</h3>
            <div  style={{width:'75%',textAlign:'center'}}>
           {message.map(m=>
          <IonCard  key={m.id}  >
             <IonText>{m.notification},{new Date(m.created).toLocaleDateString()}</IonText></IonCard>
         )}</div>
        <button className="w3-button w3-black" type="submit">
         <Link style={{textAlign:'center',color:'white',textDecoration:'none'}} to='/historique' >
             Voir l historique </Link></button>
         </div>:null}
         </div>:<IonLoading
        cssClass='my-custom-class'
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Chargement...'}
        duration={5000}
       />}
        </div>
        </Fragment>
    )
}

export default LastOperation

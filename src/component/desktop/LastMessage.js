import React,{useState,useEffect, Fragment} from 'react'
import axiosInstance from '../../axios'
import { IonItem, IonLoading, IonText} from '@ionic/react'
import {Link} from 'react-router-dom'



//Les dernieres  transactions
function LastMessage() {
    const  [message, setmessage] = useState([])
    const  [load, setload] = useState(false)
    const [showLoading, setShowLoading] = useState(true);

    useEffect(()=>{
        axiosInstance
        .get('client/lastmessage/')
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
            <h3 style={{textAlign:'center'}}>Dernières Transactions</h3>
            <div  style={{width:'75%',textAlign:'center'}}>
           {message.map(m=>
          <IonItem  key={m.id}  >
              <Link to={`/recu/${m.id}`} style={{textDecoration:'none',color:'black'}} ><IonText>{m.message},{new Date(m.created).toLocaleDateString()}
              </IonText></Link></IonItem>
         )}</div>
        <button className="w3-button w3-black" type="submit">
         <Link style={{textAlign:'center',color:'white',textDecoration:'none'}} to='/transaction' >
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

export default LastMessage

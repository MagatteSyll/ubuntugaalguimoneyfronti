import React,{useState,Fragment} from 'react'
import axiosInstance from '../axios'
import {IonModal,IonGrid,IonCol,IonRow,IonCard} from '@ionic/react'
import { useHistory } from 'react-router-dom';
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './Navigation';
import '../component/style.css'
import FootStaf from './FootStaf';

function Depot() {
    const  [data, setdata] = useState({
        phone:'',
        sum:''
    })
    const history=useHistory()
    const  [receveur, setreceveur] = useState([])
    const  [modal, setmodal] = useState(false)
    const handletel=e=>{
        setdata({...data,phone:e.target.value})
    }
    
    const Erreur = () => toast.error("Erreur!Verifiez les credentiels",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });
    const novalidnan = () => toast.error("Entrez un nombre valide",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });

    const handlesum=e=>{
        //console.log(e.target.value)
        if(e.target.value===isNaN||e.target.value <=0){
          novalidnan()
          return;}
        setdata({...data,sum:e.target.value})
    }
    const handlesubmit=e=>{
        e.preventDefault()
        let formdata=new FormData()
        formdata.append('phone',data.phone)
        axiosInstance
        .post('staff/getclient/',formdata)
        .then(res=>{
           // console.log(res.data)
            setreceveur(res.data)
            setmodal(true)
        })
        .catch(()=>{
          Erreur()
        })
    }
   
    const Confirmation=e=>{
        e.preventDefault()
        let formdata=new FormData()
        formdata.append('phone',data.phone)
        formdata.append('somme',data.sum)
        axiosInstance
        .post('staff/depot/',formdata)
        .then(res=>{
            //console.log(res.data)
            setmodal(false)
            history.push(`/recudepot/${res.data.id}`)
           

        })
    }
    const handleclose=()=>{
        setmodal(false)
      }


    return (
        <div>
        <Navigation/>

     <form class="w3-container" onSubmit={handlesubmit}>
        <div className="w3-section">  
         <p className='pcentre'> <label><b>Numero de telephone du depositaire</b></label></p>
          <input className="w3-input w3-border" type="tel" defaultValue='+221' onChange={handletel} required />
          <p className='pcentre'> <label><b>Somme</b></label></p>
          <input className="w3-input w3-border" type="number" onChange={handlesum} required />
          <p className='pcentre'>  
          <button className="w3-button w3-round-xxlarge w3-green w3-margin" type="submit">Deposer</button></p>    
        </div>
      </form>
      <IonModal isOpen={modal} cssClass='my-custom-class'
       swipeToClose={true}
       onDidDismiss={() => setmodal(false)}>

    <div className="w3-section w3-center">
           <IonGrid>
             <IonRow>
               <IonCol size='8'>
               <IonCard>
                logo
              </IonCard>
               </IonCol>
               <IonCol size='5'>
               <p>Nature de l operation</p>
               <p><b>Depot </b></p>
               </IonCol>
               <IonCol size='5'>
               <p>Depositaire</p>
               <p><b> {receveur.prenom} {receveur.nom}  </b></p>
               </IonCol>
               <IonCol size='5'>
               <p>Montant</p>
               <p><b> {data.sum} CFA </b></p>
               </IonCol>
             </IonRow>
           </IonGrid>
            <p className='centerbtn'>
            <button className="w3-button w3-white w3-border w3-border-green w3-round-large" onClick={Confirmation}>Confirmer</button>
            <button className="w3-button w3-white w3-border w3-border-red w3-round-large w3-margin" onClick={handleclose}>Annuler</button>
            </p>
            </div>   
   
     </IonModal> 
       <FootStaf/>     
        </div>
    )
}

export default Depot

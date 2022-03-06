import React,{Fragment, useState} from 'react'
import { useHistory } from 'react-router-dom';
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { IonText,IonModal,IonIcon, IonGrid, IonRow, IonCol, IonCard } from '@ionic/react';
import axiosInstance from '../../axios';
import  {arrowBackOutline}  from 'ionicons/icons'
import { Link } from 'react-router-dom';

function EnvoiDirectDesk(props) {
  const getuser=()=>{props.getuser()}
    const  [data, setdata] = useState({
        phone:'',
        sum:''
    })
    const history=useHistory()
    const  [receveur, setreceveur] = useState([])
    const  [modal, setmodal] = useState(false)
    const  [frais, setfrais] = useState()


  
    const handletel=e=>{
        setdata({...data,phone:e.target.value})
    }

    const handlesum=e=>{
        //console.log(e.target.value)
        if(e.target.value===isNaN||e.target.value <=0){
          novalidnan()
          return;

        }
        setdata({...data,sum:e.target.value})
     
    }
    const Erreur = () => toast.error("Erreur!Transaction impossible",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });
    const novalidnan = () => toast.error("Entrez un nombre valide",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });
    const handlesubmit=e=>{
        e.preventDefault()
        let formdata=new FormData()
        formdata.append('phone',data.phone)
        formdata.append('somme',data.sum)
        axiosInstance
        .post('client/verifenvoi/',formdata)
        .then(res=>{
            //console.log(res.data.receveur)
            setreceveur(res.data.receveur)
            setfrais(res.data.frais)
            setmodal(true)
        })
        .catch(()=>{
          Erreur()
        }) 
      }
    
    const notify = () => toast.success("Envoi effectue avec succes!",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });
    
    const Confirmation=e=>{
        let formdata=new FormData()
        formdata.append('phone_receveur',data.phone)
        formdata.append('somme',data.sum)
        axiosInstance
        .post('client/envoi/',formdata)
        .then(res=>{
            //console.log(res.data)
            setmodal(false)
            getuser()
            history.push(`/successenvoi/${res.data.id}`)
           })
       }

    const handleclose=()=>{
        setmodal(false)
      }

    return (
      <Fragment>
         <div className="desk">
         </div>
        <div className='content'>
        <form className="w3-container" onSubmit={handlesubmit}>
        <div className="w3-section">
         <p className='centerbtn'> <label><b>Numero de telephone du beneficiaire</b></label></p>
        <input className="w3-input w3-border" type="text" placeholder="+221" onChange={handletel} required />
        <p className='centerbtn'> <label ><b>Somme</b></label></p>
        <input className="w3-input w3-border"  type='number' onChange={handlesum} required  
         pattern="[0-9]*" inputmode="numeric" placeholder="250.50"/>
         <p className='centerbtn'>
       <button className="w3-button w3-round-xxlarge w3-green w3-center w3-margin" type="submit">Envoyer</button> 
       </p> 
        </div>
      </form>
        
      <IonModal
        isOpen={modal}
        swipeToClose={true}
        // presentingElement={router || undefined}
         onDidDismiss={() => setmodal(false)}
        >
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
               <p><b>Envoi direct </b></p>

               </IonCol>
               <IonCol size='5'>
               <p>Beneficiaire</p>
               <p><b> {receveur.prenom} {receveur.nom} </b></p>
               </IonCol>
               <IonCol size='5'>
               <p>Montant de l envoi</p>
               <p><b> {data.sum} CFA </b></p>
               </IonCol>
               <IonCol size='5'>
               <p>Commission</p>
               <p><b> {frais} CFA </b></p>
               </IonCol>
             </IonRow>
           </IonGrid>
            <p className='centerbtn'>
            <button className="w3-button w3-white w3-border w3-border-green w3-round-large" onClick={Confirmation}>Confirmer</button>
            <button className="w3-button w3-white w3-border w3-border-red w3-round-large w3-margin" onClick={handleclose}>Annuler</button>
            </p>
            </div>    

     </IonModal>
    
     
                    
        </div>
        </Fragment>
    )
}

export default EnvoiDirectDesk



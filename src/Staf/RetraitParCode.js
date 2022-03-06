import React,{useState,Fragment} from 'react'
import axiosInstance from '../axios'
import Modal from 'react-modal'
import { useHistory } from 'react-router-dom';
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './Navigation';
import '../component/style.css'
import FootStaf from './FootStaf';
import {IonModal,IonGrid,IonCol,IonRow,IonCard} from '@ionic/react'

function RetraitParCode() {
    const  [data, setdata] = useState({
        code:''
    })
    const history=useHistory()
    const  [receveur, setreceveur] = useState([])
    const  [modal, setmodal] = useState(false)
   
    const Erreur = () => toast.error("Erreur!Verifiez le code entré",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });
    const novalidnan = () => toast.error("Entrez un code valide",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });
    
    const handlecode=e=>{
        //console.log(e.target.value)
        if(e.target.value===isNaN||e.target.value <=0){
          novalidnan()
          return;}
        setdata({...data,code:e.target.value})
    }
    const handlesubmit=e=>{
        e.preventDefault()
        let formdata=new FormData()
        formdata.append('code',data.code)
        axiosInstance
        .post('staff/verificationcode/',formdata)
        .then(res=>{
           // console.log(res.data)
            setreceveur(res.data)
            setmodal(true)
        })
        .catch(()=>{
          Erreur()
          return;
        })
      } 

    const Confirmation=e=>{
        e.preventDefault()
        let formdata=new FormData()
        formdata.append('id',receveur.id)
        axiosInstance
        .post('staff/finalretraitcode/',formdata)
        .then(res=>{
            //console.log(res.data)
            setmodal(false)
            history.push(`/recuretraitparcode/${res.data.id}`)  
           })

        .catch(()=>{
          Erreur()
          return;
        })
      }
    
   
    return (
        <div>
     <Navigation/>
<form className="w3-container" onSubmit={handlesubmit}>
        <div className="w3-section">
        
         <p className='pcentre'> <label  className="w3-container" ><b>code de transfert</b></label></p>
          <input className="w3-input w3-border" type="number" onChange={handlecode} required />
          <p className='pcentre'>  
          <button className="w3-button w3-round-xxlarge w3-green w3-margin" type="submit">Verifier</button></p>  
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
               <p><b>Retrait via code </b></p>
               </IonCol>
               <IonCol size='5'>
               <p>Beneficiaire</p>
               <p><b> {receveur.Nom_complet_du_receveur}</b></p>
               </IonCol>
               <IonCol size='5'>
               <p>Montant</p>
               <p><b> {receveur.somme} CFA </b></p>
               </IonCol>
             </IonRow>
           </IonGrid>
            <p className='centerbtn'>
            <button className="w3-button w3-white w3-border w3-border-green w3-round-large"
             onClick={Confirmation}>Confirmer </button>
            </p>
            </div>   
   
     </IonModal> 

       <FootStaf/>     
        </div>
    )
}

export default RetraitParCode


import React,{useState,Fragment} from 'react'
import axiosInstance from '../axios'
import { useHistory } from 'react-router-dom';
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './Navigation';
import FootStaf from './FootStaf';
import {IonModal,IonGrid,IonCol,IonRow,IonCard} from '@ionic/react'
import Select from 'react-select';



const options = [
  { value: 'non inclus', label: 'non inclus' },
  { value: 'inclus', label: 'inclus' },];
function EnvoiCode() {

    const  [data, setdata] = useState({
        phone:'',
        somme:'',
        envoyeur:'',
        receveur:''
    })
    const  [newsomme, setnewsomme] = useState()
   const  [choix, setchoix] = useState({})
   
    const history=useHistory()
    const  [modal, setmodal] = useState(false)
    const  [total, settotal] = useState()
    const  [frais, setfrais] = useState()
    const Erreur = () => toast.error("Erreur!Verifiez les credentiels",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });
    const novalidnan = () => toast.error("Entrez un nombre valide",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });
    
    const handlevoyeur=e=>{
        setdata({...data,envoyeur:e.target.value})
    }
    const handlereceveur=e=>{
        setdata({...data,receveur:e.target.value})
    }
    const handletel=e=>{
        setdata({...data,phone:e.target.value})
    }
    const handlesomme=e=>{
      if(e.target.value===isNaN||e.target.value <=0){
        novalidnan()
        return;}
        setdata({...data,somme:e.target.value})
        
    }
    const handleselect=e=>{
       setchoix({value:e})
      
    }
    


    const handlecode=e=>{
        e.preventDefault()
        if(choix.value.label==='non inclus'){
        axiosInstance
        .post('staff/commissioncode/',{'somme':data.somme})
        .then(res=>{
          setfrais(res.data.frais)
          setmodal(true)
          setnewsomme(data.somme)
          settotal(res.data.total)
        })
      }
      if(choix.value.label==='inclus'){
        axiosInstance
        .post('staff/commissionincluse/',{'somme':data.somme})
        .then(res=>{
          setfrais(res.data.frais)
          setnewsomme(res.data.somme)
          setmodal(true)
          settotal(res.data.total)
        })

      }

         }

     const handleclose =()=>{
            setmodal(false)}


    const Confirmation=e=>{
        e.preventDefault()
        let formdata=new FormData()
        formdata.append('phone_beneficiaire',data.phone)
        formdata.append('somme',newsomme)
        formdata.append('frais',frais)
        formdata.append('Nom_complet_du_receveur',data.receveur)
        formdata.append('Nom_complet_de_l_envoyeur',data.envoyeur)
        axiosInstance
        .post('staff/viacode/',formdata)
        .then(res=>{
            //console.log(res.data)
            setmodal(false)
           // console.log(res.data)
           history.push(`/recuviacode/${res.data.id}`)
           })
          
          .catch(()=>{
            Erreur()
            setmodal(false)
            return;
          })
        }

   
    return (
        <Fragment>
         <Navigation/>
        <div>
        <form class="w3-container" onSubmit={handlecode}>
        <div class="w3-section">
        <p style={{textAlign:'center'}}> <label><b>Nom complet du beneficiaire</b></label></p>
          <input class="w3-input w3-border w3-margin-bottom" type="text" onChange={handlereceveur} required/>
          <p style={{textAlign:'center'}}> <label><b>Nom complet du client </b></label></p>
          <input class="w3-input w3-border w3-margin-bottom" type="text" onChange={handlevoyeur} required/>
          <p style={{textAlign:'center'}}> <label><b>Numero telephone du beneficiaire</b></label></p>
          <input class="w3-input w3-border" type="tel" defaultValue='+221' onChange={handletel} required />
          <p style={{textAlign:'center'}}> <label><b>Somme</b></label></p>
          <input class="w3-input w3-border" type="number" onChange={handlesomme} required /><br/><br/>
          <p className='pcentre' >  
          <Select
            value={choix.value}
            onChange={handleselect}
            options={options}
            placeholder='commission'
            required
          />
         
          </p>
          <p className='pcentre'> 
          <button className="w3-button w3-round-xxlarge w3-green w3-margin" type="submit">Valider</button></p>
          
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
               <p><b>Envoi via code </b></p>
               </IonCol>
               <IonCol size='5'>
               <p>Client</p>
               <p><b> {data.envoyeur} </b></p>
               </IonCol>
               <IonCol size='5'>
               <p>Beneficiaire</p>
               <p><b> {data.receveur}  </b></p>
               </IonCol>
               <IonCol size='5'>
               <p>Montant à envoyer</p>
               <p><b> {newsomme} CFA </b></p>
               </IonCol>
               <IonCol size='5'>
               <p>Commission</p>
               <p><b> {frais} CFA </b></p>
               </IonCol>
               <IonCol size='5'>
               <p>Montant total de la transaction

                 
               </p>
               <p><b> {total} CFA </b></p>
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
        <FootStaf/>
        </Fragment>
    )
}

export default EnvoiCode

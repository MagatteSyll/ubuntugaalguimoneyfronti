import {useState,useEffect} from 'react'
import axiosInstance from '../axios'
import {IonGrid,IonRow,IonCol} from '@ionic/react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useHistory} from 'react-router-dom'
import {toast } from 'react-toastify'




function ConfirmationReactivation(props){
	 let id=props.match.params.id
   let nom=props.match.params.nom
   const [user,setuser]=useState([])
   const [load,setload]=useState(false)
   const history=useHistory()
   

  useEffect(()=>{
     axiosInstance
      .post('staff/getpolzareactivation/',{id:id})
      .then(res=>{
      	setuser(res.data)
      	setload(true)
      })
   },[])
  const erreur = () => toast.error("Erreur!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
   const notify = () => toast.success("Compte bien reactive!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });

 
 const confirmation=e=>{
 	axiosInstance
   .post('staff/confirmationreactivationclient/',{id:id})
   .then(res=>{
     history.push('/accueil')
     notify()
  })
  .catch(()=>{
  	erreur()
  	return;
  })
 } 
const annulation=()=>{
 history.push('/reactivationcompte')
}


return(
  <div>
  {load && nom===user.prenom+""+user.nom?
   	<div>
   <p className='m-4'>
  <button onClick={annulation} className='btndrop'><ArrowBackIcon className='iconsocial'/></button></p>
   <div className=' container mt-3'>
  <h2 className='centerbtn'>Donnees du client</h2>
   <IonGrid>
  <IonRow>
 <IonCol size='6' className='centerbtn'>
 <h3> Nom complet</h3>
 <p><strong>{user.prenom} {user.nom}</strong></p>
 </IonCol>
 <IonCol size='6' className='centerbtn'>
 <h3>Numero de telephone</h3>
 <p><strong>{user.phone}</strong></p>
 </IonCol>
  <IonCol size='12' className='centerbtn'>
  <button className='w3-button w3-green w3-margin' onClick={confirmation}>Confimer la reactivation </button>
 </IonCol>
 </IonRow>
 </IonGrid>
  </div>
  </div>
  :null}
  </div>
)
}

export default ConfirmationReactivation;
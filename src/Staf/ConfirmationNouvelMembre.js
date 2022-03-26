import {useState,useEffect} from 'react'
import axiosInstance from '../axios'
import {IonGrid,IonRow,IonCol} from '@ionic/react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useHistory} from 'react-router-dom'
import {toast } from 'react-toastify'



function ConfirmationNouvelMembre(props){
   let id=props.match.params.id
   let nom=props.match.params.nom
   const [user,setuser]=useState([])
   const [load,setload]=useState(false)
   const history=useHistory()
   const [data,setdata]=useState({
   	status:"",
   })
  
  useEffect(()=>{
     axiosInstance
      .post('staff/getpolzanouvelmembre/',{id:id})
      .then(res=>{
      	setuser(res.data)
      	setload(true)
      })
   },[])
  const erreur = () => toast.error("Erreur!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
   const notify = () => toast.success("Nouveau membre bien ajouté!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });

 const handledata=e=>{
      //console.log(e.target.value)
      setdata({
        ...data,[e.target.name]: e.target.value.trim()
      })
   }
 const confirmation=e=>{
  	e.preventDefault()
  	if(data.status===""){
       erreur()
       return;
  	}
  if(data.status==='1'){
  	 axiosInstance
  .post('staff/confirmationstaffsimple/',{id:id})
  .then(res=>{
     history.push('/accueil')
     notify()
  })
  .catch(()=>{
  	erreur()
  	return;
  })

  }
 if(data.status==='2'){
     axiosInstance
  .post('staff/confirmationstaffbureau/',{id:id})
  .then(res=>{
     history.push('/accueil')
     notify()
  })
  .catch(()=>{
  	erreur()
  	return;
  })
 }
 
 } 
const annulation=()=>{
 history.push('/nouvelmembrestaff')
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
 <IonCol size='12'>
 <form onSubmit={confirmation}>
 <IonRow>
  <IonCol size='12' className='centerbtn' >
  <h3>Choisir le status du nouveau membre </h3>
   <p>
     <select
    onChange={handledata}
    name='status'
   required>
   <option  value="" disabled selected >Status</option>
   <option value='1' >Staff simple</option>
   <option value='2'>Bureaucrate</option>
   </select>
   </p>
  </IonCol>
  <IonCol size='12' className='centerbtn'>
  <button className='w3-button w3-green w3-margin' type='submit'>Confimer</button>
 </IonCol>
 </IonRow>
 </form>
 </IonCol>
 </IonRow>
 </IonGrid>
  </div>
  </div>
  :null}
  </div>
);
}


export default ConfirmationNouvelMembre
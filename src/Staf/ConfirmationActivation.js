import {useState,useEffect} from 'react'
import axiosInstance from '../axios'
import {IonGrid,IonRow,IonCol} from '@ionic/react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useHistory} from 'react-router-dom'
import {toast } from 'react-toastify'


function ConfirmationActivation(props){
   let id=props.match.params.id
   let nom=props.match.params.nom
   const [user,setuser]=useState([])
   const [load,setload]=useState(false)
   const history=useHistory()
   const [data,setdata]=useState({
   	nature:"",
   	numero:"",
   })
  
  useEffect(()=>{
     axiosInstance
      .post('staff/getpolza/',{id:id})
      .then(res=>{
      	setuser(res.data)
      	setload(true)
      })
   },[])
  const erreur = () => toast.error("Erreur!Entrez des donnees valides!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
   const notify = () => toast.success("Compte bien active!",{
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
  	if(data.nature===""||data.numero===""||data.nature.match(/^ *$/)!== null||data.numero.length<8){
       erreur()
       return;
  	}
  axiosInstance
  .post('staff/activationduclient/',{id:id,nature:data.nature,numero:data.numero})
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
 history.push('/activationcompteclient')
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
 {user.document_verif?
 <IonCol size='12'>
 <h2 className='centerbtn'>client deja actif</h2>
 </IonCol>:
 <IonCol size='12'>
 <form onSubmit={confirmation}>
 <IonRow>
  <IonCol size='6'  >
   <p className='centerbtn'><label>Nature du document</label></p>
   <p className='centerbtn'>
    <select
    onChange={handledata}
    name='nature'
    required
     >
   <option  value="" disabled selected >Nature du document d identification</option>
   <option value='passport' >Passport</option>
   <option value='piece d identite'>Piece d identite</option>
   </select>
   </p>
  </IonCol>
  <IonCol size='6'>
  <p className='centerbtn'><label>Numero du document</label></p>
  <input class="w3-input w3-border" name='numero'
    type="number" onChange={handledata} required />
   
 </IonCol>
  <IonCol size='12' className='centerbtn'>
  <button className='w3-button w3-green w3-margin' type='submit'>Soumettre</button>
 </IonCol>
 </IonRow>
 </form>
 </IonCol>}
 </IonRow>
 </IonGrid>

  </div>
   	</div>

   	:null}
	</div>

);
}

export default ConfirmationActivation;
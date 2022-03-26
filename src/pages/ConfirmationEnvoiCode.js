import {useState,useEffect} from 'react'
import axiosInstance from '../axios'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link,useHistory} from 'react-router-dom'
import {IonGrid,IonRow,IonCol} from '@ionic/react'



function ConfirmationEnvoiCode(props){
	let id=props.match.params.id
	const getuser=props.getuser
	const [transaction,setransaction]=useState([])
    const [load,setload]=useState(false)
    const history=useHistory()

  useEffect(()=>{
      getransation()
    },[])
    
    const getransation=()=>{
    	axiosInstance
    	.post('client/getransactioncode/',{id:id})
    	.then(res=>{
    		setransaction(res.data)
        setload(true)
    	})
    }
 const confirmation=()=>{
  axiosInstance
  .put('client/envoyercode/envoyerviacodedirectement/',{id:id})
  .then(res=>{
  	getuser()
     history.push(`/successenvoicode/${res.data.id}/${res.data.nature}`)
     //console.log(res.data)
  })
 } 
const annulation=()=>{
  axiosInstance
  .put('client/envoyerdirect/annulationenvoi/',{id:id})
  .then(()=>{
    history.push('/envoyer')
  })
}

return(
  <div>
   {load?
  <>
<p className='m-4'><button onClick={annulation} className='btndrop'><ArrowBackIcon className='iconsocial'/></button></p>
 <div className=' container mt-3'>
  <h2 className='centerbtn'>Confirmation de la transaction</h2>
  <IonGrid>
  <IonRow>
 <IonCol size='6' className='centerbtn'>
 <h3> Nature de la transaction</h3>
 <p>{transaction.nature_transaction}</p>
 </IonCol>
 <IonCol size='6' className='centerbtn'>
 <h3> Beneficiaire</h3>
 <p>{transaction.nom_complet_destinataire}</p>
 </IonCol>
  <IonCol size='6' className='centerbtn'>
 <h3>Numero de telephone du beneficiaire</h3>
 <p>{transaction.phone_destinataire}</p>
 </IonCol>
  <IonCol size='6' className='centerbtn' >
   <h3> Montant a envoyer</h3>
 <p>{transaction.somme} CFA</p>
 </IonCol>
  <IonCol size='6' className='centerbtn'>
   <h3>Commission</h3>
 <p>{transaction.commission} CFA</p>
 </IonCol>
  <IonCol size='12' className='centerbtn'>
  <button className='w3-button w3-green w3-margin' onClick={confirmation}>Confirmer</button>
 </IonCol>
  </IonRow>
  </IonGrid>
  </div>
  
  </>:null}
  </div>
)
}


export default ConfirmationEnvoiCode;
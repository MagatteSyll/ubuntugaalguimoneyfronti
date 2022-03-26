import {useState,useEffect} from 'react'
import axiosInstance from '../axios'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link,useHistory} from 'react-router-dom'
import {IonGrid,IonRow,IonCol} from '@ionic/react'


function ConfirmationEnvoiDirect(props){
    let id=props.match.params.id
    const [transaction,setransaction]=useState([])
    const [load,setload]=useState(false)
    const history=useHistory()
    const getuser=props.getuser



    useEffect(()=>{
      getransation()
    },[])
    const getransation=()=>{
    	axiosInstance
    	.post('client/getransaction/',{id:id})
    	.then(res=>{
    		setransaction(res.data)
        setload(true)
    	})
    }
 const confirmation=()=>{
  axiosInstance
  .put('client/envoyerdirect/envoyerdirectement/',{id:id})
  .then(res=>{
    getuser()
     history.push(`/successenvoi/${res.data.id}/${res.data.nature}`)
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
 <p>{transaction.transaction.nature_transaction}</p>
 </IonCol>
 <IonCol size='6' className='centerbtn'>
 <h3> Beneficiaire</h3>
 <p>{transaction.receveur.prenom} {transaction.receveur.nom}</p>
 </IonCol>
  <IonCol size='6' className='centerbtn' >
   <h3> Montant a envoyer</h3>
 <p>{transaction.transaction.somme} CFA</p>
 </IonCol>
  <IonCol size='6' className='centerbtn'>
   <h3>Commission</h3>
 <p>{transaction.transaction.commission} CFA</p>
 </IonCol>
  <IonCol size='12' className='centerbtn'>
  <button className='w3-button w3-green w3-margin' onClick={confirmation}>Confirmer</button>
 </IonCol>
  </IonRow>
  </IonGrid>
  </div>
  </>:null}
  </div>
 );
}

export default ConfirmationEnvoiDirect;
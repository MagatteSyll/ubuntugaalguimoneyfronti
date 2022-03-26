import {useState,useEffect} from 'react'
import axiosInstance from '../axios'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useHistory} from 'react-router-dom'
import {IonGrid,IonRow,IonCol} from '@ionic/react'



function ConfirmationRetrait(props){
	let id=props.match.params.id
	let nature=props.match.params.nature
	const [transaction,setransaction]=useState([])
   const [load,setload]=useState(false)
   const history=useHistory()

	useEffect(()=>{
      axiosInstance
      .post('staff/gettransaction/',{id:id})
      .then(res=>{
      	setransaction(res.data)
      	setload(true)
      })
	},[])

const annulation=()=>{
 history.push('/retrait')
}
 const confirmation=()=>{
  axiosInstance
  .put('staff/lestransactions/retirer/',{id:id})
  .then(res=>{
     history.push(`/successretrait/${res.data.id}/${res.data.nature}`)
  })
 } 


return(
  <div>
  {load && transaction.nature_transaction===nature?
  <div>
   <p className='m-4'>
  <button onClick={annulation} className='btndrop'><ArrowBackIcon className='iconsocial'/></button></p>
   <div className=' container mt-3'>
  <h2 className='centerbtn'>Confirmation de la transaction</h2>
   <IonGrid>
  <IonRow>
 <IonCol size='6' className='centerbtn'>
 <h3> Nature de la transaction</h3>
 <p>{transaction.nature_transaction}</p>
 </IonCol>
 <IonCol size='6' className='centerbtn'>
 <h3>Client</h3>
 <p>{transaction.user.prenom} {transaction.user.nom}</p>
 </IonCol>
  <IonCol size='6' className='centerbtn' >
   <h3> Montant a retirer </h3>
 <p>{transaction.somme} CFA</p>
 </IonCol>
  <IonCol size='12' className='centerbtn'>
  <button className='w3-button w3-green w3-margin' onClick={confirmation}>Confirmer</button>
 </IonCol>
 </IonRow>
 </IonGrid>

  </div>
  </div>
  :null}
  </div>

);
}


export default ConfirmationRetrait;
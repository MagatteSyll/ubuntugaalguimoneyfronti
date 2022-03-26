import {IonGrid,IonRow,IonCol,IonCard} from '@ionic/react'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import {useHistory} from 'react-router-dom'



function NavOfficiel({islog}){
  const history=useHistory()

  const handlecompte=()=>{
  	if(islog){
  		history.push('/accueil')
  	}
  	history.push('/connexion')
  }

return(
  
  <div className='navoff'>
  <IonGrid>
  <IonRow>
  <IonCol size='4'>
   <IonCard>
   logo
   </IonCard>
  </IonCol>
  <IonCol size='4'>
 <button className='btndrop' title='compte' onClick={handlecompte}> <PersonPinIcon className='iconsocial'/>
 </button>
  </IonCol>
  </IonRow>
  </IonGrid>
  </div>

)
}

export default NavOfficiel;
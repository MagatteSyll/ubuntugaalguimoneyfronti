import { IonText,IonModal,IonIcon, IonGrid, IonRow, IonCol, IonCard } from '@ionic/react';
import  {arrowBackOutline}  from 'ionicons/icons'


function EnvoiDirectDesk({handlesubmit,handledata}) {

    return (
    <div className="desk">
    <IonGrid>
    <IonRow>
    <IonCol size='10' className="container">
    <form  onSubmit={handlesubmit}>
    <div className="w3-section">
    <p className='centerbtn'> <label><b>Numero de telephone du beneficiaire</b></label></p>
    <input className="w3-input w3-border" type="text" placeholder="+221" onChange={handledata} 
    defaultValue='+221' name='phone'
    required />
    <p className='centerbtn'> <label ><b>Somme</b></label></p>
   <input className="w3-input w3-border"  type='number' onChange={handledata} required  
    pattern="[0-9]*" inputmode="numeric"
     placeholder="250.50"
     name='sum'/>
    <p className='centerbtn'>
    <button className="w3-button w3-round-xxlarge w3-green w3-center w3-margin" type="submit">Envoyer</button> 
    </p> 
    </div>
    </form>
    </IonCol>
    </IonRow>
    </IonGrid>
    </div>
       
    )
}

export default EnvoiDirectDesk



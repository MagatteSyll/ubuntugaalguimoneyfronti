import { IonApp, IonButton, IonCol, IonGrid, IonInput, IonLabel,
    IonToast, IonRow,IonAlert,IonIcon } from '@ionic/react'
import React,{useState,useEffect, Fragment,useRef} from 'react'
import { useHistory } from 'react-router-dom';
import axiosInstance from '../../axios';
import  {arrowBackOutline}  from 'ionicons/icons'
import { Link } from 'react-router-dom';


const  Envoyerdirect =() =>{
    const [showAlert1, setShowAlert1] = useState(false);
    const [showAlert2, setShowAlert2] = useState(false);
    const  [receveur, setreceveur] = useState([])
    const form = useRef(null)
     const [alert, setalert] = useState(false)
    const  [direct, setdirect] = useState([])
    const  [data, setdata] = useState({
        phone:'',
        sum:''
    })

    const handledata=e=>{
        setdata({
            ...data,[e.target.name]:e.target.value.trim()
        })
    }
    
    const handlesubmit=e=>{
        e.preventDefault()
        let formdata=new FormData()
        formdata.append('phone',data.phone)
        formdata.append('somme',data.sum)
        axiosInstance
        .post('client/verifenvoi/',formdata)
        .then(res=>{
           // console.log(res.data)
            setreceveur(res.data)
            setShowAlert1(true)
        })
        .catch(()=>{
         setalert(true)
        })
      }
    
    const confirmation=e=>{
        
        let formdata=new FormData()
        formdata.append('phone_receveur',data.phone)
        formdata.append('somme',data.sum)
        axiosInstance
        .post('client/envoi/',formdata)
        .then(res=>{
            setdirect(res.data)
           // window.location.reload()
           form.current.reset()
           setShowAlert2(true) 
         
              
        })
        .catch(()=>{
            setalert(true)
           })
       }

    return (
        <div className='mobile'>
        <Link to='/accueil'> <IonIcon icon={arrowBackOutline} style={{zoom:3.0}}/></Link>
       <form onSubmit={handlesubmit} ref={form} >
       <IonGrid>
           <IonRow>
               <IonCol size='12' className='ion-text-center ion-padding'>
                <IonLabel>Numero de telephone du beneficiaire</IonLabel>
               </IonCol>
               <IonCol size='12' className='ion-text-center ion-padding'>
              <IonInput type='tel' placeholder='+221' name='phone' onChange={handledata} required />
              </IonCol>
             <IonCol size='12' className='ion-text-center ion-padding'>
             <IonLabel>Somme</IonLabel>
             </IonCol>
              <IonCol size='12' className='ion-text-center ion-padding'>
              <IonInput type='number' placeholder='1000' name='sum'  onChange={handledata} required />
              </IonCol>
              <IonCol size='12' className='ion-text-center ion-padding'>
                <IonButton  type='submit'>Envoyer</IonButton>
            </IonCol>
           </IonRow>
       </IonGrid>    
      </form> 
      <IonAlert
      isOpen={showAlert1}
      onDidDismiss={() => setShowAlert1(false)}
      cssClass='my-custom-class'
      header={'Confirmation'}
      message={'Envoi de ' +" " + data.sum + " " +'CFA a ' + " " + receveur.prenom + " " +  receveur.nom }
      buttons={[
        {
          text: 'annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: blah => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'confirmer',
          handler: confirmation     
      }]}
    />
 <IonAlert
    isOpen={showAlert2}
      onDidDismiss={() => setShowAlert2(false)}
      cssClass='my-custom-class'
      header={'Envoi reussi'}
      message={'Transaction effectuée avec succes'}
       buttons={['OK']}
    />
    <IonAlert
    isOpen={alert}
      onDidDismiss={() => setalert(false)}
      cssClass='my-custom-class'
      header={'Erreur'}
      message={'Echec de transaction!Verifiez les credentiels entrés'}
       buttons={['OK']}
    />
    </div>
    )
}

export default Envoyerdirect

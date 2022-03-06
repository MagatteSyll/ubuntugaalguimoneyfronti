import { IonApp, IonButton, IonCol, IonGrid, IonInput, IonLabel,
    IonToast, IonRow,IonAlert,IonIcon } from '@ionic/react'
import React,{useState,useEffect, Fragment} from 'react'
import { useHistory } from 'react-router-dom';
import axiosInstance from '../../axios';
import  {arrowBackOutline}  from 'ionicons/icons'
import { Link } from 'react-router-dom';
import '../style.css'



const  Envoyercode =()=>{
    const  [user, setuser] = useState([])
    const [showAlert1, setShowAlert1] = useState(false);
    const [showAlert2, setShowAlert2] = useState(false);
    const  [code, setcode] = useState([])
    const history=useHistory()
    const  [data, setdata] = useState ({
        nom:'',
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
         setShowAlert1(true)
    }
    const confirmation=()=>{
       
        let formdata=new FormData()
        formdata.append('phone_beneficiaire',data.phone)
        formdata.append('somme',data.sum)
        formdata.append('Nom_complet_du_receveur',data.nom)
        axiosInstance
        .post('client/envoicodedirect/',formdata)
        .then(res=>{
           // console.log(res.data)
           setcode(res.data)
          // history.push('/')
           setShowAlert2(true)

        
        })}
   


    return (
        <div className="mobile">
         <Link to='/accueil'> <IonIcon icon={arrowBackOutline} style={{zoom:3.0}}/></Link>
           <form onSubmit={handlesubmit}>
           <IonGrid>
               <IonRow>
               <IonCol size='12' className='ion-text-center ion-padding'>
                    <IonLabel>Nom complet du beneficiaire</IonLabel>
                   </IonCol>
                   <IonCol size='12' className='ion-text-center ion-padding'>
                   <IonInput type='text'  name='nom' placeholder='Fama Diop' onChange={handledata} required/>
                   </IonCol>
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
          message={'envoi de ' + data.sum + " " + 'CFA a' + " " + data.nom}
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
          message={'Envoi de 100 CFA a ' +" " + code.Nom_complet_du_receveur + " " + 'code de transfert:'+ " " + code.code + " " + 
          'disponible dans n importe quel point d accés. '}
           buttons={['OK']}
        />
        </div>
    )
}

export default Envoyercode

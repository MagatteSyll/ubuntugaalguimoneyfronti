import { IonCard, IonCardContent, IonContent, IonSlide, IonSlides,
    IonCardTitle,IonCardHeader,IonCardSubtitle, 
    IonList, IonItem, IonText, IonIcon, IonGrid, IonLoading,IonRow, IonCol} from '@ionic/react'
import { locationOutline,chevronForwardOutline,personOutline } from 'ionicons/icons'
import React, { Fragment,useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../../axios'



const  Menu =()=>{
    const  [user, setuser] = useState([])
    const [showLoading, setShowLoading] = useState(true);
    const  [loaded, setloaded] = useState(false)
    const slideOpts = {
        slidesPerView: 1.5,
        initialSlide: 0,
        speed: 400,  };

     useEffect(()=>{
            axiosInstance
            .get('client/getuser/')
            .then((res)=>{
              setuser(res.data)
              setloaded(true)
            })
          },[])
    return (
        <Fragment>
            {loaded?
            <IonSlides   options={slideOpts}>
                <IonSlide>
                    <IonCard>
                    <IonCardTitle>Compte</IonCardTitle>
                    <IonCardContent>
                    <IonItem>
                           <IonText> <IonIcon icon={personOutline}/>{user.prenom} {user.nom}</IonText>
                       </IonItem>
                       <IonItem >
                           <IonText>Solde actuel:<IonText style={{color:'red'}} >{user.solde}</IonText> CFA</IonText>
                       </IonItem>  
                
                    </IonCardContent>    
                    </IonCard>
                </IonSlide>
                <IonSlide>
                    <IonCard>
                        <IonCardTitle>transactions </IonCardTitle>
                        <IonCardContent> 
                        <IonItem className='ion-padding'>
                         <IonText style={{color:'blue'}}><Link to='/envoyer' style={{textDecoration:'none',color:'inherit'}}>Envoi direct <IonIcon icon={chevronForwardOutline} slot="start" style={{marginTop:8}} /></Link></IonText>
                        </IonItem>
                         <IonItem className='ion-padding'>
                        <IonText style={{color:'magenta'}}><Link  style={{textDecoration:'none',color:'inherit'}} to='/envoiviacode'>Envoi avec code <IonIcon icon={chevronForwardOutline} /> </Link></IonText>
                         </IonItem>
                        </IonCardContent>
                    </IonCard>
                </IonSlide>
                <IonSlide>
                <IonCard>
                       <IonCardTitle>
                           Taux d échange en CFA
                       </IonCardTitle>
                       <IonCardContent>
                           <p>
                            <IonText>Euro  <b> 550 </b></IonText>
                           </p>
                           <p>
                         <IonText>USD <b> 450</b></IonText>
                         </p>
                         <p>
                        <IonText>CAD <b> 445</b> </IonText>
                        </p>
                           </IonCardContent>
                           </IonCard>
                   </IonSlide>

            </IonSlides>:<IonLoading
    cssClass='my-custom-class'
    isOpen={showLoading}
    onDidDismiss={() => setShowLoading(false)}
    message={'Chargement...'}
    duration={5000}
   />}
        </Fragment>
    )
}

export default Menu


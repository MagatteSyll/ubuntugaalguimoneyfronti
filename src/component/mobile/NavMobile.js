import React, { Fragment,useState,useEffect } from 'react'
import { IonGrid,IonRow,IonCol,IonCard,IonSegment,IonIcon,IonText,IonItem
,IonCardContent,IonCardTitle } from '@ionic/react'
import {personCircleOutline,personOutline,chevronForwardOutline} from 'ionicons/icons'
import { Link } from 'react-router-dom'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HomeIcon from '@mui/icons-material/Home';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Swiper, SwiperSlide } from 'swiper/react';


//Navmobile
const  NavMobile =({user,handleparametre,handlehome,handlepop,deconnexion})=>{
   
    return(
    <div className='mobile'>
        <IonGrid>
        <IonRow >
        <IonCol size='8'>
        <IonCard>Logo</IonCard>
        </IonCol>
        <IonCol size='3'>
         <button className='btndrop btnnav  w3-right'><IonIcon icon={personCircleOutline}/>
         {user.prenom}</button>
        </IonCol>
        <IonCol size='1'>
         <button className='btndrop btnnav  w3-right' title='deconnexion' onClick={ deconnexion}> <ArrowForwardIcon/></button>
        </IonCol>
        <IonCol size='12'>
        <IonSegment scrollable className='segmentnavmobile'>
        <button onClick={handlehome} className="btndrop btnnav">
        <HomeIcon/> GaalguiMoney</button> 
        <button  className="btndrop btnnav ">
        <LocalOfferIcon/>Nouveautes</button>
        <button className=" btndrop btnnav " > <MonetizationOnIcon/>GaalguiMoneyBusiness</button> 
        </IonSegment>
        </IonCol>
        <IonCol size='12'>
     <Swiper
      spaceBetween={5}
      slidesPerView={1.2}
      >
      <SwiperSlide>
       <IonCard >
     <IonCardTitle>Compte</IonCardTitle>
      <IonCardContent>
       <IonItem >
       <IonText>Solde actuel <strong>{user.solde}</strong> CFA</IonText>
       </IonItem>  
       </IonCardContent>
       </IonCard>
      </SwiperSlide>
      <SwiperSlide>
       <IonCard>
        <IonCardTitle>transactions </IonCardTitle>
        <IonCardContent> 
         <IonItem className='ion-padding'>
         <IonText ><Link to='/envoyer' className='link'>Envoi direct <ChevronRightIcon/> 
         </Link></IonText>
          </IonItem>
         <IonItem className='ion-padding'>
        <IonText ><Link className='link'  to='/envoiviacode'> Envoi avec code
         <ChevronRightIcon/></Link></IonText>
         </IonItem>
         </IonCardContent>
     </IonCard>
      </SwiperSlide>
      <SwiperSlide>
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
      </SwiperSlide>
    </Swiper>
        </IonCol>
        </IonRow>
    </IonGrid>

    </div>
    )
}

export default NavMobile

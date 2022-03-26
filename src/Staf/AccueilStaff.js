import React,{Fragment} from 'react'
import LastOperation from './LastOperation'
import { Swiper, SwiperSlide } from 'swiper/react';
import { IonCard, IonCardContent, IonCardTitle, IonContent, IonItem, IonSlide, IonSlides, 
IonText,IonLoading, IonCardHeader, IonIcon } from '@ionic/react'
import {waterOutline,sunnyOutline,schoolOutline,} from 'ionicons/icons'



function AccueilStaff(props) {

    return (
        <div className='staff'>
           <CourAction/>
           <GaalguiPay/>
           <LastOperation/>
           
        </div>
    )
}


function GaalguiPay() {
    return (
        <div>  
        <h4 className='centerbtn'> GaalguiPay</h4>
           <Swiper
           spaceBetween={50}
           slidesPerView={6}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
           >
         <SwiperSlide>
             <IonCard>
                 <IonCardHeader style={{color:'red'}}>SENELEC</IonCardHeader>
                 <IonCardContent><IonIcon icon={sunnyOutline} style={{zoom:'2'}}/></IonCardContent>
             </IonCard>
         </SwiperSlide>
        <SwiperSlide>
             <IonCard>
                 <IonCardHeader style={{color:'green'}}>ETUDES</IonCardHeader>
                 <IonCardContent><IonIcon icon={schoolOutline} style={{zoom:'2'}}/></IonCardContent>
             </IonCard>
        </SwiperSlide>
        <SwiperSlide>
             <IonCard>
                 <IonCardHeader style={{color:'blue'}}>SDE</IonCardHeader>
                 <IonCardContent><IonIcon icon={waterOutline} style={{zoom:'2'}}/></IonCardContent>
             </IonCard>
        </SwiperSlide>
         <SwiperSlide>
             <IonCard>
                 <IonCardHeader style={{color:'blue'}}>quelque chose</IonCardHeader>
                 <IonCardContent><IonIcon icon={waterOutline} style={{zoom:'2'}}/></IonCardContent>
             </IonCard>
        </SwiperSlide>
         <SwiperSlide>
             <IonCard>
                 <IonCardHeader style={{color:'blue'}}>quelque chose</IonCardHeader>
                 <IonCardContent><IonIcon icon={waterOutline} style={{zoom:'2'}}/></IonCardContent>
             </IonCard>
        </SwiperSlide>
         <SwiperSlide>
             <IonCard>
                 <IonCardHeader style={{color:'blue'}}>quelque chose</IonCardHeader>
                 <IonCardContent><IonIcon icon={waterOutline} style={{zoom:'2'}}/></IonCardContent>
             </IonCard>
        </SwiperSlide>
        <SwiperSlide>
             <IonCard>
                 <IonCardHeader style={{color:'blue'}}>quelque chose</IonCardHeader>
                 <IonCardContent><IonIcon icon={waterOutline} style={{zoom:'2'}}/></IonCardContent>
             </IonCard>
        </SwiperSlide>
        <SwiperSlide>
             <IonCard>
                 <IonCardHeader style={{color:'blue'}}>quelque chose</IonCardHeader>
                 <IonCardContent><IonIcon icon={waterOutline} style={{zoom:'2'}}/></IonCardContent>
             </IonCard>
        </SwiperSlide>
         <SwiperSlide>
             <IonCard>
                 <IonCardHeader style={{color:'blue'}}>quelque chose</IonCardHeader>
                 <IonCardContent><IonIcon icon={waterOutline} style={{zoom:'2'}}/></IonCardContent>
             </IonCard>
         </SwiperSlide>
         </Swiper>  
        </div>
    )
}

const  CourAction=()=>{
return (
        
       <div className='container '>
            <IonCard className='divaciton'>
            <IonCardTitle >
            <p className='centerbtn'>Taux d échange en CFA</p>
                 </IonCardTitle>
            <IonCardContent>
             <IonItem className='centerbtn'>
            <p className='centerbtn'> <IonText>Euro: <strong>
              558.6384</strong></IonText></p>
            </IonItem>
             <IonItem>
            <p className='centerbtn'> <IonText>USD: 
         <strong>655.957</strong></IonText></p>
         </IonItem>
         <IonItem>
         <p className='centerbtn'> <IonText>CAD: 
         <strong> 441.469</strong></IonText></p>
          </IonItem>
        </IonCardContent>
        </IonCard>
              
       </div>
      
    )
}


export default AccueilStaff

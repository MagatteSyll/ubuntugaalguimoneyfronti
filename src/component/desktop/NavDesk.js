import React,{useState} from 'react'
import {  useHistory } from 'react-router-dom';
import {IonIcon,IonGrid,IonCol,IonRow,IonCard} from '@ionic/react'
import {homeOutline} from 'ionicons/icons'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HomeIcon from '@mui/icons-material/Home';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



//Navigation sur desktop
function NavDesk({user,handleparametre,handlehome,deconnexion}) {
   

    return (
        <div className='desk'>
        <IonGrid>
        <IonRow>
        <IonCol size='4'>
        <IonCard>Logo
        </IonCard>
        </IonCol>
        <IonCol size='7'>
        <button onClick={handlehome} className="btndrop btnnav">
        <HomeIcon/> GaalguiMoney</button> 
        <button  className="btndrop btnnav ">
        <LocalOfferIcon/>Nouveautes</button>
        <button className=" btndrop btnnav " > <MonetizationOnIcon/>GaalguiMoneyBusiness</button> 
        </IonCol>
        <IonCol size='1'>
         <button className='btndrop btnnav  w3-right' title='deconnexion' onClick={ deconnexion}> <ArrowForwardIcon/></button>
        </IonCol>
        </IonRow>
        </IonGrid> 
       
        </div>

    )
}

export default NavDesk



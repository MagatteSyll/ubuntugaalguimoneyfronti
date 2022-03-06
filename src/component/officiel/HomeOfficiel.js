import { IonGrid,IonRow,IonCol } from '@ionic/react'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ice from '../img/ice.png'
import iceco from '../img/iceco.jpg'
import fin from  '../img/fin.jpg'
import Image from 'react-bootstrap/Image'
import Nouveautes from './Nouveautes';
import CarouselPub from './CarouselPub';

//page accueil  officielle 


function HomeOfficiel() {
    return (
        <div>
        
        <CarouselPub/>
         <Nouveautes/>
        </div>
    )
}

export default HomeOfficiel

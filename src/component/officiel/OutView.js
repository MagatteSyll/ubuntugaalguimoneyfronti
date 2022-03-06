import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../style.css'
import ice from '../img/ice.png'
import iceco from '../img/iceco.jpg'
import fin from  '../img/fin.jpg'
import { IonCard, IonItem } from '@ionic/react';
import Image from 'react-bootstrap/Image'


//Carousel de la page officielle
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
function OutView() {
    
    return (
        <div className='content'>
        hello
      
        </div>
    )
}

export default OutView

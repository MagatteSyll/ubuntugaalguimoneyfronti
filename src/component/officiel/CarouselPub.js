import { IonGrid,IonRow,IonCol } from '@ionic/react'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ice from '../img/ice.png'
import iceco from '../img/iceco.jpg'
import fin from  '../img/fin.jpg'
import Image from 'react-bootstrap/Image'
import '../style.css'

//Les pubs tape a l oeil de la page officielle


const responsive = {
    superLargeDesktop: {
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

function CarouselPub() {
  const pic=[iceco,ice,fin]
    return (
        <div>
             <IonGrid> 
             <IonRow>
                 <IonCol size='12'>
                 <Carousel
          responsive={responsive}
          containerClass="carousel-container" 
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          transitionDuration={500} >
            {pic.map(p=>
           <Image  src={p} alt=""  className='imgcarousel' key={p}/>
            )}
         
       </Carousel>
        </IonCol>
       </IonRow>
         </IonGrid>   
        </div>
    )
}

export default CarouselPub

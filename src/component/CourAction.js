import { IonCard, IonCardContent, IonCardTitle, IonContent, IonItem, IonSlide, IonSlides, IonText,IonLoading } from '@ionic/react'
import React, { Fragment,useState,useEffect } from 'react'


//Les taux d echange
const  CourAction=()=>{
    const [showLoading, setShowLoading] = useState(true);
    const  [eur, seteur] = useState()
    const  [dollar, setdollar] = useState()
    const  [cn, setcn] = useState()
    const [efetch, setefetch] = useState(false)
    const [ufetch, setufetch] = useState(false)
    const [dfetch, setdfetch] = useState(false)
    const slideOpts = {
        slidesPerView: 1.5,
        initialSlide: 0,
        speed: 400,   
      };
     /* useEffect(()=>{

        axios
        .get('https://v6.exchangerate-api.com/v6/15403bdb2e69ef5276aa14c0/pair/EUR/XOF')
        .then((res)=>{
         // console.log(res.data)
          seteur(res.data.conversion_rate)
          setefetch(true)
        })
            },[])
    
     useEffect(()=>{

            axios
                .get('https://v6.exchangerate-api.com/v6/15403bdb2e69ef5276aa14c0/pair/USD/XOF')
                .then((res)=>{
                 // console.log(res.data)
                  setdollar(res.data.conversion_rate)
                  setufetch(true)
                })
                    },[])
         useEffect(()=>{

          axios
             .get('https://v6.exchangerate-api.com/v6/15403bdb2e69ef5276aa14c0/pair/CAD/XOF')
             .then((res)=>{
            // console.log(res.data)
             setcn(res.data.conversion_rate)
             setdfetch(true)
        })    },[])
      */


    return (
      <Fragment>
        
       <div>
            <IonCard className='ion-text-center'>
                  <IonCardTitle >
                           <p style={{textAlign:'center'}}>Taux d échange en CFA</p>
                 </IonCardTitle>
                       <IonCardContent>
                          { //{efetch?
                          }
                           <IonItem className='ion-text-center'>
                           <p style={{textAlign:'center'}}> <IonText>Euro: <IonText style={{color:'red'}}>
                             {eur} 558.6384</IonText></IonText></p>
                           </IonItem>
                           {/*:<IonLoading
                                cssClass='my-custom-class'
                                isOpen={showLoading}
                                onDidDismiss={() => setShowLoading(false)}
                                message={'Chargement...'}
                           duration={5000} />*/}
                        {//ufetch ?
}
                        <IonItem>
                        <p style={{textAlign:'center'}}> <IonText>USD: 
                          <IonText style={{color:'purple'}}>{dollar}655.957</IonText></IonText></p>
                         </IonItem>
                         {/*:<IonLoading
                        cssClass='my-custom-class'
                        isOpen={showLoading}
                        onDidDismiss={() => setShowLoading(false)}
                        message={'Chargement...'}
                        duration={5000}/>}
                         */}
                    {//dfetch?
}
                     <IonItem>
                     <p style={{textAlign:'center'}}> <IonText>CAD: 
                       <IonText style={{color:'magenta'}}>{cn} 441.469</IonText></IonText></p>
                    </IonItem>
                    {/*:<IonLoading
                    cssClass='my-custom-class'
                    isOpen={showLoading}
                    onDidDismiss={() => setShowLoading(false)}
                    message={'Chargement...'}
                    duration={5000}/>*/}
                </IonCardContent>
                   </IonCard>
              
       </div>
       </Fragment>
    )
}

export default CourAction

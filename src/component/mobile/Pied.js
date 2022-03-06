import { IonApp, IonCol, IonFooter, IonGrid, IonRow } from '@ionic/react'
import React from 'react'
import '../style.css'

const  Pied =() =>{
    return (
        <div className='mobile'>
       <IonFooter>
           <IonGrid>
               <IonRow className="ion-align-items-center">
                   <IonCol  size="12" className="ion-text-center">
                       <p>GaalguiMoney &reg; {new Date().getFullYear()}</p>
                   </IonCol>
               </IonRow>
           </IonGrid>
       </IonFooter>
       </div>
    )
}

export default Pied
import React, { Fragment,useState,useEffect } from 'react'
import { IonGrid,IonRow,IonCol,IonSearchbar,IonIcon,IonPopover,IonLoading } from '@ionic/react'
import { ellipsisHorizontalOutline, openOutline, settingsOutline,homeOutline } from 'ionicons/icons'
import { Link } from 'react-router-dom'
import '../style.css'
import { useHistory } from 'react-router'

//Navmobile
const  Navi =(props)=>{
   const history=useHistory()
   const  [pop, setpop] = useState(false)
   const user=props.user

    const handleparametre=()=>{
        history.push('/parametre')
    }
    const handlepop=()=>{
        setpop(true)
    }
    const handlehome=()=>{
        history.push('/')
    }
    return (
        <div className='mobile'>
        <IonGrid>
        <IonRow >
            <IonCol size='6'>
             <IonSearchbar
              placeholder='recherche'/>
            </IonCol>
            <IonCol size='2'>
                <Link style={{textDecoration:'none',color:'inherit'}} to='/accueil'>
                    <IonIcon icon={homeOutline} style={{zoom:2.5,marginTop:2}}/></Link>
            </IonCol>
            <IonCol size='2'>
                <button style={{background:'none',border:'none'}} onClick={handlepop}>
                <IonIcon icon={ellipsisHorizontalOutline} style={{zoom:2.5,marginTop:2}}/>
                </button>
                    
            </IonCol>
        </IonRow>
    </IonGrid>

    <IonPopover
        cssClass='my-custom-class'
        isOpen={pop}
        onDidDismiss={() => setpop(false)}
      >
        <IonGrid>
            <IonRow>
             <IonCol size='12'>
            <button style={{background:'none',border:'none',color:'magenta'}} onClick={handlehome}>
         <IonIcon icon={openOutline}/> GaalguiMoney
         </button>
        </IonCol>
        <IonCol size='12'>
        <button style={{background:'none',border:'none',color:'maroon'}} onClick={handleparametre}>
         <IonIcon icon={settingsOutline} />Parametres
         </button>
        </IonCol>
            </IonRow>
        </IonGrid>
        
      </IonPopover>
    </div>
    )
}

export default Navi

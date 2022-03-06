import React,{useState} from 'react'
import Box from '@material-ui/core/Box';
import {IonIcon, IonSegment, IonSegmentButton, IonText,IonLabel} from '@ionic/react'
import '../style.css'
import HistoryEnvoiDirectMobile from './HistoryEnvoiDirectMobile'
import HistoriquesGenerales from './HistoriquesGenerales'
import HistoryCodeMobile from './HistoryCodeMobile'
import HistoryPayementMobile from './HistoryPayementMobile'
import HistoryRetraitMobile from './HistoryRetraitMobile'
import HistoryDepotMobile from './HistoryDepotMobile'
import HistoriqueReceptionMobile from './HistoriqueReceptionMobile'


function MenuHistory(props) {
  const messages=props.messages
  const [ghisto, setghisto] = useState(true)
  const  [seg, setseg] = useState('ghistory')
  const [direct, setdirect] = useState(false)
  const [code, setcode] = useState(false)
  const [pay, setpay] = useState(false)
  const [retrait, setretrait] = useState(false)
  const [depot, setdepot] = useState(false)
  const [reception, setreception] = useState(false)
  


    const history=()=>{
      setghisto(true)
      setdirect(false)
      setcode(false)
      setpay(false)
      setretrait(false)
      setdepot(false)
      setreception(false)
      setseg('ghistory')
     
    } 
    const handleenvoidirect=()=>{
     setdirect(true)
     setghisto(false)
     setcode(false)
     setpay(false)
     setretrait(false)
     setdepot(false)
     setreception(false)
     setseg('directhistory')

    }
    const handlecode=()=>{
      setcode(true)
      setghisto(false)
      setdirect(false)
      setpay(false)
      setretrait(false)
      setdepot(false)
      setreception(false)
      setseg('codehistory')
    }
    const handlepayement=()=>{
      setpay(true)
      setghisto(false)
      setdirect(false)
      setcode(false)
      setretrait(false)
      setdepot(false)
      setreception(false)
      setseg('payementhistory')
    }
    const handleretrait=()=>{
      setretrait(true)
      setghisto(false)
      setdirect(false)
      setcode(false)
      setpay(false)
      setdepot(false)
      setreception(false)
      setseg('retraithistory')
    }
    const handledepot=()=>{
      setdepot(true)
      setghisto(false)
      setdirect(false)
      setcode(false)
      setpay(false)
      setretrait(false)
      setreception(false)
      setseg('depothistory')
    }
    const handlereception=()=>{
      setreception(true)
      setghisto(false)
      setdirect(false)
      setcode(false)
      setpay(false)
      setretrait(false)
      setdepot(false)
      setseg('receptionhistory')
    }
    return (
        <div className='mobile'>
       <IonSegment scrollable value={seg}  >
         <IonSegmentButton onClick={history}  value='ghistory' checked className='buttonmenu'>
         <IonLabel>Tout</IonLabel>
         </IonSegmentButton>
         <IonSegmentButton   onClick={handleenvoidirect} value='directhistory' className='buttonmenu'>     
         <IonLabel>Direct</IonLabel>
         </IonSegmentButton >
         <IonSegmentButton onClick={handlecode} value='codehistory' className='buttonmenu'>
         <IonLabel> Via code</IonLabel>
         </IonSegmentButton>
         <IonSegmentButton onClick={handlepayement} value='payementhistory' className='buttonmenu'>
         <IonLabel>Payement</IonLabel>
         </IonSegmentButton>
         <IonSegmentButton onClick={handleretrait} value='retraithistory' className='buttonmenu'>
         <IonLabel>Retrait</IonLabel>
    
         </IonSegmentButton>
         <IonSegmentButton onClick={handledepot} value='depothistory' className='buttonmenu'>
        
         <IonLabel>Depot</IonLabel>
       
         </IonSegmentButton>
         <IonSegmentButton onClick={handlereception} value='receptionhistory' className='buttonmenu'>
         
         <IonLabel>Reception</IonLabel>
      
         </IonSegmentButton>
        </IonSegment> 
        <div className='divhistory'>
        {ghisto?<HistoriquesGenerales messages={messages}/>:null}
        {direct?<HistoryEnvoiDirectMobile/>:null}
        {code?<HistoryCodeMobile/>:null}
        {pay?<HistoryPayementMobile/>:null}
        {retrait?<HistoryRetraitMobile/>:null}
        {depot?<HistoryDepotMobile/>:null}
        {reception?<HistoriqueReceptionMobile/>:null}
        </div>

        </div>
    )
}

export default MenuHistory

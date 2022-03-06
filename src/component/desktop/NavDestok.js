import React,{useState} from 'react'
import {  useHistory } from 'react-router-dom';
import {IonIcon} from '@ionic/react'
import {homeOutline} from 'ionicons/icons'
import '../style.css'



//Navigation sur desktop
function NavDestok(props) {
    const  [barnotif, setbarnotif] = useState(false)
    const user=props.user
    const history=useHistory()
    const notif=()=>{
       setbarnotif(!barnotif)
      }
      const home=()=>{
        history.push('/accueil')
      }

    return (
        <div className='desk'>
         <div className="w3-bar w3-black w3-border w3-xlarge">
        <button onClick={home} className="w3-bar-item w3-button ">
          <IonIcon icon={homeOutline} style={{color:'white',zoom:1}}/> GaalguiMoney</button> 
        <button className="w3-bar-item w3-button w3-right" >{user.prenom}</button> 
        </div> 
       
        </div>

    )
}

export default NavDestok



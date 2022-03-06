import {  IonButton, IonCol, IonGrid, IonCheckbox, IonInput, IonItem, IonLabel, IonRow } from '@ionic/react'
import React,{useState} from 'react'
import { useHistory } from 'react-router'
import axiosInstance from '../../axios'
import axios from 'axios'
import Pied from './Pied'
import { Link } from 'react-router-dom'
import CarouselPub from '../officiel/CarouselPub'

const  ConnexionMobile=()=> {
    const history= useHistory()
    const [formData, updateFormData] = useState({
        phone:'',
        password:''
    });
    const  [showpassword, setshowpassword] = useState(false)
 
	const handleChange = e => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit=e=> {
		e.preventDefault();
		//console.log(formData);

		axios
       // .post(`https://verysoongaalguimoney.herokuapp.com/api/client/login/`, {
            .post('http://127.0.0.1:8000/api/client/login/',{
				phone: formData.phone,
				password: formData.password,
			})
			.then((res) => {
				localStorage.setItem('__jdkm__', res.data.access);
				localStorage.setItem('__jvqm__', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('__jdkm__');
				//window.location.reload()
				history.push("/accueil")
                window.location.reload()
              // console.log(res.data)
			});};
	

    return (

       <div className='mobile'>    
         <h1 className='ion-text-center'>GaalguiMoney(logo)</h1>
            
            <form onSubmit={handleSubmit} className='ion-align-self-center ion-padding' >
            <IonGrid>
            <IonRow className="ion-align-items-center">
            <IonCol  size="12" className="ion-text-center">
             <IonLabel><p className='centerbtn'><b> Numero de telephone</b></p> </IonLabel> <br/>
            </IonCol>
            <IonCol  size="12" className="ion-text-center">
             <IonItem  >  
             <IonInput type='tel' name='phone' onIonChange={handleChange} placeholder='+221...' />
            </IonItem>
            </IonCol>
            <IonCol  size="12" className="ion-text-center">
             <IonLabel><p className='centerbtn'> <b> Mot de passe</b></p></IonLabel> <br/>
            </IonCol>
             <IonCol  size="12" className="ion-text-center">
             <IonItem  >
            <IonInput 
            type={showpassword?'text':'password'} 
             name='password' 
             onIonChange={handleChange} 
             placeholder=' ******'/>
             <IonCheckbox onIonChange={()=>setshowpassword(!showpassword)} /> 
             </IonItem>
             </IonCol> 
            <IonCol size="12" className="ion-text-center">
             <IonButton type='submit'  className="ion-margin-top" expand="block">Se connecter</IonButton>
             </IonCol>
             </IonRow>
            </IonGrid>
            </form>
            <IonGrid>
               <IonRow className="ion-align-items-center">
               <IonCol  size="12" className="ion-text-center">
                       <p className='centerbtn'><Link to='/resetpassword' style={{color:'red',textDecoration:'none'}}>Mot de passe oublié?</Link></p>
                   </IonCol>
                   <IonCol  size="12" className="ion-text-center">
                       <p>Vous n avez pas encore de compte?<Link to='/inscription' 
                       style={{color:'purple',textDecoration:'none'}}>Inscrivez vous</Link></p>
                   </IonCol>
               </IonRow>
           </IonGrid>
           <CarouselPub/>
            <Pied/>
       </div>
    )
}

export default ConnexionMobile


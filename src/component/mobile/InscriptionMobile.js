import { IonItem,IonButton,IonLabel,IonInput, IonGrid, IonRow ,IonCol, IonCheckbox, IonText,IonModal,
    IonIcon} from '@ionic/react'
import React,{useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import Pied from './Pied'
import { Link } from 'react-router-dom'
import '../style.css'
import CarouselPub from '../officiel/CarouselPub'
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@material-ui/core/TextField';
import {timeOutline} from 'ionicons/icons'
import axiosInstance from '../../axios'


const  InscriptionMobile = ()=> {

    const history=useHistory()
    const  [showpassword, setshowpassword] = useState(false)
    const  [modal, setmodal] = useState(false)
    const  [showpasswordcon, setshowpasswordcon] = useState(false)
    const initialFormData = Object.freeze({
		phone: '',
		prenom: '',
        nom:'',
		password: '',
        passwordcon:'',
        code:''
	});
    const [formData, updateFormData] = useState(initialFormData);

    const erreurmdp = () => toast.error("Erreur!Les mots de passe ne sont pas conformes ",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
      const erreurlg = () => toast.error("Erreur!Le mot de passe ne doit pas etre inferieur a 8 caracteres",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
	  const erreurvide = () => toast.error("Veuillez remplir tous les champs! ",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
	  const incorect = () => toast.error("Erreur!Numero de telephone invalide!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
	  const nocode = () => toast.error("Code de verification obligatoire!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });

	const handleChange = e => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

    const verif=e=>{
		e.preventDefault()
	if(formData.password !==formData.passwordcon){
		erreurmdp()
		
		return;
	}
    if(formData.password.length <8 ||formData.passwordcon.length<8){
		erreurlg()
		
		return;
	}
	if(formData.nom===""||formData.prenom===""||formData.phone===""
	||formData.password===""||formData.passwordcon===""){
		erreurvide()
		return;
	}

	else{
		let formdata=new FormData()
		formdata.append('phone',formData.phone)
		axios
		//.post('https://verysoongaalguimoney.herokuapp.com/api/client/verificationphoneinsription/',formdata)
		.post('http://127.0.0.1:8000/api/client/verificationphoneinsription/',formdata)
		.then(res=>{
		  updateFormData({
				...formData,id:res.data.id
			})
		   setmodal(true)  
		})
		.catch(()=>{
			incorect()
			return;
		  })
		
	}
		}
     const handlecode=e=>{
            updateFormData({
                ...formData,
                code: e.target.value
            });
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            //console.log(formData);
           if(formData.code!==""){
            axios
            //.post('https://gaalguimoneyback.herokuapp.com/api/client/registration/', {
              .post('http://127.0.0.1:8000/api/client/registration/',{
                phone: formData.phone,
                prenom: formData.prenom,
                nom: formData.nom,
                password:formData.password,
                id:formData.id,
                code:formData.code
            })
    
            .then((res) => {
                //history.push('/');
                //console.log(res);
                //console.log(res.data);
              axiosInstance
            .post(`client/login/`, {
                phone: formData.phone,
                password: formData.password,
            })
            .then((res) => {
                localStorage.setItem('__jdkm__', res.data.access);
                localStorage.setItem('__jvqm__', res.data.refresh);
                axiosInstance.defaults.headers['Authorization'] =
                    'JWT ' + localStorage.getItem('__jdkm__');
                // fetchuser()
                history.push("/accueil")
                window.location.reload()
                
                //console.log(res);
                //console.log(res.data);
            })
        
            }); }
             
           else{
            
            nocode()
            return;
                
            }
        };
        const handletime=()=>{
            setmodal(false)
        }


    return (
      <div className='mobile'>
           <h1 className='ion-text-center'>GaalguiMoney(logo)</h1>
            <form onSubmit={verif} className='ion-align-self-center ion-padding'>
                <IonGrid>
            <IonRow className="ion-align-items-center">
            <IonCol  size="12" className="ion-text-center">
             <IonLabel> <p className='centerbtn'><b> Numero de telephone valide <IonText className="asterix">*</IonText> </b></p></IonLabel> 
            </IonCol>
            <IonCol  size="12" className="ion-text-center">
            <IonItem  > 
            <IonInput type='tel' name='phone' onIonChange={handleChange} placeholder="+221..."
            required/>
            </IonItem>
            </IonCol>
            <IonCol  size="12" className="ion-text-center">
             <IonLabel> <p className='centerbtn'><b>Prenom<IonText className="asterix">*</IonText></b></p></IonLabel>
            </IonCol>
            <IonCol  size="12" className="ion-text-center">
            <IonItem  >
            <IonInput type='text' name='prenom' onIonChange={handleChange} placeholder='prenom' required/>
            </IonItem>
            </IonCol>
            <IonCol  size="12" className="ion-text-center">
             <IonLabel> <p className='centerbtn'><b> Nom<IonText className="asterix">*</IonText></b> </p></IonLabel>
            </IonCol>
            <IonCol  size="12" className="ion-text-center">
            <IonItem  >
             <IonInput type='text' name='nom' onIonChange={handleChange} placeholder='nom' required />
             </IonItem>
             </IonCol>
            <IonCol  size="12" className="ion-text-center">
             <IonLabel> <p className='centerbtn'><b>Mot de passe<IonText className="asterix">*</IonText> </b></p></IonLabel> 
            </IonCol>
            <IonCol  size="12" className="ion-text-center">
            <IonItem  >
            <IonInput 
            type={showpassword?'text':'password'} 
            name='password' 
            required
            onIonChange={handleChange} placeholder='******'/>
            <IonCheckbox onIonChange={()=>setshowpassword(!showpassword)} /> 
            </IonItem >
            </IonCol>
            <IonCol  size="12" className="ion-text-center">
             <IonLabel><p className='centerbtn'> <b>Confirmation du mot de passe<IonText className="asterix">*</IonText></b></p></IonLabel> 
            </IonCol>
            <IonCol  size="12" className="ion-text-center">
            <IonItem >
            <IonInput
             type={showpasswordcon?'text':'password'} 
              name='passwordcon' 
              onIonChange={handleChange} 
              placeholder='******'
              required/>
              <IonCheckbox onIonChange={()=>setshowpasswordcon(!showpasswordcon)} /> 
            </IonItem >
            </IonCol>
            <IonCol  size="12" className="ion-text-center">
             <IonButton  className="ion-margin-top" type='submit' expand="block">S inscrire</IonButton>
             </IonCol>
               </IonRow>
               </IonGrid>
               </form>
               <IonGrid>
               <IonRow className="ion-align-items-center">
                   <IonCol  size="12" className="ion-text-center">
                       <p>Vous  avez  déja  un  compte?<Link to='/connexion' style={{color:'purple'}}>Se connecter </Link></p>
                   </IonCol>
               </IonRow>
           </IonGrid>
           <CarouselPub/>
       <Pied />

       <IonModal
				isOpen={modal}
				swipeToClose={true}
				// presentingElement={router || undefined}
				onDidDismiss={() => setmodal(false)}
				>
			<div style={{marginLeft:'25%',width:'50%',height:'50%'}}>
			<form className="w3-container" onSubmit={handleSubmit}>
				<div className="w3-section">
			  <p className='centerbtn'><label ><b>Code de confirmation du numero de telephone* </b></label></p>
				<p className='centerbtn'>
				<TextField
						variant="outlined"
						margin="normal"
						required
						id="password"
						type="number"
						//name="passwordcon"
						//autoComplete="passwordcon"
						onChange={handlecode}
						//placeholder="*********"
					/>
					</p>
			
			<p className='centerbtn'>
		<button className="w3-btn w3-round-xxlarge w3-purple" type="submit">Confirmer</button>
		</p>		
			</div>
		</form>
		</div>
        </IonModal> 
      
       </div>
    )
}

export default InscriptionMobile


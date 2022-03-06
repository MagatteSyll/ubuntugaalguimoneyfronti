import React,{useState} from 'react'
import {  IonButton, IonCol, IonGrid, IonCheckbox, IonInput, IonItem, IonLabel, IonRow,
    IonModal,IonIcon,IonText } from '@ionic/react'
import axios from 'axios'
import {useHistory,Link} from 'react-router-dom'
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import CarouselPub from '../officiel/CarouselPub'
import {timeOutline} from 'ionicons/icons'
import TextField from '@material-ui/core/TextField';
import {Form ,} from  'react-bootstrap'
import Pied from './Pied'
import { Container } from '@material-ui/core';


function ResetPasswordMobile() {
    const  [modal, setmodal] = useState(false)
    const  [showpasswordcon, setshowpasswordcon] = useState(false)
    const  [showpassword, setshowpassword] = useState(false)
    const history=useHistory()
    const  [passmodal, setpassmodal] = useState(false)
    const  [data, setdata] = useState({
        tel:'',
        code:'',
        id:'',
        password:'',
        passwordcon:''
    })
    const erreur = () => toast.error("Veuillez remplir tous les champs",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
      const notify = () => toast.success("Mot de passe bien modifié!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
      const notel = () => toast.error("Veuillez remplir le champ",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
      const erreurcode = () => toast.error("Erreur!code incorrect!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
      const incorect = () => toast.error("Erreur!Les mots de passe ne matchent pas!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
    const handletel=(e)=>{
        setdata({...data,tel:e.target.value})
    }
    const handlecode=(e)=>{
        setdata({...data,code:e.target.value})
    }
    const handlepassword=(e)=>{
        setdata({...data,password:e.target.value})
    }
    const handlepasswordcon=(e)=>{
        setdata({...data,passwordcon:e.target.value})
    }
    const verif=e=>{
        e.preventDefault()
        if(data.tel===""){
            notel()
            return;
        }
        axios
       // .post('https://gaalguimoneyback.herokuapp.com/api/client/resetconfirmation/',{phone:data.tel})
        .post('http://127.0.0.1:8000/api/client/resetconfirmation/',{phone:data.tel})
        .then((res=>{
            console.log(res.data)
            setmodal(true)
            setdata({...data,id:res.data.id})
        }))
        .catch(()=>{
         erreur()
        })
   
       }
       const verifcode=e=>{
        e.preventDefault()
        axios
        //.post('https://gaalguimoneyback.herokuapp.com/api/client/verifcode/',{code:data.code,id:data.id})
        .post('http://127.0.0.1:8000/api/client/verifcode/',{code:data.code,id:data.id})
        .then((res=>{
          //  console.log(res.data)
            setmodal(false)
            setpassmodal(true)
        }))
        .catch(()=>{
         erreurcode()
        })

    }
    const handlesubmit=e=>{
        e.preventDefault()
        if(data.password!==data.passwordcon){
            incorect()
            return; 
        }
        if(data.password===" "||data.passwordcon===" "){
            erreur()
            return;
        }
        else{
        let formdata=new FormData()
       // formdata.append('code',data.code)
        formdata.append('password',data.password)
       // formdata.append('id',data.id)
        formdata.append('phone',data.tel)
        axios
       // .put('https://gaalguimoneyback.herokuapp.com/api/client/resetpassword/reseter/',formdata)
        .put('http://127.0.0.1:8000/api/client/resetpassword/reseter/',formdata)
        .then((res=>{
           // console.log(res.data)
            history.push('/connexion')
            notify()
            
        }))
    }
    

    }
    const handletime=()=>{
		setmodal(false)
	}
    return (
        <div className='mobile'>    
        <h1 className='ion-text-center'>GaalguiMoney(logo)</h1>
           
           <form onSubmit={verif} className='ion-align-self-center ion-padding' >
           <IonGrid>
           <IonRow className="ion-align-items-center">
           <IonCol  size="12" className="ion-text-center">
            <IonLabel><p className='centerbtn'><b> Numero de telephone lié au compte</b></p> </IonLabel> <br/>
           </IonCol>
           <IonCol  size="12" className="ion-text-center">
            <IonItem  >  
            <IonInput type='tel' name='phone' onIonChange={handletel} placeholder='+221...' />
           </IonItem>
           </IonCol>
           <IonCol size="12" className="ion-text-center">
           <p className='centerbtn'> <IonButton type='submit'  className="ion-margin-top">Confirmer</IonButton></p>
            </IonCol>
            </IonRow>
           </IonGrid>
           </form>
           
          <CarouselPub/>
           <Pied/>
          
           <IonModal isOpen={modal} cssClass='my-custom-class'>
        <Form  className='container' onSubmit={verifcode}>
        <div className="w3-section">
			  <p className='centerbtn'><label ><b>Code de verification du numero de telephone* </b></label></p>
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
		<button className="w3-btn w3-round-xxlarge w3-indigo" type="submit">Confirmer</button>
		</p>		
		</div>
        </Form>
        </IonModal>
        <IonModal isOpen={passmodal} cssClass='my-custom-class'>
            <form onSubmit={handlesubmit}> 
                 <h3 className='centerbtn'>Changer le mot de passe</h3><br/><br/>
                 <IonGrid>
                     <IonRow>
                         <IonCol size='12'>
                         <p  className='centerbtn'> <label><b>Nouveau mot  de passe *</b></label></p>
                         </IonCol>
                         <IonCol size='12'>
                     <IonItem>
                   <IonInput 
                    type={showpassword?'text':'password'} 
                    name='password' 
                    required
                    onIonChange={handlepassword} placeholder='******'/>
                    <IonCheckbox onIonChange={()=>setshowpassword(!showpassword)} /> 
                    </IonItem>
                  </IonCol>
                  <IonCol size='12'>
                  <p className='centerbtn'> <label><b>Confirmation du  mot  de passe *</b></label></p>
               
                  </IonCol>
                  <IonCol size='12'>
                <IonItem>
           
                <IonInput 
                    type={showpasswordcon?'text':'password'} 
                    name='password' 
                    required
                    onIonChange={handlepasswordcon} placeholder='******'/>
                    <IonCheckbox onIonChange={()=>setshowpasswordcon(!showpasswordcon)} /> 
                </IonItem>
                  </IonCol>
                  <IonCol size='12'>
                  <p className='centerbtn'>
                    <button class="w3-btn w3-round-xxlarge w3-black" type='submit'>Changer</button>
                 </p>
                  </IonCol>
                     </IonRow>
                 </IonGrid>
              </form>

                    </IonModal>
      </div>
    )
}

export default ResetPasswordMobile


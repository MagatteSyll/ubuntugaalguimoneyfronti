import axiosInstance from '../../axios';
import axios from 'axios';
import  { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Input from "@material-ui/core/Input";
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'; 
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../style.css'
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {IonCard, IonIcon, IonModal,IonText} from '@ionic/react'
import {timeOutline} from 'ionicons/icons'
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import CarouselPub from '../officiel/CarouselPub';







const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: '2',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));


function InscriptionDesk() {
    const history = useHistory();
	const  [showpassword, setshowpassword] = useState(false)
	const  [showpasswordcon, setshowpasswordcon] = useState(false)

	const initialFormData = Object.freeze({
		phone: '',
		prenom: '',
        nom:'',
		password: '',
		passwordcon:'',
		code:'',
		id:''

	});
	const  [modal, setmodal] = useState(false)
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

	  const handledata = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};
	const handlecode=e=>{
		updateFormData({
			...formData,
			code: e.target.value
		});
	}
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
	
		});
	
		  
	   }
		 
	   else{
		
		nocode()
		return;
			
		}
	};
	const handletime=()=>{
		setmodal(false)
	}
	

	const classes = useStyles();
    return (
        <div className='desk'>
           <Fragment>
			<div  className="sideconnexion">
			<IonCard className='card'>
            <Container>     
			<CssBaseline />
			<div className={classes.paper}>
            <h1 style={{color:'red'}}>GaalguiMoney</h1>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					S inscrire
				</Typography>
				<form   onSubmit={verif}>
					
					<label><b>Numero de telephone valide<IonText className="asterix">*</IonText></b></label>
					<p>
					 <Input
						className="w3-input w3-border" 
						required
						fullWidth
						name="phone"
						autoComplete="phone"
						type="tel"
						autoFocus
						placeholder="+221"
						onChange={handledata}
					/>
					</p>
						
					<label><b>Prenom<IonText className="asterix">*</IonText></b></label>
					<p>
					  <Input
						className="w3-input w3-border" 
						required
						fullWidth
						id="prenom"
						name="prenom"
						autoComplete="prenom"
						//autoFocus
						placeholder="prenom"
						onChange={handledata}
					/>
						</p>
					<label><b>Nom<IonText className="asterix">*</IonText></b></label>
					<p>
					   <Input
						className="w3-input w3-border" 
						required
						fullWidth
						id="nom"
						name="nom"
						autoComplete="nom"
					   placeholder="nom"
						onChange={handledata}
					/>
					</p>
						
					<label><b>Mot de passe<IonText className="asterix">*</IonText></b></label>
					<p>
					   <Input
						className="w3-input w3-border" 
						required
						fullWidth
						id="password"
						type={showpassword?'text':'password'}
						name="password"
						autoComplete="password"
						onChange={handledata}
						placeholder="*********"
						endAdornment={
						<InputAdornment position="end">
						 <IconButton
							onClick={()=>setshowpassword(!showpassword)}
								//onMouseDown={handleMouseDownPassword}
							  >
								{showpassword ? <Visibility /> : <VisibilityOff />}
							  </IconButton>
							</InputAdornment>}
						/>
						</p>
					<label><b>Confirmation du mot de passe<IonText className="asterix">*</IonText></b>	
					</label>
					<p>
					   <Input
						className="w3-input w3-border" 
						required
						fullWidth
						id="password"
						type={showpasswordcon?'text':'password'}
						name="passwordcon"
						autoComplete="passwordcon"
						onChange={handledata}
						placeholder="*********"
						endAdornment={
							<InputAdornment position="end">
							 <IconButton
							onClick={()=>setshowpasswordcon(!showpasswordcon)}
							 >
									{showpasswordcon? <Visibility /> : <VisibilityOff />}
								  </IconButton>
								</InputAdornment>}
					/>
						</p>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="secondary"
						className={classes.submit}
						>
						Inscription
					    </Button><br/>
					<IonText >  Vous avez deja un compte?<Link style={{textDecoration:'none',color:'purple'}} to='/connexion' variant="body2">
							Se connecter
							</Link></IonText>		
					
				</form>
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
        </Container>
		</IonCard>
		</div> 
        <div className='carouselpubinscription'>
      <CarouselPub/>
      </div>
	   </Fragment> 
        </div>
    )
}

export default InscriptionDesk

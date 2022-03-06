import React,{useState,useEffect,Fragment} from 'react'
import axios from 'axios';
import { IonCard, IonText } from '@ionic/react';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../style.css'
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
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
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

function ConnexionDesk() {
    const history = useHistory();
	const  [showpassword, setshowpassword] = useState(false)
	const initialFormData = Object.freeze({
		phone: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);
	
	useEffect(()=>{
		fetchuser()
	  },[])
	  const fetchuser=()=>{ 
		
		axiosInstance
		.get('client/getuser')
		.then(res=>{
		 // setuser(res.data)
		 // setload(true)
		})
	  }
	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};
	const erreur = () => toast.error("Erreur!telephone ou mot de passe incorrect!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });

	const handleSubmit = (e) => {
		e.preventDefault();
		

		  axios
			.post(`https://verysoongaalguimoney.herokuapp.com/api/client/login/`, {
			  //.post('http://127.0.0.1:8000/api/client/login/',{
				phone: formData.phone,
				password: formData.password,
			})
			.then((res) => {
				localStorage.setItem('__jdkm__', res.data.access);
				localStorage.setItem('__jvqm__', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('__jdkm__');
                 fetchuser()
				history.push("/accueil")
				window.location.reload()
			
			})
		.catch(()=>{
				erreur()
			   })
		
	};
	

	const classes = useStyles();
    return (
        <div className='desk'>
           <Fragment>
		<div className="sideconnexion">
			<IonCard className='card'>
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
            <h1 style={{color:'red'}}>GaalguiMoney</h1>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Se connecter
				</Typography>
				
				<form className={classes.form} noValidate>
				<p style={{textAlign:'center'}}><label><b>Votre numero de telephone *</b>	
					</label></p>
					<p>
					<Input
					 className="w3-input w3-border" 
					 type="text" name="phone"
					  onChange={handleChange} 
					  required
					  autoFocus 
					  fullWidth
					   />
					</p>
				<p style={{textAlign:'center'}}><label><b>Votre mot de passe *</b></label></p>
					<p><Input
					 className="w3-input w3-border"
						required
						fullWidth
						autoComplete="current-password"
						onChange={handleChange}
						name="password"
						type={showpassword?'text':'password'}
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
							/></p>	
			           <Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Se connecter 
					</Button>
					<div>
				 		<Grid item xs style={{textAlign:'center'}}>
						<IonText >
							<Link  style={{textDecoration:'none',color:'red'}}to='/resetpassword' variant="body2">
								Mot de passe oublié?
							</Link></IonText>
						</Grid><br/>
						<Grid item style={{textAlign:'center'}}>
						<IonText >
						Vous n avez pas encore de compte?
							<Link  style={{textDecoration:'none',color:'purple'}} to="/inscription" variant="body2">
								Inscrivez vous!
							</Link></IonText>
						</Grid>
					</div>
				</form>
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

export default ConnexionDesk

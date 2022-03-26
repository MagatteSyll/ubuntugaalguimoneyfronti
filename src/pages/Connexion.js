import React,{useState,useEffect,Fragment} from 'react'
import ConnexionDesk from '../component/desktop/ConnexionDesk';
import ConnexionMobile from '../component/mobile/ConnexionMobile'
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom';
import {toast } from 'react-toastify'
import { makeStyles } from '@material-ui/core/styles';






const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: '2',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		//backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function Connexion() {
    const history = useHistory();
	const  [showpassword, setshowpassword] = useState(false)
	const initialFormData = Object.freeze({
		phone: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);
	
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
	const err = () => toast.error("Veuillez remplir tous les champs!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });

	const handleSubmit = (e) => {
		e.preventDefault();
		if(formData.password===""||formData.phone===""||formData.password.match(/^ *$/)!== null||
	formData.phone.match(/^ *$/)!== null){
             err()
             return;
		}
		       axiosInstance
			//.post(`https://verysoongaalguimoney.herokuapp.com/api/client/login/`, {
			  .post('client/login/',{
				phone: formData.phone,
				password: formData.password,
			})
			.then((res) => {
				localStorage.setItem('__jmdf__', res.data.access);
				localStorage.setItem('__jvmdf__', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'Bearer ' + localStorage.getItem('__jmdf__');
                
                window.location.reload()
				history.push('/accueil')
				
			
			}) 
		.catch(()=>{
				erreur()
			   })
		
	};
	const classes = useStyles();
	
	
	return (
		<div>
			<ConnexionDesk handleSubmit={handleSubmit} handleChange={handleChange}
			 setshowpassword={setshowpassword} showpassword={showpassword} classes={classes}/>
			<ConnexionMobile handleSubmit={handleSubmit}
			setshowpassword={setshowpassword} showpassword={showpassword}
			 handleChange={handleChange} classes={classes}/>
		</div>
	)
}



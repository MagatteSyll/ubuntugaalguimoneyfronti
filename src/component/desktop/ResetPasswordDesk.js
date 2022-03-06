import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { IonCard, IonText,IonModal,IonIcon, } from '@ionic/react';
import '../style.css'
import {Form ,Col,Button} from  'react-bootstrap'
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {timeOutline} from 'ionicons/icons'
import {useHistory} from 'react-router-dom'
import CarouselPub from '../officiel/CarouselPub'
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";





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


function ResetPasswordDesk() {
    const classes = useStyles();
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

     axios
    // .post('https://gaalguimoneyback.herokuapp.com/api/client/resetconfirmation/',{phone:data.tel})
     .post('http://127.0.0.1:8000/api/client/resetconfirmation/',{phone:data.tel})
     .then((res=>{
       //  console.log(res.data)
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
        <div className='desk'>
          <Fragment>
		<div className="sideconnexion">

			<IonCard className='card'>
                <Container>
            <div className={classes.paper}>
            <h1 style={{color:'red'}}>GaalguiMoney</h1>
				<Avatar className={classes.avatar}></Avatar>
                <Typography component="h1" variant="h5">
					Reinitialisation de mot passe
				</Typography>
                <br/><br/>
                <Form className='container' onSubmit={verif}>
                <Form.Group as={Col} >
                <Form.Label >Numero de telephone lié au compte </Form.Label>
                <input class="w3-input w3-border"  type="tel"
                placeholder='+221' onChange={handletel} name='tel' required/><br/>
                 </Form.Group>
                 <div class="col-md-12 text-center mb-2">  
                <Button variant="secondary" type="submit" >
                Confirmer
                </Button>
                </div>
                </Form>
                </div>
                </Container>
            </IonCard>
            
            </div>
          
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
                <Container>
                    <div style={{width:'50%',margin:'0 auto'}}>
                        <h3 className='centerbtn'>Changer le mot de passe</h3><br/><br/>
                <label><b>Nouveau mot  de passe *</b></label>
					<p>
					   <Input
						className="w3-input w3-border" 
						required
						fullWidth
						id="password"
						type={showpassword?'text':'password'}
						name="password"
						autoComplete="password"
						onChange={handlepassword}
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
					<label><b>Confirmation du mot de passe *</b>	
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
						onChange={handlepasswordcon}
						placeholder="*********"
						endAdornment={
							<InputAdornment position="end">
							 <IconButton
							onClick={()=>setshowpasswordcon(!showpasswordcon)}
							 >
									{showpasswordcon? <Visibility /> : <VisibilityOff />}
								  </IconButton>
								</InputAdornment>}/></p>
                                <p className='centerbtn'>
                                <button class="w3-btn w3-round-xxlarge w3-black" type='submit'>Changer</button>
                                </p>
                                </div>
                                </Container>
                                </form>

                    </IonModal>
        <div className='carouselpubinscription'>
      <CarouselPub/>
      </div>
            </Fragment>   
        </div>
    )
}

export default ResetPasswordDesk

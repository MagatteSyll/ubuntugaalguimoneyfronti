import  { Fragment, } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Input from "@material-ui/core/Input";
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'; 
import Container from '@material-ui/core/Container';
import {IonCard,IonText} from '@ionic/react'
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import CarouselLog from '../CarouselLog';




 





function InscriptionDesk({handleSubmit,handledata,showpasswordcon,showpassword,
   setshowpasswordcon,setshowpassword,classes}) {
   
    return (
        <div className='desk '>
           <Fragment>
			<div  className="sideconnexion">
			<IonCard className='card'>
            <Container>     
			<CssBaseline />
			<div className={classes.paper}>
            <h1>GaalguiMoney</h1>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					S inscrire
				</Typography>
				<form   onSubmit={handleSubmit}>
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
						pattern="^\d{3}-\d{3}-\d{4}$"
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
						   onClick={()=>setshowpasswordcon(!showpasswordcon)} >
							{showpasswordcon? <Visibility /> : <VisibilityOff />}
							</IconButton>
								</InputAdornment>}
								/>
					</p>
					<p className='centerbtn'>
					<button
						type="submit"
						fullWidth
						className='w3-button w3-blue'
						>
						Inscription
					    </button></p>
			<p> Vous avez deja un compte?<Link className='link' to='/connexion' variant="body2">
							Se connecter
			</Link></p>		
			</form>
		</div>
        </Container>
		</IonCard>
		</div> 
		<div className='noflow carousellog'>
      <CarouselLog/>
      </div>
	   </Fragment> 
        </div>
    )
}

export default InscriptionDesk

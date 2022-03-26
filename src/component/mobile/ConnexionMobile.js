import {IonCol, IonGrid, IonLabel, IonRow } from '@ionic/react'
import { Link } from 'react-router-dom'
import CarouselLog from '../CarouselLog';
import Input from "@material-ui/core/Input";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Avatar from '@material-ui/core/Avatar';




const  ConnexionMobile=({handleSubmit,handleChange,showpassword,setshowpassword,classes})=> {
    return (

       <div className='mobile'> 
       <div className='container'>   
         <h1>GaalguiMoney(logo)</h1>
        <p className='centerbtn'> <Avatar className={classes.avatar}></Avatar></p>
          </div>
            <form onSubmit={handleSubmit} className='mt-3' >
            <IonGrid>
            <IonRow >
            <IonCol  size="10" className='container'>
            <p className='centerbtn'><b> Numero de telephone <span className='redstyle'> *</span> </b></p>
             <p> <Input
            className="w3-input w3-border" 
            type="text" name="phone"
            onChange={handleChange} 
            required
            autoFocus 
            fullWidth
             />
             </p>
            </IonCol>
             <IonCol  size="10" className='container'>
             <p className='centerbtn'> <IonLabel> <b> Mot de passe <span className='redstyle'> *</span></b></IonLabel> </p>
             <Input
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
            />
          </IonCol> 
            <IonCol size="10" className="container">
            <p className='centerbtn'> <button type='submit'  className="w3-button w3-blue" >Se connecter</button></p>
             </IonCol>
             </IonRow>
            </IonGrid>
            </form>
            <IonGrid>
               <IonRow >
               <IonCol  size="10" className="container" >
                       <p className='centerbtn'><Link to='/resetpassword' className='link'>Mot de passe oublié?</Link></p>
                   </IonCol>
                   <IonCol  size="10" className="container">
        <p>Vous n avez pas encore de compte?<Link to='/inscription' className='link'>
                       Inscrivez vous</Link></p>
                   </IonCol>
               </IonRow>
           </IonGrid>
           <CarouselLog/>
           
       </div>
    )
}

export default ConnexionMobile


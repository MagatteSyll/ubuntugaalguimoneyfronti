import {  IonCol, IonGrid, IonRow, } from '@ionic/react'; 
import Input from "@material-ui/core/Input";
import Avatar from '@material-ui/core/Avatar';
import CarouselLog from '../CarouselLog';
import {Link} from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function ResetPasswordMobile({classes,handlesubmit,handledata}) {
    
 return(
  <div className='mobile'>    
    <div className='container'>   
    <h1>GaalguiMoney(logo)</h1>
    <p className='centerbtn'> <Avatar className={classes.avatar}></Avatar></p>
        </div>
          <form onSubmit={handlesubmit} className='mt-3' >
            <IonGrid>
            <IonRow >
            <IonCol  size="10" className='container'>
            <p className='centerbtn'><b> Numero de telephone <span className='redstyle'> *</span> </b></p>
             <p> <Input
            className="w3-input w3-border" 
            type="text" name="tel"
            onChange={handledata} 
            required
            autoFocus 
            fullWidth
             />
             </p>
            </IonCol>
         <IonCol size="10" className="container">
            <p className='centerbtn'> <button type='submit'  className="w3-button w3-blue" >Valider</button></p>
             </IonCol>
        <IonCol size="10" className="container">
        <p className='centerbtn'>
         <Link  className='link' to='/connexion'>Connexion <ArrowRightAltIcon/></Link>
         </p>
         </IonCol>
        </IonRow>
        </IonGrid>
        </form>
    <CarouselLog/>
      
  </div>
    )
}

export default ResetPasswordMobile


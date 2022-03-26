import { IonCard, } from '@ionic/react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CarouselLog from '../CarouselLog';
import { Container } from '@material-ui/core';
import Input from "@material-ui/core/Input";
import {Fragment} from 'react'
import {Link} from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';








function ResetPasswordDesk({handlesubmit,handledata,classes}) {
   
    return (
        <div className='desk'>
          <Fragment>
		<div className="sideconnexion">
			<IonCard className='card'>
                <Container>
            <div className={classes.paper}>
            <h1 >GaalguiMoney</h1>
				<Avatar className={classes.avatar}></Avatar>
                <Typography component="h1" variant="h5">
					Reinitialisation de mot passe
				</Typography>
                <br/><br/>
                <form onSubmit={handlesubmit}>
                <p className='centerbtn' ><label><b>Numero de telephone<span className='redstyle'> *</span></b> 
                </label></p>
                    <p>
                    <Input
                     className="w3-input w3-border" 
                     type="text" name="tel"
                      onChange={handledata} 
                      required
                      autoFocus 
                      fullWidth
                       />
                    </p>
                 <p className='centerbtn'>  <button
                    type="submit"
                    className='w3-button w3-blue'
                    type='submit'
                    >
                     Valider
                    </button></p>
                    <p className='centerbtn'>
                    <Link  className='link' to='/connexion'>Connexion <ArrowRightAltIcon/></Link>
                    </p>
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

export default ResetPasswordDesk

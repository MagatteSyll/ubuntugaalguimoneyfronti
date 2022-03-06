import { IonModal, IonIcon, IonItem, IonLoading, IonText,IonCard } from '@ionic/react';
import React,{useState,useEffect,Fragment} from 'react';
import '../style.css'
import { SocialIcon } from 'react-social-icons';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {locationOutline} from 'ionicons/icons'


//footer de la page personnelle sur desktop
export default function FooterDesk() {
  const  [modal, setmodal] = useState(false)
  const  [adress, setadress] = useState([])
  const  [load, setload] = useState(false)
  const [showLoading, setShowLoading] = useState(true);
 /* useEffect(()=>{
    axios
    .get('http://127.0.0.1:8001/api/produit/adress/')
    .then((res=>{
       // console.log(res.data)
        setadress(res.data)
        setload(true)
    }))
  },[])*/
  return (
    <div className='content'>
    <div className="footer">
      <Grid container spacing={5}>
      <Grid item xs={12} sm={6}>
      <Box> <h4> +(221)772197305</h4></Box>
      <Typography>  Notre service client</Typography>
        </Grid>
          <Grid item xs={12} sm={6}>
      <Box><Typography>  
      <SocialIcon url='https://www.facebook.com/profile.php?id=100004551644169' style={{zoom:0.7}} />
       <SocialIcon url='https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
        style={{zoom:0.7}}/>
       <SocialIcon url='https://www.instagram.com/?hl=fr' style={{zoom:0.7}}/>
       <SocialIcon url='https://www.linkedin.com/' style={{zoom:0.7}}/>
       </Typography></Box>
        </Grid>
        </Grid> 
    <p> GaalguiMoney &reg; {new Date().getFullYear()}</p>

    <IonModal isOpen={modal} cssClass='my-custom-class'>
        {load?
        <div>
          <IonCard>
           {adress.map(a=>
            <IonItem key={a.id}>{a.region.region} <IonIcon icon={locationOutline} /> {a.adress}</IonItem>
            )}
          </IonCard>
          <p style={{textAlign:'center'}}> GaalguiMoney &reg; {new Date().getFullYear()}</p>
          </div>:<IonLoading
            cssClass='my-custom-class'
            isOpen={showLoading}
            onDidDismiss={() => setShowLoading(false)}
            message={'Chargement...'}
            duration={5000}
            />}
      </IonModal>
  </div>
  </div>
  );
}


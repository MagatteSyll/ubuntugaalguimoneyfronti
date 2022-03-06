import React, { useState,useEffect,Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Card,} from  'react-bootstrap'
import '../style.css'
import {IonIcon, IonText} from '@ionic/react'
import {logoFacebook,logoInstagram,logoTwitter,logoLinkedin,logoApple} from 'ionicons/icons'

//Footer de la page officielle
export default function FooterOfficiel() {
 
  return (
    <Fragment>
    <footer className='foot'>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#000000"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
              <Box> <Typography  variant="h6" color="#d500f9" gutterBottom>L equipe GaalguiMoney</Typography></Box>
              <ul>
              <Box>
                <Link href="/" color="inherit">
                <li>Nos points d acces</li>
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
               <li> Realisations</li>
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
              <li> GaalguiPersonnel </li>
                </Link>
              </Box>
              </ul>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box >
              <Typography  variant="h6" color="#d500f9" gutterBottom>Nous sommes sur</Typography></Box>
              <ul>
              <Box>
                <Link href="/" color="inherit">
                <li> <IonIcon  style={{zoom:1.5,color:'white'}} icon={logoFacebook}/></li>
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
              <li><IonIcon  style={{zoom:1.5,color:'white'}} icon={logoInstagram}/></li>
                </Link>
                </Box>
                <Box>
                <Link href="/" color="inherit">
                <li> <IonIcon  style={{zoom:1.5,color:'white'}} icon={logoTwitter}/></li>
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                <li> <IonIcon  style={{zoom:1.5,color:'white'}} icon={logoLinkedin}/></li>
                </Link>
              </Box>
              </ul>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box > <Typography  variant="h6" color="#d500f9" gutterBottom>Services</Typography></Box>
              <ul>
              <Box>
                <Link href="/" color="inherit">
               <li> GaalguiPay</li>
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
             <li> Compte professionnel</li> 
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
               <li> service client </li>
                </Link>
              </Box>
              </ul>
            </Grid>
            <Grid item xs={12} sm={3}>
            <Box > <Typography  variant="h6" color="#d500f9" gutterBottom>Droits</Typography></Box>
              <ul>
              <Box>
                <Link href="/" color="inherit">
               <li> Politiques de confidentialite</li>
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
             <li> En cas de fraude</li> 
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
               <li> Service d assistance </li>
                </Link>
              </Box>
              </ul>  
            </Grid>
          </Grid>
          <Grid container spacing={3}>
              <Box><Typography>Vous avez un smartphone?</Typography></Box>
              <Grid item xs={12} sm={2}>
              <Link href="/" color="inherit" style={{textDecoration:'none'}}>
                  <Card style={{ width: '7rem',height:'7rem',color:'black',textAlign:'center' }}>
                   <IonText style={{textAlign:'center'}}><i className='fab fa-google-play' 
                   style={{fontSize:'48px',color:'rainbow'}}></i> googleplay</IonText>
                  </Card>
                  </Link>
            </Grid>
            <Grid item xs={12} sm={2}>
            <Link href="/" color="inherit" style={{textDecoration:'none'}}>
                  <Card style={{ width: '7rem',height:'7rem',color:'black',textAlign:'center' }}>
                   <IonText style={{textAlign:'center'}}> <IonIcon style={{zoom:3}} icon={logoApple}/>
                     appstore</IonText>
                  </Card>
                  </Link>
            </Grid>

          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
           GaalguiMoney &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
     
    </footer>
    </Fragment>
  );
}
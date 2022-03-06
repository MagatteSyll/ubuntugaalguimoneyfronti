import React,{useState,useEffect, Fragment} from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import '../style.css'
import {IonIcon, IonModal,IonLoading } from '@ionic/react'
import {wallet,briefcase,laptop,people,locationOutline}  from 'ionicons/icons'
import Segment from './Segment'
import HomeOfficiel from './HomeOfficiel';
import axiosInstance from '../../axios';




//Tous les elements de la page officielle regroupee
const drawerWidth=240
const useStyles = makeStyles((theme) => ({
 
  drawer: {
    width: '100%',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '100%',
  },
  drawerHeader: {
    display: 'flex',
   alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
 
}));
function ElementOfficiel() {

    const  [comptepro, setcomptepro] = useState(false)
    const  [tarif, settarif] = useState(false)
    const  [pay, setpay] = useState(false)
    const [client, setclient] = useState(false)
    const  [carriere, setcarriere] = useState(false)
    const  [acces, setacces] = useState(false)
    const  [islog, setislog] = useState(false)
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const  [user, setuser] = useState([])
    const  [load, setload] = useState(false)
    const [showLoading, setShowLoading] = useState(true);
    const history=useHistory()

    useEffect(()=>{
      axiosInstance
      .get('client/islog/')
      .then(res=>{
        setislog(res.data)
      })
    })
    useEffect(()=>{
      axiosInstance
      .get('client/getuser/')
      .then(res=>{
        setuser(res.data)
        setload(true)
      })
    },[])
    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };
      const handleuser=()=>{
        history.push('/accueil')
      }
    return (
      <Fragment>
        <Fragment>
        {islog?
         <div id='navbar' className="w3-bar w3-black w3-border w3-xlarge">
         <button className="w3-bar-item w3-button w3-left" > GaalguiMoney</button>
         <button onClick={handleDrawerOpen} id='toggle' className="w3-bar-item w3-button w3-right"> <MenuIcon /> </button>
         <button className="w3-bar-item w3-button w3-right" onClick={handleuser} >{user.prenom}<i className="fa fa-fw fa-user"></i> 
        </button>  
         </div>:
        <div id='navbar' className="w3-bar w3-black w3-border w3-xlarge">
        <button className="w3-bar-item w3-button w3-left" > GaalguiMoney</button>
        <button onClick={handleDrawerOpen} id='toggle' className="w3-bar-item w3-button w3-right"> <MenuIcon /> </button>
        <button className="w3-bar-item w3-button w3-right" ><Link to='/inscription' style={{textDecoration:'none',color:'inherit'}}><i className="fa fa-fw fa-user"></i> S inscrire</Link></button>
        <button className="w3-bar-item w3-button w3-right" ><Link to='/connexion' style={{textDecoration:'none',color:'inherit'}}><i className="fa fa-fw fa-user"></i> Se connecter</Link></button>   
        </div>}
       <Segment/>
       <HomeOfficiel/> 
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className="navdrawer">
        <IconButton onClick={handleDrawerClose} className='w3-right' >
           {theme.direction === 'ltr' ? <p style={{color:'red'}} ><CloseIcon/></p> : <ChevronRightIcon />}
        </IconButton>
        </div>
        <Divider />
        
        <List onClick={handleDrawerClose}>
          <ListItem>
         <ListItemIcon> <IonIcon icon={wallet}/></ListItemIcon>
          <ListItemText> <button  onClick={()=>settarif(true)} style={{border:'none',background:'none'}}>Nos tarifs</button></ListItemText>
          </ListItem>
        </List>
        <List>
          <ListItem>
         <ListItemIcon>  <IonIcon icon={briefcase}/></ListItemIcon>
          <ListItemText><button onClick={()=>setcomptepro(true)}  style={{border:'none',background:'none'}}>Compte professionnel</button></ListItemText>
          </ListItem>
        </List>
        <List>
          <ListItem>
         <ListItemIcon><IonIcon icon={laptop}/> </ListItemIcon>
          <ListItemText> <button onClick={()=>setclient(true)}  style={{border:'none',background:'none'}}>
            Service Client </button> </ListItemText>
          </ListItem>
        </List>
        <List>
          <ListItem>
         <ListItemIcon> <IonIcon icon={people}/></ListItemIcon>
          <ListItemText><button onClick={()=>setcarriere(true)} style={{border:'none',background:'none'}}>Carriere</button></ListItemText>
          </ListItem>
        </List>
        <List>
          <ListItem>
         <ListItemIcon> <IonIcon icon={locationOutline}/></ListItemIcon>
          <ListItemText> <button onClick={()=>setacces(true)} style={{border:'none',background:'none'}}> Nos points d acces </button></ListItemText>
          </ListItem>
        </List>
        <Divider />
        {islog?
        <div>
        <List>
        <ListItem>
         <ListItemIcon> <AccountCircle/></ListItemIcon>
          <ListItemText> <button   style={{border:'none',background:'none'}}> Mon compte </button></ListItemText>
          </ListItem>
         
        </List>
        <List>
        <ListItem>
         <ListItemIcon> <Brightness5Icon/></ListItemIcon>
          <ListItemText>  <button  style={{border:'none',background:'none'}}>Parametres</button></ListItemText>
          </ListItem>
         
        </List>
        <List>
        <ListItem>
         <ListItemIcon> <SentimentVeryDissatisfiedIcon/></ListItemIcon>
          <ListItemText> <button style={{background:'none',border:'none'}} > Deconnexion</button></ListItemText>
          </ListItem>   
        </List> 
        </div>:null}
        <p className='copyr'>GaalguiMoney &reg; {new Date().getFullYear()}</p>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
      <div className={classes.drawerHeader} />
       </main>
       </Fragment>
      </Fragment>
    )
}

export default ElementOfficiel

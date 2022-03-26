import React,{useState} from 'react'
import ResetPasswordDesk from '../component/desktop/ResetPasswordDesk'
import ResetPasswordMobile from '../component/mobile/ResetPasswordMobile'
import {useHistory} from 'react-router-dom'
import axiosInstance from '../axios'
import {toast } from 'react-toastify'
import { makeStyles } from '@material-ui/core/styles'



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

function ResetPassword() {
    const history=useHistory()
     const classes = useStyles();
    const  [data, setdata] = useState({
        tel:'',
    })
    const erreur = () => toast.error("Numero de telephone invalide!",{
        position:toast.POSITION.TOP_CENTER,
        autoClose:false
      });

    const handledata = (e) => {
        setdata({tel:e.target.value})
    };
    const handlesubmit=e=>{
        e.preventDefault()
        if(data.tel===""){
         erreur()
         return;
        }
       axiosInstance
       .post('client/resetconfirmation/',{phone:data.tel})
       .then(res=>{
          history.push(`/resetpassword/${res.data.id}/codeconfirmation`)
       })
       .catch(()=>{
         erreur()
         return;
       })
    }



    return (
        <div>
            <ResetPasswordDesk classes={classes} handledata={handledata} handlesubmit={handlesubmit}/>
            <ResetPasswordMobile classes={classes} handledata={handledata} handlesubmit={handlesubmit}/>
        </div>
    )
}

export default ResetPassword

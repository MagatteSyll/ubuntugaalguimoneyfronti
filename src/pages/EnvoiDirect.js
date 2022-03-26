import React,{useState,Fragment} from 'react'
import axiosInstance from '../axios'
import EnvoiDirectMobile from '../component/mobile/EnvoiDirectMobile'
import EnvoiDirectDesk from '../component/desktop/EnvoiDirectDesk';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom'
import {toast } from 'react-toastify'
import {useHistory} from 'react-router-dom' 


function EnvoiDirect() { 
  const history=useHistory() 
  const  [data, setdata] = useState({
        phone:'',
        sum:''
    })
  const err = () => toast.error("Veuillez entrer des donnees valides!",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false 
    });
  const handledata=e=>{
    setdata({
    ...data,[e.target.name]:e.target.value.trim()
    })
    }
   const handlesubmit=e=>{
       e.preventDefault()
       axiosInstance
       .post('client/verifenvoi/',{
        phone:data.phone,
        somme:data.sum
       })
       .then(res=>{
        history.push(`/confirmationenvoidirect/${res.data.id}/${res.data.prenom+""+res.data.nom}`)
       })
      .catch(()=>{
        err()
        return;

      })

      }
 return (
 <Fragment>
  <p className='m-4'>
  <Link to='/accueil' className='link'><ArrowBackIcon className='iconsocial'/></Link></p>
  <EnvoiDirectDesk handlesubmit={handlesubmit} handledata={handledata} />
  <EnvoiDirectMobile handlesubmit={handlesubmit} handledata={handledata} />
  </Fragment>


) 
}

export default EnvoiDirect

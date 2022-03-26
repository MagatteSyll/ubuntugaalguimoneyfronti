import {useState,} from 'react'
import axiosInstance from '../axios'
import { useHistory } from 'react-router-dom';
import {toast } from 'react-toastify'


function DesactivationClient(props) {
	const history=useHistory()
    const  [data, setdata] = useState({
        phone:''
    })
   const erreur = () => toast.error("client non trouve!",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });
  
    
    const handlephone=e=>{
        setdata({phone:e.target.value})
       // console.log(e.target.value)
    }
  

    const confirmation=e=>{
       e.preventDefault()
       if(data.phone===""){
        erreur()
        return;
       }
       axiosInstance
        .post('staff/getclientdesactivation/',{
            phone:data.phone
        })
        .then(res=>{
            history.push(`/confirmationdesactivation/${res.data.polza}/${res.data.prenom+""+res.data.nom}`)  
            //console.log(res.data)
           })
        .catch(()=>{
          erreur()
          return;
        })
      }
    

 return(
  <div>
  <h1 className='container'>Desactivation Compte client GaalguiMoney</h1>
   <div className='divform'>
     <form className="formdepot" onSubmit={confirmation}>
     <div className="w3-section">
      <p className='centerbtn'> <label  className="w3-container"><b>Numero de telephone du client</b></label></p>
      <input className="w3-input w3-border" type="tel" onChange={handlephone} required />
      <p className='centerbtn'>  
      <button className="w3-button w3-round-xxlarge w3-green w3-margin" type="submit">Confirmer</button></p>  
    </div>
      </form>
      </div>
  </div>
 )
}

export default DesactivationClient;
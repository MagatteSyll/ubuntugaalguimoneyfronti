import {useState,} from 'react'
import axiosInstance from '../axios'
import { useHistory } from 'react-router-dom';
import {toast } from 'react-toastify'


function RetraitParCode() {
    const history=useHistory()
    const  [data, setdata] = useState({
        code:''
    })
   
    const erreur = () => toast.error("Entrez un code valide!",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });
  
    
    const handlecode=e=>{
        setdata({code:e.target.value})
    }
  

    const confirmation=e=>{
       e.preventDefault()
       if(data.code==="")
       {
         erreur()
         return;
       }
       axiosInstance
        .post('staff/verificationcode/',{
            code:data.code
        })
        .then(res=>{
            history.push(`/confirmationretraitcode/${res.data.id}/${res.data.nature}`)  
            //console.log(res.data)
           })
        .catch(()=>{
          erreur()
          return;
        })
      }
    
   
    return (
        <div>
        <h1 className='container'>Retrait par code  GaalguiMoney</h1>
        <div className='divform'>
        <form className="formdepot" onSubmit={confirmation}>
        <div className="w3-section">
         <p className='centerbtn'> <label  className="w3-container" ><b>code de transfert</b></label></p>
          <input className="w3-input w3-border" type="number" onChange={handlecode} required />
          <p className='centerbtn'>  
          <button className="w3-button w3-round-xxlarge w3-green w3-margin" type="submit">Confirmer</button></p>  
        </div>
      </form>
      </div>  
        </div>
    )
}

export default RetraitParCode


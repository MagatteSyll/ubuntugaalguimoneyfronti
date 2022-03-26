import {useState} from 'react'
import axiosInstance from '../axios'
import { useHistory } from 'react-router-dom';
import {toast } from 'react-toastify'




const options = [
  { value: 1, label: 'non inclus' },
  { value: 2, label: 'inclus' },];
function EnvoiCode() {
    const history=useHistory()
    const [data,setdata]=useState({
        receveur:'',
        envoyeur:'',
        phonereceveur:"",
        somme:'',
        commission:'',


    })
   const erreur = () => toast.error("Erreur!Entrez des donnees valides",{
        position:toast.POSITION.TOP_CENTER,
        autoClose:false
      });
  const ercom = () => toast.error("Precisez le mode de payement de la commission",{
        position:toast.POSITION.TOP_CENTER,
        autoClose:false
      });
   const handledata=e=>{
      //console.log(e.target.value)
      setdata({
        ...data,[e.target.name]: e.target.value.trim()
      })
   }
   const confirmation=e=>{
    e.preventDefault()
    if(data.receveur===""||data.receveur.match(/^ *$/)!== null||data.envoyeur===""
        ||data.envoyeur.match(/^ *$/)!== null||data.somme<0||data.commission==="")
    {
        erreur()
        return;
    }
    if(data.commission==='1'){
        axiosInstance
    .post('staff/commissionnonincluse/',{
        somme:data.somme,
        receveur:data.receveur,
        envoyeur:data.envoyeur,
        phone:data.phonereceveur
    })
    .then(res=>{
        history.push(`/confirmationenvoiviacodeworker/${res.data.id}/${res.data.nature}`)
    })
    .catch(()=>{
        erreur()
    })

    }

    if(data.commission==='2'){
      axiosInstance
    .post('staff/commissionincluse/',{
        somme:data.somme,
        receveur:data.receveur,
        envoyeur:data.envoyeur,
        phone:data.phonereceveur
    })
    .then(res=>{
        history.push(`/confirmationenvoiviacodeworker/${res.data.id}/${res.data.nature}`)
    })
    .catch(()=>{
        erreur()
    })
     
    }

    
   }
   
    return (
     
        <div>
         <h1 className='container'>Envoi par code GaalguiMoney</h1>
        <div className='divform'> 
        <form className="formdepot" onSubmit={confirmation} >
        <div className="w3-section">
        <p className='centerbtn'> <label><b>Nom complet du beneficiaire</b></label></p>
          <input className="w3-input w3-border w3-margin-bottom" type="text" 
           name='receveur'
          onChange={handledata} required/>
          <p className='centerbtn'> <label><b>Nom complet du client </b></label></p>
          <input class="w3-input w3-border w3-margin-bottom" type="text"
           name='envoyeur'
           onChange={handledata} required/>
          <p className='centerbtn'> <label><b>Numero telephone du beneficiaire</b></label></p>
          <input class="w3-input w3-border"
          name='phonereceveur'
           type="tel" defaultValue='+221' onChange={handledata} required />
          <p className='centerbtn'> <label><b>Somme</b></label></p>
          <input className="w3-input w3-border" type="number"
           name='somme'
           onChange={handledata} required /><br/><br/>
           <p> <label><b>La commission</b></label></p>
           <p>
           <select
           onChange={handledata}
           name='commission'
           required
           >
           <option  value="" disabled selected >Selectionnez le mode de payement de la commission</option>
           <option value='1' >Commission non incluse</option>
           <option value='2'>Commission incluse</option>
           </select>
         </p>

          <p className='centerbtn'> 
          <button className="w3-button w3-round-xxlarge w3-green w3-margin" type="submit">Confirmer</button></p>  
        </div>
      </form>
        </div>
       </div>
        
    )
}

export default EnvoiCode

import React,{useState,Fragment} from 'react'
import axiosInstance from '../axios'
import {IonModal,IonGrid,IonCol,IonRow,IonCard} from '@ionic/react'
import { useHistory } from 'react-router-dom';
import {toast } from 'react-toastify'


function Depot() {
    const  [data, setdata] = useState({
        phone:'',
        somme:''
    })
    const history=useHistory()
    const handledata=e=>{
      setdata({
        ...data,[e.target.name]: e.target.value.trim()
      })
    }
    const erreur = () => toast.error("Erreur!Entrez des donnees valides",{
        position:toast.POSITION.TOP_CENTER,
        autoClose:false
      });
    const handlesubmit=e=>{
        e.preventDefault()
        if(data.somme<0||data.somme===""||data.phone==="")
        {
            erreur()
            return;
        }
       axiosInstance
       .post('staff/getclientdepot/',{phone:data.phone,somme:data.somme})
       .then(res=>{
         history.push(`/confirmationdepot/${res.data.depot}/${res.data.nature}`)
       })
       .catch(()=>{
        erreur()
       })

    }
    
    return (
        <div >
        <h1 className='container'>Depot GaalguiMoney</h1>
        <div className='divform'>
     <form className="formdepot" onSubmit={handlesubmit}>
        <div className="w3-section">  
         <p className='pcentre'> <label><b>Numero de telephone du client</b></label></p>
          <input className="w3-input w3-border" type="tel" defaultValue='+221' onChange={handledata}
          name='phone' required />
          <p className='pcentre'> <label><b>Somme</b></label></p>
          <input className="w3-input w3-border" type="number" name='somme' onChange={handledata} required />
          <p className='centerbtn'>  
          <button className="w3-button w3-round-xxlarge w3-green w3-margin" type="submit">Deposer</button></p>    
        </div>
      </form> 
      </div>    
        </div>
    )
}

export default Depot

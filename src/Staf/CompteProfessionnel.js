import React,{useState,useEffect,useRef} from 'react'
import axiosInstance from '../axios'
import FootStaf from './FootStaf'
import Navigation from './Navigation'
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {Card,} from  'react-bootstrap'
import { useHistory } from 'react-router-dom';
import {IonSelect,IonSelectOption,IonIcon,IonModal,IonCard} from '@ionic/react'
import {camera} from 'ionicons/icons'



function CompteProfessionnel() {
    const [bureaucrate, setbureaucrate] = useState(false)
    const  [region, setregion] = useState([])
    const logoref= useRef(null)
    const  [load, setload] = useState(false)
    const  [modal, setmodal] = useState(false)
    const  [log, setlog] = useState()
    const  [prof, setprof] = useState([])
    const  [data, setdata] = useState({
        phone:'',
        business:'',
        adress:'',
        phone_business:'',
        region_id:'',
        logo:''
    })
    const history=useHistory()
    const handledata=e=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const notify = () => toast.success("Compte professionnel crée avec succes!",{
        position:toast.POSITION.TOP_CENTER,
        autoClose:false
      });
      const erreur = () => toast.error("Erreur!Verifiez les credentiels entres",{
        position:toast.POSITION.TOP_CENTER,
        autoClose:false
      });
    const handlelogo=e=>{
      setdata({...data,logo:e.target.files[0]})
      setlog(URL.createObjectURL(e.target.files[0]))
      setload(true)
    }

    useEffect(()=>{
      axiosInstance
      .get('staff/adress/')
      .then(res=>{
        setregion(res.data)
      })

    },[])
    useEffect(()=>{
        axiosInstance
        .get('staff/isbureaucrate/')
        .then(res=>{
          setbureaucrate(res.data)
          
        })
      },[])
      const handleref=()=>{
        logoref.current.click();
      }
      const handleSubmit=e=>{
          e.preventDefault()
          //console.log(data.business,data.phone,data.phone_business,data.region_id,data.logo)
          let formdata=new FormData()
          formdata.append('phone',data.phone)
          formdata.append('business',data.business)
          formdata.append('contact',data.phone_business)
          formdata.append('region_id',data.region_id)
          formdata.append('logo',data.logo)
          axiosInstance
          .post('staff/creationcompteprofessionnel/',formdata)
          .then((res=>{
            console.log(res.data)
             setprof(res.data)
             setmodal(true)
             
          }))
        .catch((()=>{
            erreur()
        }))
      }
    const close=()=>{
      setmodal(false)
       history.push('/accueil')

    }
    return (
        <div>
            {bureaucrate?
        <div>
        <Navigation/>
        <input  type='file'  accept='image/*'    ref={logoref} onChange={handlelogo} style={{display:'none'}} />
        <p style={{textAlign:'center'}}> <label><b>Logo de votre entreprise</b></label></p>
           <button className="w3-input  w3-margin-bottom"  style={{border:'none',background:'none'}}
           onClick={handleref}><IonIcon icon={camera} style={{zoom:3.0}}/></button>
           {load? 
           <Card.Img src={log} alt="" className="img-fluid"  style={{objectFit: 'contain',height: '200px'}}/> :null}
        <form className="w3-container" onSubmit={handleSubmit} >
        <div className="w3-section">
          <p style={{textAlign:'center'}}> <label><b>Nom de l entreprise</b></label></p>
          <textarea className="w3-input w3-border w3-margin-bottom" rows="2" cols="50" required 
          onChange={handledata} name='business'/>
           <br/><br/>
           <p style={{textAlign:'center'}}> <label><b>Location de votre entreprise</b></label></p>
           <IonSelect
              placeholder='Location de votre entreprise'
              okText='choisir'
              cancelText='annuler'
              onIonChange={handledata}
              name='region_id'
              >
                 {region.map((c)=>
                 <IonSelectOption value={c.id} key={c.id}>{c.region}</IonSelectOption>
                 )}
             </IonSelect>
          <p style={{textAlign:'center'}}> <label><b>Numero de telephone de travail </b></label></p>
          <input className="w3-input w3-border" type="tel" defaultValue='+221' name='phone_business'
           onChange={handledata} required />
         <p style={{textAlign:'center'}}> <label><b>Numero de telephone lié au  compte GaalguiMoney </b></label></p>
          <input className="w3-input w3-border" type="tel" defaultValue='+221' name='phone'
           onChange={handledata} required />
  
          <button class="w3-button w3-block w3-green w3-section w3-padding" type="submit">Soumettre</button>
          </div>
         </form>
         <FootStaf/>
        </div>:null}
        <IonModal
        isOpen={modal}
        swipeToClose={true}
        // presentingElement={router || undefined}
         onDidDismiss={() => setmodal(false)}
        >
      <IonCard>
        <h3>Compte professionnel de  {prof.business} crée</h3>
        <Card.Img src={`http://127.0.0.1:8000${prof.logo}`} alt="" className="img-fluid"  style={{objectFit: 'contain',height: '200px'}}/>

      </IonCard>
      <button class="w3-button w3-block w3-green w3-section w3-padding" onClick={close}>ok</button> 

          

        </IonModal> 
        </div>

        
    )
}

export default CompteProfessionnel

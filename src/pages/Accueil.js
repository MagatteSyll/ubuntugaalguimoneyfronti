import React,{Fragment,useEffect,useState} from 'react'
import axiosInstance from '../axios';
import AccueilStaff from '../Staf/AccueilStaff';
import '../component/style.css'
import AccueilDesk from '../component/desktop/AccueilDesk'
import AccueilMobile from '../component/mobile/AccueilMobile'


function Accueil({isstaf,user}) {
    const  [load, setload] = useState(false)
    const [message,setmessage]=useState([])
  
   useEffect(()=>{
       getlastmessage()
    },[])
   const getlastmessage=()=>{
       axiosInstance
        .get('client/lastmessage/')
        .then((res=>{
            setmessage(res.data)
            setload(true)
        })) 
   }
   const getpay=()=>{

   }

   const getaction=()=>{
    
   }
    
    return ( 
        
        <Fragment> 
        {isstaf?<AccueilStaff />:
        <div>
        {load?
        <>
        <AccueilDesk user={user} message={message}/>
        <AccueilMobile user={user}  message={message}/>
        </>:null}
        </div>}
       
        </Fragment>
    )
}

export default Accueil

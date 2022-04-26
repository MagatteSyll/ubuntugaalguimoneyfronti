import React,{useState,useEffect, Fragment} from 'react'
import RecuDesk from '../component/desktop/RecuDesk'
import RecuMobile from '../component/mobile/RecuMobile'
import { useParams } from 'react-router-dom';
import axiosInstance from '../axios'




function Recu() {
   const {id}=useParams()
   const {transaction}=useParams()
    const  [code, setcode] = useState(true)
    const  [recu, setrecu] = useState([])
    const  [load, setload] = useState(false)

    useEffect(()=>{
      axiosInstance
      .post('client/messagespecifique/',{'id':id})
      .then(res=>{ 
        //console.log(res.data)
        setrecu(res.data)
        setload(true) 
      })

    },[])

    return (
     <Fragment>
       {load && recu.nature_transaction===transaction?
       <div>
       <RecuDesk recu={recu} />
       <RecuMobile recu={recu} />
       </div>:null}
            
     </Fragment>   
     
       
    )
}

export default Recu

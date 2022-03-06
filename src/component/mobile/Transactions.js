import React  ,{useState,useEffect} from 'react'
import axiosInstance from '../../axios'


function Transactions() {
    const  [message, setmessage] = useState([])
    const  [load, setload] = useState(false)
    const [showLoading, setShowLoading] = useState(true);
    

    useEffect(()=>{
        axiosInstance
        .get('client/lastmessage/')
        .then((res=>{
            //console.log(res.data)
            setmessage(res.data)
            setload(true)
        }))
    },[])
    return (
        <div>
           Transactions
        </div>
    )
}

export default Transactions

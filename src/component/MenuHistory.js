import React,{useState} from 'react'
import Box from '@material-ui/core/Box';
import {IonIcon, IonSegment, IonSegmentButton, IonText,IonLabel,IonItem,IonCard} from '@ionic/react'
import {Link} from 'react-router-dom'
import Pagination from './Pagination'





const searchnature=(message,nature)=>{
   if(message.some(m=> m.nature_transaction ===nature)){
    return true
} else{
    return false
}
  }
function MenuHistory({messages}) {
  const [ghisto, setghisto] = useState(true)
  const  [seg, setseg] = useState('ghistory')
  const [direct, setdirect] = useState(false)
  const [code, setcode] = useState(false)
  const [pay, setpay] = useState(false)
  const [retrait, setretrait] = useState(false)
  const [depot, setdepot] = useState(false)
  const [reception, setreception] = useState(false)

  
  


    const history=()=>{
      setghisto(true)
      setdirect(false)
      setcode(false)
      setpay(false)
      setretrait(false)
      setdepot(false)
      setreception(false)
      setseg('ghistory')
     
    } 
    const handleenvoidirect=()=>{
     setdirect(true)
     setghisto(false)
     setcode(false)
     setpay(false)
     setretrait(false)
     setdepot(false)
     setreception(false)
     setseg('directhistory')

    }
    const handlecode=()=>{
      setcode(true)
      setghisto(false)
      setdirect(false)
      setpay(false)
      setretrait(false)
      setdepot(false)
      setreception(false)
      setseg('codehistory')
    }
    const handlepayement=()=>{
      setpay(true)
      setghisto(false)
      setdirect(false)
      setcode(false)
      setretrait(false)
      setdepot(false)
      setreception(false)
      setseg('payementhistory')
    }
    const handleretrait=()=>{
      setretrait(true)
      setghisto(false)
      setdirect(false)
      setcode(false)
      setpay(false)
      setdepot(false)
      setreception(false)
      setseg('retraithistory')
    }
    const handledepot=()=>{
      setdepot(true)
      setghisto(false)
      setdirect(false)
      setcode(false)
      setpay(false)
      setretrait(false)
      setreception(false)
      setseg('depothistory')
    }
    const handlereception=()=>{
      setreception(true)
      setghisto(false)
      setdirect(false)
      setcode(false)
      setpay(false)
      setretrait(false)
      setdepot(false)
      setseg('receptionhistory')
    }
    return (
        <div className='displayside'>
       <IonSegment scrollable value={seg}  >
         <IonSegmentButton onClick={history}  value='ghistory' checked className='buttonmenu'>
         <IonLabel>Tout</IonLabel>
         </IonSegmentButton>
         <IonSegmentButton   onClick={handleenvoidirect} value='directhistory' className='buttonmenu'>     
         <IonLabel>Direct</IonLabel>
         </IonSegmentButton >
         <IonSegmentButton onClick={handlecode} value='codehistory' className='buttonmenu'>
         <IonLabel> Via code</IonLabel>
         </IonSegmentButton>
         <IonSegmentButton onClick={handlepayement} value='payementhistory' className='buttonmenu'>
         <IonLabel>Payement</IonLabel>
         </IonSegmentButton>
         <IonSegmentButton onClick={handleretrait} value='retraithistory' className='buttonmenu'>
         <IonLabel>Retrait</IonLabel>
    
         </IonSegmentButton>
         <IonSegmentButton onClick={handledepot} value='depothistory' className='buttonmenu'>
        
         <IonLabel>Depot</IonLabel>
       
         </IonSegmentButton>
         <IonSegmentButton onClick={handlereception} value='receptionhistory' className='buttonmenu'>
         
         <IonLabel>Reception</IonLabel>
      
         </IonSegmentButton>
        </IonSegment> 
        <div className='divhistory'>
        {ghisto?<HistoriqueGenerales messages={messages}/>:null}
        {direct?<HistoryEnvoiDirectMobile messages={messages} />:null}
        {code?<HistoryCodeMobile messages={messages} />:null}
        {pay?<HistoryPayementMobile messages={messages} />:null}
        {retrait?<HistoryRetraitMobile messages={messages} />:null}
        {depot?<HistoryDepotMobile messages={messages}/>:null}
        {reception?<HistoriqueReceptionMobile messages={messages}/>:null}
        </div>

        </div>
    )
}

function HistoriqueGenerales({messages}) { 
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = messages.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
   return (
       <div >
          <IonCard>
          {messages.length>0?
           <div className='mt-3'>
               {currentPosts.map(m=>
           <IonItem key={m.id}>
           <Link to={`/recu/${m.id}/${m.nature_transaction}`} className='link'>
            {m.message},{new Date(m.created).toLocaleDateString('en-GB',
                     {hour: '2-digit', minute:'2-digit'})}</Link>
            </IonItem>)}
         <Pagination
        postsPerPage={postsPerPage}
        totalPosts={messages.length}
        paginate={paginate}
      />
         </div>:<IonItem> <IonLabel>Oups vous n avez effectué aucune transaction</IonLabel></IonItem>}
        </IonCard>
       </div>
   )
}
function  HistoriqueReceptionMobile({messages}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = messages.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div>
           {messages.length>0?
            <>
           {searchnature(messages,"reception")?
            <div className='mt-3'>
                {messages.map(m=>
              m.nature_transaction==="reception"?
            <IonItem key={m.id}>
           <Link to={`/recu/${m.id}/{m.nature_transaction}`} className='link'>
           {m.message},{new Date(m.created).toLocaleDateString('en-GB',
                     {hour: '2-digit', minute:'2-digit'})}</Link> 
             </IonItem>:null )}
            <Pagination
          postsPerPage={postsPerPage}
          totalPosts={messages.length}
          paginate={paginate}
      />  
          </div>:<IonItem> <IonLabel>Aucun transfert reçu</IonLabel></IonItem>}
    </>:<IonItem> <IonLabel>Aucune transaction</IonLabel></IonItem>}
        </div>
    )
}


function  HistoryCodeMobile({messages}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = messages.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div >
           {messages.length>0?
            <>
            {searchnature(messages,"envoi via code")?
            <div className='mt-3'>
                {messages.map(m=>
              m.nature_transaction==="envoi via code"?
            <IonItem key={m.id}>
           <Link to={`/recu/${m.id}/{m.nature_transaction}`} className='link'> 
           {m.message},{new Date(m.created).toLocaleDateString('en-GB',
                     {hour: '2-digit', minute:'2-digit'})}</Link>
             </IonItem>:null
          )}
            <Pagination
        postsPerPage={postsPerPage}
        totalPosts={messages.length}
        paginate={paginate}
      />
 </div>:<IonItem> <IonLabel> Oups vous n avez effectué aucun envoi via code . </IonLabel></IonItem>}
 </>:<IonItem> <IonLabel> Oups vous n avez effectué aucune transaction . </IonLabel></IonItem>}
        </div>
    )
}

function HistoryDepotMobile({messages}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = messages.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
   return ( 
       <div>
          {messages.length>0?
            <>
            {searchnature(messages,"depot")?
           <div className='mt-3'>
               {messages.map(m=>
            m.nature_transaction==="depot"?
           <IonItem key={m.id}>
          <IonItem className='centerbtn' >
          <Link to={`/recu/${m.id}/{m.nature_transaction}`} className='link'> 
          {m.message},{new Date(m.created).toLocaleDateString('en-GB',
                     {hour: '2-digit', minute:'2-digit'})}</Link></IonItem>
            </IonItem>:null)}
         <Pagination
        postsPerPage={postsPerPage}
        totalPosts={messages.length}
        paginate={paginate}
      />
         </div>:<IonItem> <IonLabel>Oups vous n avez effectué aucun depot</IonLabel></IonItem>}
      </>: <IonItem> <IonLabel>Oups vous n avez effectué aucune transaction</IonLabel></IonItem>}</div>
   )
       
}

function HistoryEnvoiDirectMobile({messages}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = messages.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
   
    return (
        <div >
           {messages.length>0?
            <>
            {searchnature(messages,"envoi direct")?
            <div className='mt-3'>
                {messages.map(m=>
            m.nature_transaction==="envoi direct"?
            <IonItem key={m.id}>
           <Link to={`/recu/${m.id}/${m.nature_transaction}`} className='link'>
                 {m.message},{new Date(m.created).toLocaleDateString('en-GB',
                     {hour: '2-digit', minute:'2-digit'})}
                 </Link>
             </IonItem>:null
          )}
           <Pagination
          postsPerPage={postsPerPage}
          totalPosts={messages.length}
         paginate={paginate}
        />
          </div>:<IonItem><IonLabel>Oups vous n avez effectué aucun envoi direct</IonLabel></IonItem>}
          </>:<IonItem><IonLabel>Oups vous n avez effectué aucune transaction</IonLabel></IonItem>}
          </div>
            
        
    )
}

  function HistoryPayementMobile({messages}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = messages.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div >
           <IonCard>
           {messages.length>0?
            <>
            {searchnature(messages,"payement")?
            <div className='mt-3'>
                {messages.map(m=>
            m.nature_transaction==="payement"?
            <IonItem key={m.id}>
           <Link to={`/recu/${m.id}/${m.nature_transaction}`} className='link'>
                {m.message},{new Date(m.created).toLocaleDateString('en-GB',
                     {hour: '2-digit', minute:'2-digit'})}
                </Link>
             </IonItem>:null)}
            <Pagination
          postsPerPage={postsPerPage}
          totalPosts={messages.length}
         paginate={paginate}
        /> 
          </div>:<IonItem> <IonLabel>Oups vous n avez effectué aucun payement</IonLabel></IonItem>}
          </>:<IonItem> <IonLabel>Oups vous n avez effectué aucune transaction</IonLabel></IonItem>}
         </IonCard>

        </div>
    )
}

function  HistoryRetraitMobile({messages}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = messages.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div >
           
            {messages.length>0?
            <>
            {searchnature(messages,"retrait")?
            <div className='mt-3'>
                {messages.map(m=>
                  m.nature_transaction==="retrait"?
            <IonItem key={m.id}>
           <Link to={`/recu/${m.id}/${m.nature_transaction}`} className='link'> 
            {m.message},{new Date(m.created).toLocaleDateString('en-GB',
                     {hour: '2-digit', minute:'2-digit'})}
            </Link>
             </IonItem>:null
          )}
          <Pagination
          postsPerPage={postsPerPage}
          totalPosts={messages.length}
         paginate={paginate}
        />
          </div>:<IonItem><IonLabel>Oups vous n avez effectué aucun retrait</IonLabel></IonItem>}
         </>:<IonItem><IonLabel>Oups vous n avez effectué aucune transaction</IonLabel></IonItem>}
        </div>
    )
}










export default MenuHistory


import React,{useEffect,useState} from 'react'
import {IonItem,IonText } from '@ionic/react'
import {Link} from 'react-router-dom'
import Pagination from '../Pagination'




//Toute l historique sur destop
function HistoriqueGeneralesDesk(props) {
    const message =props.messages
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = message.slice(indexOfFirstPost, indexOfLastPost);
   const paginate = pageNumber => setCurrentPage(pageNumber);
    
    return (
        <div className='desk'>
        <div className='content'>    
        <div>
       {message.length>0?
       <div>
       <h3 style={{textAlign:'center'}}>Dernières Transactions</h3>
       <div  style={{width:'75%',textAlign:'center'}}>
      {currentPosts.map(m=>
     <IonItem  key={m.id}  >
         <Link to={`/recu/${m.id}`} style={{textDecoration:'none',color:'black'}} ><IonText>{m.message},{new Date(m.created).toLocaleDateString()}
         </IonText></Link></IonItem> )}
         <Pagination
        postsPerPage={postsPerPage}
        totalPosts={message.length}
        paginate={paginate}
      /></div>
    </div>:null}
    </div>
       </div>
       </div>
      
    )
}


export default HistoriqueGeneralesDesk

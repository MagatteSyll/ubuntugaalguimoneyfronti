import React,{useState} from 'react'
import {IonCard, IonItem} from '@ionic/react'
import {Link} from 'react-router-dom'
import Pagination from '../Pagination'


function HistoryCodeDesk(props) {
    const message=props.message
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = message.slice(indexOfFirstPost, indexOfLastPost);
   const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='desk'> 
        <div className='content'>
        <div className='histo'>
       {currentPosts.length>0?
       <div className='container'>
      {message.map(m=>
     <IonItem > <Link to={`/recu/${m.id}`} style={{textDecoration:'none',color:'black'}}>
        {m.message},{new Date(m.created).toLocaleDateString()} </Link></IonItem>
    )}
    <Pagination
        postsPerPage={postsPerPage}
        totalPosts={message.length}
        paginate={paginate}
      />
    
    </div>:<h1 style={{color:'magenta'}}>Aucun envoi via code effectué.</h1>}
    </div>
        </div>
        </div>
    )
}

export default HistoryCodeDesk


import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useHistory} from 'react-router-dom'

function CompteProfessionnel() {
    const history=useHistory()

   
const handledata=e=>{

   }
const annulation=()=>{
 history.push('/accueil')
}

    return (
        <div>
    <p className='m-4'>
     <button onClick={annulation} className='btndrop'><ArrowBackIcon className='iconsocial'/></button></p>
       <h1 className='container'>Creation de  Compte professionnel GaalguiMoney</h1>
        <form>

        </form>
        </div>

        
    )
}

export default CompteProfessionnel

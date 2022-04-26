import Nouveautes from './Nouveautes';
import CarouselPub from './CarouselPub';

//page accueil  officielle 


function HomeOfficiel({pub}) {

    return (
        <div> 
        <CarouselPub pub={pub}/>
         <Nouveautes/> 
        </div>
    )
}

export default HomeOfficiel

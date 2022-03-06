import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {refreshOutline, locationOutline, pricetagOutline,helpOutline } from 'ionicons/icons';
import {IonIcon, IonLabel} from '@ionic/react'
import LastHistorique from './LastHistorique'
import PayementMobile from './PayementMobile';

function Tabu() {
    return (
        <div>
    <Tabs>
      <TabList>
      <Tab> <IonIcon icon={refreshOutline} />
      <IonLabel>Historique</IonLabel>
      </Tab>
      <Tab> <IonIcon icon={locationOutline} />
      <IonLabel>Points d acces </IonLabel>
      </Tab>
      <Tab> <IonIcon icon={helpOutline} />
      <IonLabel>A venir</IonLabel>
      </Tab>
     </TabList>
    <TabPanel>
    <LastHistorique/>
    </TabPanel>
    <TabPanel>
     location
    </TabPanel>
    <TabPanel>
    Prochainement 
    </TabPanel>
    </Tabs>   
        </div>
    )
}

export default Tabu

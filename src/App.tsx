import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { addCircle, person, leaf } from "ionicons/icons";
import Plants from "./pages/Plants/Plants";
import AddPlant from "./pages/AddPlant";
import Profile from "./pages/Profile";
import Details from "./pages/Details";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

const App: React.FunctionComponent = () => (
  <IonApp>
    <IonReactRouter>
      <IonPage id="main">
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/:tab(Plants)" component={Plants} exact={true} />
            <Route path="/:tab(AddPlant)" component={AddPlant} exact={true} />
            <Route path="/:tab(AddPlant)/details" component={Details} />
            <Route path="/:tab(Profile)" component={Profile} />
            <Route exact path="/" render={() => <Redirect to="/Plants" />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom" color="success">
            <IonTabButton tab="Plants" href="/Plants">
              <IonIcon icon={leaf} />
              <IonLabel>Plants</IonLabel>
            </IonTabButton>
            <IonTabButton tab="AddPlant" href="/AddPlant">
              <IonIcon icon={addCircle} />
              <IonLabel>Add Plant</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Profile" href="/Profile">
              <IonIcon icon={person} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonPage>
    </IonReactRouter>
  </IonApp>
);

export default App;

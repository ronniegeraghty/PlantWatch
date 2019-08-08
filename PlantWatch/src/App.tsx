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
import { addCircle, leaf, person } from "ionicons/icons";
import Plants from "./pages/Plants";
import AddDevice from "./pages/AddDevice";
import Profile from "./pages/Profile";
import Details from "./pages/Details";

/* Core CSS required for Ionic components to work properly */
import "@ionic/core/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/core/css/normalize.css";
import "@ionic/core/css/structure.css";
import "@ionic/core/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/core/css/padding.css";
import "@ionic/core/css/float-elements.css";
import "@ionic/core/css/text-alignment.css";
import "@ionic/core/css/text-transformation.css";
import "@ionic/core/css/flex-utils.css";
import "@ionic/core/css/display.css";

const App: React.FunctionComponent = () => (
  <IonApp>
    <IonReactRouter>
      <IonPage id="main">
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/:tab(Plants)" component={Plants} exact={true} />
            <Route path="/:tab(AddDevice)" component={AddDevice} exact={true} />
            <Route path="/:tab(AddDevice)/details" component={Details} />
            <Route path="/:tab(Profile)" component={Profile} />
            <Route exact path="/" render={() => <Redirect to="/Plants" />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="Plants" href="/Plants">
              <IonIcon icon={leaf} />
              <IonLabel>Plants</IonLabel>
            </IonTabButton>
            <IonTabButton tab="AddDevice" href="/AddDevice">
              <IonIcon icon={addCircle} />
              <IonLabel>Add Device</IonLabel>
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

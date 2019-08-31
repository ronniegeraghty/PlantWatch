import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonToast
} from "@ionic/react";
import { send } from "ionicons/icons";
import React from "react";
import "./Plants.css";
import JadePic from "../../assets/jade.png";

interface Plant {
  name: string;
  picture: string;
  WaterLvl: number;
  UVLvl: number;
}

interface State {
  showToast: boolean;
}

class Plants extends React.Component<Plant, State> {
  jade: Plant = {
    name: "Jade",
    picture: JadePic,
    WaterLvl: 45,
    UVLvl: 75
  };

  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar color="success">
            <IonTitle>Plants</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <img src={this.jade.picture} alt="" />
            <IonCardHeader>
              <IonCardTitle>{this.jade.name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent></IonCardContent>
          </IonCard>
        </IonContent>
      </>
    );
  }
}

export default Plants;

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonList,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/react";
import React from "react";
import PlantGraph from "../components/PlantGraph";
import "./Plants.css";

const Plants: React.FunctionComponent = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Plants</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Plant 1</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <PlantGraph />
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonList>
      </IonContent>
    </>
  );
};

export default Plants;

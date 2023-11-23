import { FC } from "react";
import { AppContainer } from "./styles";
import { Card } from "./components/Card";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";

export const App = () => {
  return (
  <AppContainer>
    <Column text="Por hacer">
      <Card text="Generar plantilla de la app"/>
    </Column>
    <Column text="En progreso">
      <Card text="Aprender Typescript"/>
    </Column>
    <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log}/>
  </AppContainer>
  );
}

export default App;

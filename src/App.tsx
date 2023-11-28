import { FC } from "react";
import { AppContainer } from "./styles";
import  { addList } from "./state/actions";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";
import { useAppState } from "./state/AppStateContext";



export const App = () => {

  const { lists, dispatch } = useAppState() 

  return (
  <AppContainer>
    {lists.map((list) => (
      <Column text={list.text} key={list.id} id={list.id}/>
    ))}
    <AddNewItem toggleButtonText="+ Add another list" onAdd={text => dispatch(addList(text))}/>
  </AppContainer>
  );
}

export default App;

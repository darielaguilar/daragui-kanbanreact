import { createContext, useReducer,useContext,Dispatch, FC } from "react"
import { appStateReducer,AppState,List,Task } from "./appStateReducer"
import { useImmerReducer } from 'use-immer'
import { Action } from "./actions"
import { DragItem } from "../DragItem"
//-------------------------------------------------
//Tipos 


type AppStateProviderProps = {
    children?: React.ReactNode
}




type AppStateContextProps = {
    draggedItem: DragItem | null
    lists: List[],
    getTasksByListId(id: string): Task[]
    dispatch: Dispatch<Action>

}
/* ############################# */

//Aqui creamos el contexto con un objeto vacio para la funcion de createContext
const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps) 



//Proveedor para el estado global de la app
export const AppStateProvider:FC<AppStateProviderProps> = ({ children }) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData)

    const { draggedItem,lists } = state

    const getTasksByListId = (id: string) => {
        return lists.find((list)=> list.id === id)?.tasks || []
    }

    return (
        <AppStateContext.Provider value={{ draggedItem,lists, getTasksByListId, dispatch}}>
            {children}
        </AppStateContext.Provider>
    )
}

//Hook personalizado para usar el contexto global
export const useAppState = () => {
    return useContext(AppStateContext)
}


//Data estatica para usar en el context
const appData: AppState = {
        draggedItem: null,
        lists: [
            {
                id: "0",
                text: "Aprendiendo a usar la app",
                tasks: [
                    {
                        id: "c0", 
                        text:"Las columnas se pueden arrastrar",
                        state:"FINISHED"
                    },
                    {
                        id: "c1", 
                        text:"Se pueden crear nuevas tareas y columnas",
                        state: "FINISHED"
                    }
                ]
            },
            {
                id: "1",
                text: "En progreso",
                tasks: [
                    {
                         id:"c2",
                         text:"Agregando funcionalidad de borrar tareas",
                         state: "PENDING"
                        }
                    ]
            },
            {
                id: "2",
                text: "Hecho",
                tasks: [{
                     id:"c3", 
                     text:"Organizado lugar de trabajo",
                     state: "PENDING"
                    }]
            }
        ],
    }
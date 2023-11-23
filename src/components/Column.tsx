import { ColumnContainer, ColumnTitle } from "../styles"
import { AddNewItem } from "./AddNewItem"
import { FC } from "react"


type ColumnProps = {
    text: string
    children?: React.ReactNode;
}


export const Column: FC<ColumnProps> = ({text, children}) => {
    return (
    <ColumnContainer>
        <ColumnTitle>{text}</ColumnTitle>
        {children}
        <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
        />
    </ColumnContainer>
    )
}
import { FC } from "react";
import { CardContainer } from "../styles"

type CardProps = {
    id: string
    text: string;
}

export const Card: FC<CardProps> = ({text}) =>{
    return (
    <CardContainer>{text}</CardContainer>
    )
}
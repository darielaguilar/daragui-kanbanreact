import { FC } from "react";
import { CardContainer } from "../styles"

type CardProps = {
    text: string;
}

export const Card: FC<CardProps> = ({text}) =>{
    return (
    <CardContainer>{text}</CardContainer>
    )
}
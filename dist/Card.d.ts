import React from "react";
import "./Card.css";
interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    className?: string;
}
declare const Card: React.FC<CardProps>;
export default Card;

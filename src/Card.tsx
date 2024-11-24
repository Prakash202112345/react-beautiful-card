import React from "react";
import clsx from "clsx";
import "./Card.css";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, className }) => {
  return (
    <div className={clsx("card", className)}>
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;

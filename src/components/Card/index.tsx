import React from 'react';
import { Container } from './styles';

export enum CardOptions {
    list,
    videosdetails
};
export interface CardProps {
    thumbImg: string;
    option?: CardOptions;
}

const Card: React.FC<CardProps> = ({ thumbImg, option = CardOptions.list}) => {
    return (
        <Container thumbImg={thumbImg} option={option}></Container>
    );
}

export default Card;
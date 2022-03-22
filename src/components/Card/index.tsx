import React from 'react';
import { Container } from './styles';

export interface CardProps {
    thumbImg: string;
}

const Card: React.FC<CardProps> = ({ thumbImg }) => {
    return (
        <Container thumbImg={thumbImg}></Container>
    );
}

export default Card;
import styled from 'styled-components';
import { CardProps } from './index'

export const Container = styled.div<CardProps>`
    cursor: pointer;
    width: 100%;
    height: 158px;
    background-color: var(--dark);
    background-image: url(${props => props.thumbImg});
    background-size: cover;
    background-position: 50%;
    margin-right: 100px;
    transition: .2s;
    border: 2px solid var(--dark);

    &:hover{
       border: 2px solid var(--primary);
       transform: scale(1);
    }
`;
import styled from 'styled-components';
import { CardOptions, CardProps } from './index'

export const Container = styled.div<CardProps>`
    cursor: pointer;
    width: 100%;
    height: ${props => props.option === CardOptions.videosdetails ? '200px' : '158px'};
    background-color: var(--dark);
    background-image: url(${props => props.thumbImg});
    background-size: cover;
    background-position: 50%;
    margin-right: 100px;
    margin-top: ${props => props.option === CardOptions.videosdetails ? '1rem' : '0px'};
    transition: .2s;
    border: 2px solid var(--dark);
    &:hover{
        border: 2px solid var(--primary);
        transform: scale(1);
    }

    @media(max-width: 1440px) {
        width: ${props => props.option === CardOptions.videosdetails ? '100%' : '300px'};
        height: ${props => props.option === CardOptions.videosdetails ? '250px' : '158px'};

    }
    @media(max-width: 1024px) {
        width: ${props => props.option === CardOptions.videosdetails ? '100%' : '300px'};
        height: ${props => props.option === CardOptions.videosdetails ? '600px' : '180px'};

    }
    @media(max-width: 768px) {
        width: ${props => props.option === CardOptions.videosdetails ? '100%' : '300px'};
        height: ${props => props.option === CardOptions.videosdetails ? '400px' : '170px'};

    }

    @media(max-width: 480px) {
        width: 100%;
        height: 200px;

    }
    `;
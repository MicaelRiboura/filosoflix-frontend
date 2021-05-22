import React from 'react';
import { Section, Content } from '../styles/Home';

import Banner from '../components/template/Banner';
import Caroussel from '../components/Caroussel';
import Card from '../components/Card';
import Header from '../components/template/Header';

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Banner />
            <Section>
                <Content>
                    <Caroussel title="Michel Foucault" cards={[1,2,3,4,5,6,7,8,9,10].map(() => {return (<Card></Card>)})}></Caroussel>
                    <Caroussel title="Baruch Espinosa" cards={[1,2,3,4,5,6,7,8,9,10].map(() => {return (<Card></Card>)})}></Caroussel>
                    <Caroussel title="Platão" cards={[1,2,3,4,5,6,7,8,9,10].map(() => {return (<Card></Card>)})}></Caroussel>
                    <Caroussel title="Schopenhauer" cards={[1,2,3,4,5,6,7,8,9,10].map(() => {return (<Card></Card>)})}></Caroussel>
                    <Caroussel title="Clóvis de Barros" cards={[1,2,3,4,5,6,7,8,9,10].map(() => {return (<Card></Card>)})}></Caroussel>
                    <Caroussel title="Mário Sérgio Cortella" cards={[1,2,3,4,5,6,7,8,9,10].map(() => {return (<Card></Card>)})}></Caroussel>
                    <Caroussel title="Leandro Karnal" cards={[1,2,3,4,5,6,7,8,9,10].map(() => {return (<Card></Card>)})}></Caroussel>
                </Content>
            </Section>
        </>
    );
}

export default Home;
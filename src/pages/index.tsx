import React, { useEffect } from 'react';
import { Section, Content } from '../styles/Home';
import { VideoI } from '../samples/videos.sample';

import Banner from '../components/template/Banner';
import Caroussel from '../components/Caroussel';
import Card from '../components/Card';
import Header from '../components/template/Header';
import { GetServerSideProps } from 'next';

interface PageProps {
    videos: VideoI[];
}

const Home: React.FC<PageProps> = ({ videos }: PageProps) => {
    useEffect(() => {
        console.log(videos)
    }, [])
    return (
        <>
            <Header />
            <Banner />
            <Section>
                <Content>
                    <Caroussel title="Michel Foucault"
                        cards={videos.map(video => {
                            return (
                                <Card thumbImg={video.thumbImg} />
                            )
                        })}>
                    </Caroussel>
                    <Caroussel title="Michel Foucault"
                        cards={videos.map(video => {
                            return (
                                <Card thumbImg={video.thumbImg} />
                            )
                        })}>
                    </Caroussel>
                    <Caroussel title="Michel Foucault"
                        cards={videos.map(video => {
                            return (
                                <Card thumbImg={video.thumbImg} />
                            )
                        })}>
                    </Caroussel>
                    <Caroussel title="Michel Foucault"
                        cards={videos.map(video => {
                            return (
                                <Card thumbImg={video.thumbImg} />
                            )
                        })}>
                    </Caroussel>
                </Content>
            </Section>
        </>
    );
}

export default Home;

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {

    const videos = await fetch('http://localhost:3000/api/videos').then((res) => res.json())

    return {
        props: { videos },
    }
}
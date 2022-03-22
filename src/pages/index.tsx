import React, { useEffect } from 'react';
import { Section, Content } from '../styles/Home';
import { IVideo } from '../samples/videos.sample';

import Banner from '../components/template/Banner';
import Caroussel from '../components/Caroussel';
import Card from '../components/Card';
import Header from '../components/template/Header';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

interface PageProps {
    videos: IVideo[];
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
                    <Caroussel title="Recomendados"
                        cards={videos.map(video => {
                            return (
                                <Link href={`/video/${video.slug}`} >
                                    <a>
                                        <Card thumbImg={video.thumbImg} />
                                    </a>
                                </Link>
                            )
                        })}>
                    </Caroussel>
                    <Caroussel title="Populares"
                        cards={videos.map(video => {
                            return (
                                <Link href={`/video/${video.slug}`} >
                                    <a>
                                        <Card thumbImg={video.thumbImg} />
                                    </a>
                                </Link>
                            )
                        })}>
                    </Caroussel>
                    <Caroussel title="Favoritos"
                        cards={videos.map(video => {
                            return (
                                <Link href={`/video/${video.slug}`} >
                                    <a>
                                        <Card thumbImg={video.thumbImg} />
                                    </a>
                                </Link>
                            )
                        })}>
                    </Caroussel>
                    <Caroussel title="Continuar assistindo"
                        cards={videos.map(video => {
                            return (
                                <Link href={`/video/${video.slug}`} >
                                    <a>
                                        <Card thumbImg={video.thumbImg} />
                                    </a>
                                </Link>
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
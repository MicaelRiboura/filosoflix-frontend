import { GetServerSideProps } from "next";
import { IVideo } from "../../samples/videos.sample";
import {
    Container,
    VideoArea,
    VideoAreaTitle,
    VideoPlayer,
    InfoArea,
    AuthorInfo,
    AuthorThumb,
    TagsArea,
    WatchMoreArea
} from '../../styles/VideoDetail';
import Button from '../../components/forms/Button';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Card, { CardOptions } from "../../components/Card";
import { baseUrl } from "../../config/services";

interface PageProps {
    video: IVideo;
    videos: IVideo[];
}

const VideoDetail: React.FC<PageProps> = ({ video, videos }) => {
    return (
        <Container>
            <VideoArea>
                <VideoAreaTitle>
                    <Link href="/">
                        <a>
                            <Button><AiOutlineArrowLeft />Voltar</Button>
                        </a>
                    </Link>
                    <h1>{video.title}</h1>
                </VideoAreaTitle>
                <VideoPlayer>
                    <iframe className="video" title={video.title} src={`https://www.youtube.com/embed/${video.videoId}?autoplay=0&controls=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </VideoPlayer>
                <p>
                    Atenção! O vídeo disponível no player do Youtube é sem direitos autorais apenas para exemplificar um vídeo na plataforma.
                </p>
            </VideoArea>
            <InfoArea>
                <AuthorInfo>
                    <AuthorThumb image={video.author.avatar} />
                    <h1>{video.author.name}</h1>
                </AuthorInfo>
                <TagsArea>
                    {video.tags.map(tag => (
                        <div>#{tag}</div>
                    ))}
                </TagsArea>
                <WatchMoreArea>
                    <h2>Assista também</h2>
                    {videos.filter(v => v.id !== video.id).map(v => {
                        return (
                            <Link href={`/video/${v.slug}`} >
                                <a>
                                    <Card thumbImg={v.thumbImg} option={CardOptions.videosdetails} />
                                </a>
                            </Link>
                        )
                    })}
                </WatchMoreArea>
            </InfoArea>
        </Container>
    )
}

export default VideoDetail;

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
    const slug = context.params?.slug;

    const video = await fetch(`${baseUrl}/api/videos/${slug}`).then((res) => res.json())
    const videos = await fetch(`${baseUrl}/api/videos`).then((res) => res.json())
    return {
        props: { video, videos },
    }
}
import { GetServerSideProps } from "next";
import { VideoI } from "../../samples/videos.sample";
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
interface PageProps {
    video: VideoI;
}

const VideoDetail: React.FC<PageProps> = ({ video }) => {
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
            </VideoArea>
            <InfoArea>
                <AuthorInfo>
                    <AuthorThumb />
                    <h1>{video.author}</h1>
                </AuthorInfo>
                <TagsArea>
                    <div>#intolerancia</div>
                    <div>#religiao</div>
                    <div>#karnal</div>
                    <div>#reflexão</div>
                </TagsArea>
                <WatchMoreArea>
                    <h2>Assista também</h2>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </WatchMoreArea>
            </InfoArea>
        </Container>
    )
}

export default VideoDetail;

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
    const slug = context.params?.slug;
    const video = await fetch(`http://localhost:3000/api/videos/${slug}`).then((res) => res.json())

    return {
        props: { video },
    }
}
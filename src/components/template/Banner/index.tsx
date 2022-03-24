
import { Container, ContainerInfo, Description } from './styles';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

const Banner: React.FC = () => {

    const [isMuted, setMuted] = useState(true);

    const bannerContent = {
        id: 1,
        title: 'Felicidade é aqui e agora',
        author: 'Nome Autor',
        imageAuthor: '/assets/clovis-de-barros.png'
    }

    const LoadVideo = useCallback(() => {
        return (
          <video
            className="video"
            controls
            autoPlay={true}
            loop={true}
            muted={isMutedRef.current}
          >
            <source src="/assets/videos/banner.mp4" type="video/mp4" />
          </video>
        );
    }, []);

    const isMutedRef = useRef(false);

    useEffect(() => {
        isMutedRef.current = isMuted;
    }, [isMuted])
    return (
      <Container
        onMouseEnter={() => setMuted(true)}
        onMouseLeave={() => setMuted(false)}
      >
        <ContainerInfo>
            <LoadVideo />
          <Description>
            <h1>{bannerContent.title}</h1>
            <p>{bannerContent.author}</p>
            <Link href={`/video/felicidade-e-aqui-e-agora`}>
              <a>
                <button>Assista agora</button>
              </a>
            </Link>
          </Description>
        </ContainerInfo>
      </Container>
    );
}

export default Banner;
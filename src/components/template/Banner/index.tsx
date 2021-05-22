
import { Container, ContainerInfo, Description, Image } from './styles';


const Banner: React.FC = () => {
    const bannerContent =  {
        id: 1,
        title: 'Felicidade é aqui e agora',
        author: 'Clóvis de Barros',
        videoId: 'HsQx02JdZ2Q',
        imageAuthor: '/assets/clovis-de-barros.png'
    }
    return (
        <Container>
            <iframe className="video" title={bannerContent.title} src={`https://www.youtube.com/embed/${bannerContent.videoId}?autoplay=1&controls=0&end=30`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <ContainerInfo>
                <Description>
                    <h1>{bannerContent.title}</h1>
                    <p>{bannerContent.author}</p>
                    <button>Assista agora</button>
                </Description>
                <Image>
                    <img className="js-tilt" src={bannerContent.imageAuthor} alt="Clóvis de Barros" />
                </Image>
            </ContainerInfo>
        </Container>
    );
}

export default Banner;
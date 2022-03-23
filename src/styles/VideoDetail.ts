import styled from 'styled-components';

interface AuthorThumb {
    image: string;
}

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    padding: 1rem .5rem;;
    overflow-x: hidden;
    @media(max-width: 1024px) {
        flex-direction: column;
    }
`;

export const VideoArea = styled.div`
    width: 80%;
    @media(max-width: 1440px) {
        width: 70%;
    }
    @media(max-width: 1024px) {
        width: 100%;
    }
    color: #fff;
`;
export const VideoAreaTitle = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    color: #fff;
    h1 {
        margin-left: 20px;
        font-size: 3rem;
    }

    @media(max-width: 768px) {
        align-items: center;
        padding: 0 .5rem;
        h1 {
            margin-left: 1rem;
            font-size: 2rem;
            line-height: 2rem;
        }
    }

    @media(max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        a{
            margin-left: 1rem;
        }
        h1 {
            margin-top: 1rem;
            margin-left: 1rem;
            font-size: 2rem;
            line-height: 2rem;
        }
    }

     @media(max-width: 375px) {
        h1 {
            margin-top: 1rem;
            margin-left: 1rem;
            font-size: 1.5rem;
            line-height: 2rem;
        }
    }
`;

export const VideoPlayer = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    .video {
        width: 100%;
        height: 100%;
    }

    @media(max-width: 768px) {
        padding: 2rem 0;
        height: 600px;
    }
    @media(max-width: 480px) {
        height: 400px;
    }
`;


export const InfoArea = styled.div`
    width: 20%;
    @media(max-width: 1440px) {
        width: 30%;
    }
    @media(max-width: 1024px) {
        width: 100%;
    }
`;
export const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    color: #fff;

    h1{
        font-size: 1.5rem;
    }
`;
export const AuthorThumb = styled.div<AuthorThumb>`
   border-radius: 50%;
   background-color: #000;
   background-image: url(${props => props.image});
   background-size: cover;
   background-position: 50%;
   width: 50px;
   height: 50px;
   margin-right: 10px;
`;

export const TagsArea = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 0;
    div {
        background-color: var(--primary);
        color: #fff;
        padding: 6px;
        border-radius: 10px;
        text-transform: lowercase;
        margin: 6px;
        cursor: pointer;
    }
`;

export const WatchMoreArea = styled.div`
    padding: 10px;

    h2{
        color: #fff;
        font-size: 1.1rem;
        text-transform: uppercase;
    }
   
`;

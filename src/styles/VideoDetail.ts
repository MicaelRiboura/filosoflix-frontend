import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
`;

export const VideoArea = styled.div`
    width: 80%;
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
`;


export const InfoArea = styled.div`
    width: 20%;
`;
export const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    color: #fff;

    h1{
        font-size: 1.5rem;
    }
`;
export const AuthorThumb = styled.div`
   border-radius: 50%;
   background-color: #000;
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
    div {
        width: 100%;
        height: 200px;
        margin: 10px 0;
        background-color: #000;
        cursor: pointer;
        border: 2px solid var(--bg-color);
        transition: .3s;
        &:hover {
            border: 2px solid var(--primary);

        }
    }
`;

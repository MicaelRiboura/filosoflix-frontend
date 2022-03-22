import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 200px;
    width: 100%;
    height: 90vh;
    background: linear-gradient(0.4deg, #05061C 0.37%, rgba(0, 0, 0, 0.39) 105.06%);
    .video{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: -2;
    }

    @media(max-width: 480px) {
        overflow-x: hidden;
        .video{
            position: fixed;
            transform: scale(4);
            height: 100vh;
            z-index: -2;
        }
    }
`;

export const ContainerInfo = styled.div`
    height: 100%;
    max-height: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    padding: 2rem;
`;

export const Description = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    align-items: flex-start;
    h1{
        font-size: 76px;
        color: var(--white);
        font-weight: extrabold;
        text-transform: uppercase;
        line-height: 96.2%;
        text-align: left;
        margin-bottom: 1rem;
    }
    
    p{
        color: var(--white);
        font-size: 31px;
        text-align: left;
        margin-bottom: 2rem;
    }

    button{
        padding: 10px 33px;
        font-size: 18px;
        text-transform: uppercase;
        border-radius: 10px;
        border: none;
        outline: none;
        cursor: pointer;
        left: 0;
        border: 2px solid var(--primary);
        background: transparent;
        color: var(--white);
        position: relative;
        transition: .7s ease;
        
        &:hover{
            background-color: var(--primary);
        }
    }

    @media(max-width: 480px) {
        width: 100%;
        h1{
            font-size: 49px;
        }
        
        p{
            font-size: 29px;
        }
    }
    @media(max-width: 375px) {
        h1{
            font-size: 39px;
        }
        
        p{
            font-size: 19px;
        }
    }
`;
export const Image = styled.div`
    position: relative;
    img{
        max-width:755px;
        position: absolute;
        left: -195px;
        bottom: 0;
    }
`;
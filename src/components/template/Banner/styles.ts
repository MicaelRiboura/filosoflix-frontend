import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 90vh;
    background: linear-gradient(0.4deg, #05061C 0.37%, rgba(0, 0, 0, 0.59) 105.06%);
    .video{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: -2;
    }
`;

export const ContainerInfo = styled.div`
    height: 100%;
    max-height: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
`;

export const Description = styled.div`
    max-width: 661px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h1{
        font-size: 124px;
        color: var(--white);
        font-weight: extrabold;
        text-transform: uppercase;
        line-height: 96.2%;
        text-align: left;
    }
    
    p{
        color: var(--white);
        font-size: 47px;
        text-align: left;
    }

    button{
        padding: 16px 33px;
        font-size: 18px;
        text-transform: uppercase;
        border-radius: 10px;
        border: none;
        outline: none;
        cursor: pointer;
        left: 0;
        border: 1px solid var(--primary);
        background: transparent;
        color: var(--white);
        position: relative;
        transition: .7s ease;
        
        &:hover{
            background-color: var(--primary);
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
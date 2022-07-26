import styled from "styled-components";

export const Container = styled.div`
    background-color: #0E0E16;
    width: 100%;
    // height: 200px;
`;

export const ContentContainer = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    padding: 1rem;
`;

export const FooterSection = styled.div`
    color: #fff;
    margin: 0 1rem;
    h3 {
        font-weight: 900;
    }
    p {
        font-weight: 400;
        color: rgba(255, 255, 255, 0.72);
    }
    div {
        display: flex;
        align-items: center;
        
    }

    .icon {
        color: #fff;
        width: 30px;
        height: 30px;
        position: relative;
        background-color: #fff;
        margin: .2rem .3rem;
        cursor: pointer;
        border-radius: 50%;
        padding: 2px;
        transition: .4s;
    }

    .icon:hover {
        top: -5px;
    }
`;
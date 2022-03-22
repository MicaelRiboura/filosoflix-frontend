import styled from 'styled-components';


export const Section = styled.div`
    width: 100%;
    min-height: 90vh;
    background: var(--bg-color);
`;

export const Content = styled.div`
    height: 100%;
    position: relative;
    /* margin-top: -20px; */
    padding: 4rem 0;
    min-height: 100%;
    max-width: 1440px;
    margin: 0 auto;
    overflow: hidden;

    @media(max-width: 1440px) {
        max-width: 100%;
        margin: 0 2rem;
    }
`;
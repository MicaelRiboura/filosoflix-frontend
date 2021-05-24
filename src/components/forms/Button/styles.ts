import styled from 'styled-components';

export const ButtonStyled = styled.div`
    background-color: var(--primary);
    padding: 6px;
    outline: none;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: #fff;
    transition: .4s;
    min-width: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: var(--primaryHover);
    }
`;
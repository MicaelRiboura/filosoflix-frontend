import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 105px;
    background-color: var(--header-color);
    position: fixed;
    z-index: 4;
    padding: 0 1rem;
`;

export const Navbar = styled.div`
    /* border: 1px solid red; */
    height: 100%;
    margin: 0 auto;
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
`;

export const Logo = styled.div`
    max-width: 200px;
`;

export const Navcontent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Navlist = styled.ul`
    display: flex;
    align-items: center;
    @media(max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    list-style: none;
    color: rgba(255,255,255, .5);
    font-size: 18px;
    font-weight: medium;
    text-transform: uppercase;
    margin-left: 26px;
    cursor: pointer;
    transition: .7s ease;

    &:hover{
        color: var(--white);
    }
`;

export const NavUser = styled.div`
    display: flex;
    align-items: center;

    .icon{
        font-size: 24px;
        color: var(--white);
        margin-left: 16px;
        cursor: pointer;
    }

    p{
        font-size: 18px;
        color: var(--white);
        margin-right: 16px;
    }

    @media(max-width: 480px) {
        p {
            display: none;
        }
    }
`;

export const Avatar = styled.div`
    background-image: url(https://www.ilriformista.it/wp-content/uploads/2022/02/nietzsche-900x600.jpg);
    background-size: cover;
    background-position: 50%;
    height: 46px;
    width: 46px;
    border-radius: 50%;
`;

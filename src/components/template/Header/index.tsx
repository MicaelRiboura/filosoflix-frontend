// import React, { useContext } from 'react';
import {
    Container, 
    Navbar,
    Navcontent,
    Logo,
    Navlist,
    NavItem,
    NavUser,
    Avatar
} from './styles';

// import LogoImg from '../../assets/images/logo.svg';
// import { useAuth } from '../../contexts/auth';
import { RiLogoutCircleRLine } from 'react-icons/ri';

const Header: React.FC = () => {
    // const { user, signOut } = useAuth();
    return (
        <Container>
            <Navbar>
                <Navcontent>
                    <Logo>
                        <img src="/assets/logo.svg" alt=""/>
                    </Logo>
                    {/* <Navlist>
                        <NavItem>   
                                Home
                        </NavItem>
                        <NavItem>                           
                                Clássicos
                        </NavItem>
                        <NavItem>
                            
                                Brasileiros
                        </NavItem>
                        <NavItem>                            
                                Minha Lista
                        </NavItem>
                    </Navlist> */}
                </Navcontent>
                <NavUser>
                    <p>Usuário</p>
                    <Avatar />
                    <RiLogoutCircleRLine className="icon" />
                </NavUser>
            </Navbar>
        </Container>
    );
}

export default Header;
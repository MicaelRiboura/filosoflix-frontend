import { Container, ContentContainer, FooterSection } from "./styles";

const Footer: React.FC = () => {
    return (
       <Container>
            <ContentContainer>
                <FooterSection>
                    <h3>Criador</h3>
                    <p>Micael Riboura dos Santos</p>
                </FooterSection>
            </ContentContainer>
       </Container>
    );
}

export default Footer;
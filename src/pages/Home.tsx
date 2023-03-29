import React from 'react';
import { ContactNumber, Container, 
    Header, Email, SocialMediaLink, SubContainer } from './Home.style';


const Home = () => {
    return (
   <Container>
    <Header>
        <Email>info@example.com</Email>
        <ContactNumber>0000 - 123456789</ContactNumber> 
        <SocialMediaLink>fc  ins  li</SocialMediaLink>
    </Header>
    <SubContainer>

    </SubContainer>
   </Container>
    )
}
export default Home;

//style={{backgroundColor:'#89c74a', color:'white', height:'60px', alignItems:'center', display:'flex'}}
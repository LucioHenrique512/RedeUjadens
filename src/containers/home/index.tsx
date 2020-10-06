import React from 'react';
import {ImageSlider} from '../../components';
import {Container, DestaquesContainer, StyledText} from './styles';

const Home = () => {
 
  return (
    <Container>
      <DestaquesContainer>
        <StyledText  size={20}>
          Destaques
        </StyledText>
        <ImageSlider />
      </DestaquesContainer>
    </Container>
  );
};

export default Home;

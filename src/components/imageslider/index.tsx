import React from 'react';
import {Container, SlideContainer, StyledImage} from './styled';

const ImageSlider = () => {
  const images = [
    {
      title: 'Imagem teste 1',
      uri:
        'https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      title: 'Teste image 2',
      uri:
        'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      title: 'Imagem Teste 3',
      uri:
        'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
  ];

  return (
    <Container>
      <SlideContainer horizontal={true}>
        {images.map((item, i) => (
          <StyledImage key={i} source={{uri: item.uri}} />
        ))}
      </SlideContainer>
    </Container>
  );
};

export default ImageSlider;

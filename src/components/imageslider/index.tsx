import * as React from 'react';
import {Text} from 'react-native';
import {colors} from '../../constants';

import {
  Container,
  SlideContainer,
  ImageItem,
  ImageItemContainer,
  ImageFooter,
  RippleButton,
} from './styled';

const ImageSlider = () => {
  const images = [
    {
      title: 'Plantas são verdes',
      uri:
        'https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      title: 'Lampadas com plantas',
      uri:
        'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      title: 'Terra marrom com planta',
      uri:
        'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
  ];

  return (
    <Container>
      <SlideContainer horizontal={true} showsHorizontalScrollIndicator={false}>
        {images.map((item, i) => (
          <ImageItemContainer key={i}>
            <RippleButton
              rippleColor={colors.PRIMARY}
              onPress={() => console.log(item)}>
              <ImageItem key={i} source={{uri: item.uri}} />
              <ImageFooter>
                <Text style={{fontWeight: 'bold', color: colors.PRIMARY}}>
                  {item.title}
                </Text>
              </ImageFooter>
            </RippleButton>
          </ImageItemContainer>
        ))}
      </SlideContainer>
    </Container>
  );
};

export default ImageSlider;

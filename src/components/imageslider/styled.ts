import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const Container = styled.View`
  width: 100%;
`;

export const SlideContainer = styled.ScrollView`
  height: ${Math.round(width * 0.5)}px;
  width: 100%;
  background: red;
  overflow: hidden;
  border-radius: 8px;
`;

export const StyledImage = styled.Image`
border-radius: 8px;
  height: 100%;
  width: ${Math.round(width - 32)}px;
  margin-right: 20px;
`;

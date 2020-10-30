import styled from 'styled-components/native';
import {heightScale, widthlScale} from '../../utils/screenScale';
import Ripple from 'react-native-material-ripple';
import {colors} from '../../constants';

export const Container = styled.View`
  width: 100%;
`;

export const SlideContainer = styled.ScrollView`
  height: ${heightScale(180)}px;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
`;

export const RippleButton = styled(Ripple)`
  display: flex;
  justify-content: flex-end;
  height: ${heightScale(155)}px;
  width: ${widthlScale(280)}px;
  margin: 0px ${widthlScale(15)}px;
`;

export const ImageItemContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ImageItem = styled.Image`
  border-radius: 8px;
  height: ${heightScale(155)}px;
  width: ${widthlScale(280)}px;
`;

export const ImageFooter = styled.View`
  background: yellow;
  position: absolute;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  justify-content: center;
  padding: 0px 10px;
  height: ${heightScale(40)}px;
  width: ${widthlScale(280)}px;
  bottom: -1px;
  background: ${colors.FOREGROUND};
`;

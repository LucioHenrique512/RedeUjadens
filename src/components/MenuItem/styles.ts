import styled from 'styled-components/native';
import Ripple from 'react-native-material-ripple';
import {heightScale, widthlScale} from '../../utils/screenScale';
import {colors} from '../../constants';

export const Container = styled(Ripple)`
  background: ${colors.PRIMARY};
  height: ${heightScale(50)}px;
  width: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  flex-direction: row;
  margin-bottom: ${heightScale(21)}px;
`;

export const IconContainer = styled.View`
  height: 100%;
  margin-right: 15px;
  width: ${heightScale(50)}px;
  background: rgba(0, 0, 0, 0.3);
  display:flex;
  align-items:center;
  justify-content: center;
`;

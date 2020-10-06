import styled from 'styled-components/native';
import {Text} from 'react-native';
import {colors} from '../../constants';

export const Container = styled.ScrollView`
  padding: 0px 16px;
`;

interface StyledText {
  size?: number;
}
export const StyledText = styled(Text)<StyledText>`
  color: ${colors.TEXT_COLOR};
  font-size: ${({size}) => (size ? `${size}px` : '16px')};
`;

export const DestaquesContainer = styled.View`
  width: 100%;
  margin: 10px 0px;
`;

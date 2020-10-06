import styled from 'styled-components/native';
import {colors} from '../../constants';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
`;

export const Content = styled.View`
  width: 100%;
  padding: 15px;
  display: flex;
  height: ${Math.round(height * 0.8)}px;
  align-items: center;
  justify-content: space-between;
`;

export const GreetingsText = styled.Text`
  color: ${colors.PRIMARY};
  font-weight: 100;
  font-size: 28px;
`;

export const StyledText = styled.Text`
  color: ${colors.TEXT_COLOR};
  margin-bottom: 35px;
  font-size: 17px;
`;

export const BoldText = styled.Text`
  font-weight: bold;
`;

export const Image = styled.Image``;

export const ButtonsContainer = styled.View`
  width: 100%;
`;

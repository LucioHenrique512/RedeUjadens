import styled from 'styled-components/native';
import {colors} from '../../constants';

interface TextInputStyleProps {
  MarginBottom?: boolean;
}

export const Container = styled.TextInput<TextInputStyleProps>`
  width: 100%;
  height: 51px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding-left: 20px;
  color: ${colors.TEXT_COLOR};
  margin-bottom: ${({MarginBottom}) => (!MarginBottom ? '0px' : '25px')};
`;

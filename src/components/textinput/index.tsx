import * as React from "react";

import {Container} from './styles';

interface TextInputProps {
  marginBottom?: boolean;
  label: String;
  secureTextEntry?: any;
}

const TextInput = ({marginBottom, label, secureTextEntry}: TextInputProps) => {
  return (
    <Container
      placeholder={`${label}`}
      placeholderTextColor={'rgba(4, 176, 153,0.5)'}
      MarginBottom={marginBottom}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default TextInput;

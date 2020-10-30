import * as React from 'react';
import {Button, TextInput} from '../../components';
import {Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import {
  Container,
  FormContainer,
  LogoContainer,
  StyledImage,
  StyledText,
  BoldText,
  RowButtons,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import * as authenticationActions from '../../actions/authentication';

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <Container behavior="position">
      <LogoContainer>
        <StyledImage source={require('../../assets/logo/Logo.png')} />
      </LogoContainer>
      <FormContainer>
        <StyledText marginBottom>
          Oiii, como ver você denovo,{' '}
          <BoldText>por favor entre com seu usuário abaixo. 😁</BoldText>
        </StyledText>
        <TextInput marginBottom label="Usuário" />
        <TextInput marginBottom label="Senha" secureTextEntry />
        <Button
          text="Entrar"
          marginBottom
          fullWidth
          onPress={() => dispatch(authenticationActions.fakeAuth(true))}
        />
        <StyledText>Ou entre com</StyledText>
        <RowButtons>
          <Button marginBottom margin={15} onPress={() => console.log('Login')}>
            <Image source={require('../../assets/google/google.png')} />
          </Button>
          <Button marginBottom margin={15} onPress={() => console.log('Login')}>
            <Image source={require('../../assets/instagram/instagram.png')} />
          </Button>
        </RowButtons>
        <TouchableOpacity onPress={() => navigation.navigate('register')}>
          <StyledText>Não possui um usuário?</StyledText>
        </TouchableOpacity>
      </FormContainer>
    </Container>
  );
};

export default Login;

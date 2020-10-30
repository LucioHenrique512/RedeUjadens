import * as React from 'react';
import {Button, TextInput} from '../../components';
import {Image} from 'react-native';

import {
  Container,
  FormContainer,
  StyledText,
  BoldText,
  RowButtons,
} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <FormContainer>
        <StyledText marginBottom>
          Que bom que você está se juntando a nós, por favor{' '}
          <BoldText>
            entre com seus dados abaixo ou entre com suas redes sociais. 😍
          </BoldText>
        </StyledText>
        <TextInput marginBottom label="Nome" />
        <TextInput marginBottom label="Email" />
        <TextInput marginBottom label="Congregação" />
        <TextInput marginBottom label="Senha" />
        <Button
          text="Registrar"
          marginBottom
          fullWidth
          onPress={() => console.log('Login')}
        />
        <StyledText style={{textAlign: 'center'}}>
          Ou se registre com
        </StyledText>
        <RowButtons>
          <Button marginBottom margin={15} onPress={() => console.log('Login')}>
            <Image source={require('../../assets/google/google.png')} />
          </Button>
          <Button marginBottom margin={15} onPress={() => console.log('Login')}>
            <Image source={require('../../assets/instagram/instagram.png')} />
          </Button>
        </RowButtons>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <StyledText style={{textAlign: 'center'}}>
            Já possui um usuário?
          </StyledText>
        </TouchableOpacity>
      </FormContainer>
    </Container>
  );
};

export default Register;

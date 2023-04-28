import React, { useState } from 'react';
import {
  Container,
  Input,
  Icon,
  Button,
  Text,
  Center,
  Box,
  Flex,
  Divider,
  Heading,
} from "native-base";
import { logout, signIn, valid } from '../services/loginService';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      await signIn(username, password)
      navigation.
        reset({
          index: 0,
          routes: [{ name: 'Logged' }]
        })
    } catch (error) {
      alert(error)
    }
  };

  return (
    <Center>
      <Container>
        <Box alignItems="center" w={300}>
          <Flex h={10} marginTop={5} alignItems="center">
            <Input
              onChangeText={(text) => setUsername(text)}
              placeholder="Username"
              textContentType="username"
              autoCapitalize="none"
            />
          </Flex>
          <Flex h={10} alignItems="center">

            <Input
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
              textContentType="password"
              secureTextEntry
            />
          </Flex>
          <Box w="300">
            <Button onPress={login}>
              <Text>Sign in</Text>
            </Button>

            <Divider my="2" />
            <Button  variant="subtle" onPress={valid}>
              <Text>Valid</Text>
            </Button>
          </Box>
        </Box>
      </Container>
    </Center>
  );
};

export default LoginScreen;
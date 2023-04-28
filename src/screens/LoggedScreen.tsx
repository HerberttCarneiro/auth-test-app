import { Button, Divider } from 'native-base';
import React from 'react';
import { View, Text } from 'react-native';
import { logout, valid } from '../services/loginService';

const LoginScreen = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await logout();
      navigation.
        reset({
          index: 0,
          routes: [{ name: 'Login' }]
        })
    } catch (error) {
      alert(error)
    }
  };

  return (
    <View>
      <Text>
        Login successful
      </Text>
      <Button onPress={handleLogout}>Logout</Button>
      <Divider />
      <Button onPress={valid}>
        <Text>Valid</Text>
      </Button>
    </View>
  );
};

export default LoginScreen;
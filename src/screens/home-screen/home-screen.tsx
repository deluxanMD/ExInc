import { Text } from 'react-native';
import React from 'react';
import * as S from './home-screen.styles';

const HomeScreen = () => {
  return (
    <S.SAProvider>
      <Text>HomeScreen</Text>
    </S.SAProvider>
  );
};

export default HomeScreen;

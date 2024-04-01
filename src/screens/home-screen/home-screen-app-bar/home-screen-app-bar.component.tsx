import React from 'react';
import { Appbar } from 'react-native-paper';
import * as S from './home-screen-app-bar.styles';

const HomeScreenAppbar = () => {
  return (
    <S.AppbarHeader>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content title="Title" />
      <Appbar.Action icon="calendar" onPress={() => {}} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
    </S.AppbarHeader>
  );
};

export default HomeScreenAppbar;

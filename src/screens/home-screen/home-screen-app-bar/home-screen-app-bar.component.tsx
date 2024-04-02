import React from 'react';
import { Appbar, useTheme } from 'react-native-paper';
import * as S from './home-screen-app-bar.styles';

const HomeScreenAppbar = () => {
  const theme = useTheme();

  return (
    <S.AppbarContainer style={{ backgroundColor: theme.colors.primary }}>
      <S.AppbarHeader mode="center-aligned">
        <Appbar.Content title="CRIC" color="white" />
        <Appbar.Action icon="magnify" color="white" onPress={() => {}} />
      </S.AppbarHeader>
    </S.AppbarContainer>
  );
};

export default HomeScreenAppbar;

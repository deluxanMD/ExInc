import { View, Text } from 'react-native';
import React from 'react';
import { useGetLiveMatchesQuery } from '../../../../api/matches-api/matches-api';

const LiveMatches = () => {
  const { data } = useGetLiveMatchesQuery({});
  console.log(data);
  return (
    <View>
      <Text>LiveMatches</Text>
    </View>
  );
};

export default LiveMatches;

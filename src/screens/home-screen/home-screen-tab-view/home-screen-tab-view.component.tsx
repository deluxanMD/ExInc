import { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import LiveMatches from './live-matches-screen/live-matches-screen';
import RecentMatches from './recent-matches-screen/recent-matches-screen';
import { useTheme } from 'react-native-paper';
import UpcomingMatches from './upcoming-matches-screen/upcoming-matches-screen';

const HomeScreenTabView = () => {
  const theme = useTheme();
  const layout = useWindowDimensions();

  const renderScene = (props: any) => {
    switch (props.route.key) {
      case 'live':
        return <LiveMatches />;
      case 'recent':
        return <RecentMatches />;
      case 'upcoming':
        return <UpcomingMatches />;
      default:
        return null;
    }
  };

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: theme.colors.background }}
      style={{ backgroundColor: theme.colors.primary }}
    />
  );

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'live', title: 'Live' },
    { key: 'recent', title: 'Recent' },
    { key: 'upcoming', title: 'Upcoming' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      lazy
    />
  );
};

export default HomeScreenTabView;

import { it } from '@jest/globals';
import renderer from 'react-test-renderer';
import HomeScreen from './home-screen';

it('should render the screen', () => {
  renderer.create(<HomeScreen />);
});

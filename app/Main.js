import { StackNavigator } from 'react-navigation';
import Movie from './movie/Movie';
import HomePage from './HomePage';
import Music from './music/Music';

const SimpleApp = StackNavigator({
    HomePage:{screen:HomePage},
    Movie: {screen:Movie },
    Music: {screen:Music},
},{
    headerMode: 'none',
});

export default SimpleApp

import { StackNavigator } from 'react-navigation';
import Movie from './movie/Movie';
import HomePage from './HomePage';
import Music from './music/Music';
import MovieDetails from './movie/MovieDetails';

const SimpleApp = StackNavigator({
    HomePage:{screen:HomePage},
    Movie: {screen:Movie },
    Music: {screen:Music},
    MovieDetails: {screen:MovieDetails},
},{
    headerMode: 'none',
});

export default SimpleApp

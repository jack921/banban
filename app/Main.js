import { StackNavigator } from 'react-navigation';
import Movie from './movie/Movie';
import HomePage from './HomePage';
import MovieDetails from './movie/MovieDetails';

const SimpleApp = StackNavigator({
    HomePage:{screen:HomePage},
    MovieDetails: {screen:MovieDetails},
    Movie:{screen:Movie},
},{
    headerMode: 'none',
});

export default SimpleApp

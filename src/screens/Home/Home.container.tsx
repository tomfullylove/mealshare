import {connect} from 'react-redux';
import Home from './Home.component';

interface StateProps {
  meals: Array<any>;
}

export type Props = StateProps;

const mapStateToProps = (state): StateProps => ({
  meals: state.meals.allMeals,
});

export default connect(mapStateToProps)(Home);

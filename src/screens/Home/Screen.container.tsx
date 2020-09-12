import {connect} from 'react-redux';
import Screen from './Screen.component';

interface StateProps {
  meals: Array<any>;
}

export type Props = StateProps;

const mapStateToProps = (state): StateProps => ({
  meals: state.meals.allMeals,
});

export default connect(mapStateToProps)(Screen);

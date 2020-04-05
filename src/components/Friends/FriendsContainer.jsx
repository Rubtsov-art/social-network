
import Friends from './Friends';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {return ({
    friends: state.friendsList.friends
})}

export default connect (mapStateToProps, {}) (Friends)
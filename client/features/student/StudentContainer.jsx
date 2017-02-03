import { connect } from 'react-redux';
import Student from './Student';

const mapStateToProps = state => ({
  mentor: state.mentor
});

export default connect

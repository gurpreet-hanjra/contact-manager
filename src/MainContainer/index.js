import MainContainer from './template';
import { connect } from 'react-redux';
import { toggleModal } from '../UI/Modal/actions';

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal())
});

export default connect(
  null,
  mapDispatchToProps
)(MainContainer);

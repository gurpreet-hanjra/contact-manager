import ModalWrapper from './template';
import { connect } from 'react-redux';
import { toggleModal } from './actions';

const mapStateToProps = state => {
  return { open: state.modal.modalOpen };
};

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalWrapper);

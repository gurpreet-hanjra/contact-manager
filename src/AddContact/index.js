import AddContact from './template';
import { connect } from 'react-redux';
import { addContactRequest } from './actions';
import { toggleModal } from '../UI/Modal/actions';

const mapStateToProps = state => ({
  addContactSuccess: state.add.addContactSuccess
});

const mapDispatchToProps = dispatch => ({
  addContact: data => dispatch(addContactRequest(data)),
  toggleModal: () => dispatch(toggleModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContact);

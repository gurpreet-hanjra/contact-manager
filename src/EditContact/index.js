import EditContact from './template';
import { connect } from 'react-redux';
import { editContactRequest, updateContactRequest } from './actions';
import { toggleModal } from '../UI/Modal/actions';

const mapStateToProps = state => ({
  toEdit: state.edit.toEdit,
  updateContactSuccess: state.edit.updateContactSuccess
});

const mapDispatchToProps = dispatch => ({
  updateContact: data => dispatch(updateContactRequest(data)),
  editContact: id => dispatch(editContactRequest(id)),
  toggleModal: () => dispatch(toggleModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditContact);

import ListContact from './template';
import { connect } from 'react-redux';
import {
  getContactsRequest,
  sortContactsRequest,
  filterContactsRequest
} from './actions';

const mapStateToProps = state => {
  return { contacts: state.list };
};

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(getContactsRequest()),
  sortContacts: payload => dispatch(sortContactsRequest(payload)),
  filterContacts: payload => dispatch(filterContactsRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContact);

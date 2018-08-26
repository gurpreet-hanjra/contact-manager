import React from 'react';
import { equals, isEmpty } from 'ramda';
import EditForm from './EditForm';
import { toast } from 'react-toastify';

export default class EditContact extends React.Component {
  constructor(props) {
    super();

    this.state = {
      isEdit: false,
      clearForm: false,
      updateContactSuccess: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.updateContactSuccess === true &&
      !equals(this.props.updateContactSuccess, nextProps.updateContactSuccess)
    ) {
      this.handleUpdateSuccess();
      this.setState({
        updateContactSuccess: true
      });
    }
  }

  handleUpdateSuccess = () => {
    this.setState({
      isEdit: false,
      clearForm: true
    });

    this.props.toggleModal();

    this.success();
  };

  success = () =>
    toast.success('Contact updated successfully', {
      autoClose: 3000,
      onClose: () =>
        this.setState({ clearForm: false, updateContactSuccess: false })
    });

  handleEdit = value => {
    if (isEmpty(value)) {
      return;
    }
    this.props.editContact(value);
  };

  render() {
    return (
      <div>
        <EditForm
          toEdit={this.props.toEdit}
          handleEdit={this.handleEdit}
          updateContact={this.props.updateContact}
          clearForm={this.state.clearForm}
        />
      </div>
    );
  }
}

import React from 'react';
import AddForm from './AddForm';

import { toast } from 'react-toastify';

export default class AddContact extends React.Component {
  constructor(props) {
    super();

    this.state = {
      clearForm: false,
      success: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.success && nextProps.addContactSuccess) {
      this.setState(
        {
          success: true
        },
        () => {
          this.handleSuccess();
        }
      );
    }
  }

  handleSuccess = () => {
    if (this.state.success) {
      this.props.toggleModal();
      this.showMessage();
    }
  };

  showMessage = () =>
    toast.success(
      'Contact added successfully',
      {
        autoClose: 3000
      },
      () => {
        this.setState({
          success: false
        });
      }
    );

  render() {
    return (
      <div>
        <AddForm
          toggleModal={this.props.toggleModal}
          addContact={this.props.addContact}
        />
      </div>
    );
  }
}

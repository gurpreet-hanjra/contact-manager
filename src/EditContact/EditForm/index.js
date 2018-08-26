import React, { PureComponent } from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
import { equals, isEmpty } from 'ramda';

export default class EditForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      itemToEdit: {},
      showUpdateForm: false,
      editInput: '',
      updateSuccess: false
    };
  }

  componentWillUnmount() {
    this.clearForms();
  }

  componentWillReceiveProps(nextProps) {
    if (!isEmpty(nextProps.toEdit)) {
      if (!equals(this.props.toEdit, nextProps.toEdit)) {
        this.setState({
          firstName: nextProps.toEdit.firstName,
          lastName: nextProps.toEdit.lastName,
          showUpdateForm: true
        });
      }
    }

    if (nextProps.clearForm) {
      this.clearForms();
    }
  }

  handleUpdateSuccess = () => {
    this.setState({
      updateSuccess: true
    });
  };

  clearForms = () => {
    this.setState({
      firstName: '',
      lastName: '',
      showUpdateForm: false,
      editInput: '',
      updateSuccess: false
    });
  };

  handleEdit = () => {
    this.props.handleEdit(this.state.editInput);
  };

  handleInputChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleUpdate = () => {
    const { firstName, lastName } = this.state;
    this.props.updateContact({
      id: this.props.toEdit.id,
      firstName,
      lastName
    });
  };

  render() {
    return (
      <React.Fragment>
        {!this.state.showUpdateForm ? (
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Enter Id"
                type="text"
                id="editInput"
                placeholder="Id"
                value={this.state.editInput}
                onChange={this.handleInputChange}
                required
              />
            </Form.Group>

            <Button primary onClick={this.handleEdit}>
              Find
            </Button>
          </Form>
        ) : (
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="First name"
                type="text"
                placeholder="First name"
                required
                id="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChange}
              />
              <Form.Input
                fluid
                label="Last name"
                type="text"
                placeholder="Last name"
                required
                id="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChange}
              />
            </Form.Group>

            <Button
              primary
              icon
              labelPosition="left"
              onClick={this.handleUpdate}
            >
              <Icon name="edit" />
              Update contact
            </Button>
          </Form>
        )}
      </React.Fragment>
    );
  }
}

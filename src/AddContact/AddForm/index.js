import React, { PureComponent } from 'react';
import { Button, Icon, Form } from 'semantic-ui-react';

export default class AddForm extends PureComponent {
  constructor(props) {
    super(props);

    this.firstName = React.createRef();
    this.lastName = React.createRef();

    this.state = {
      firstName: '',
      lastName: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const { firstName, lastName } = this.state;

    if (!firstName.trim() || !lastName.trim()) {
      return;
    }

    this.props.addContact({
      firstName,
      lastName
    });

    this.setState({
      firstName: '',
      lastName: ''
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="First name"
            type="text"
            id="firstName"
            placeholder="First name"
            value={this.state.firstName}
            onChange={this.handleChange}
            required
          />
          <Form.Input
            fluid
            label="Last name"
            type="text"
            id="lastName"
            value={this.state.lastName}
            placeholder="Last name"
            onChange={this.handleChange}
            required
          />
        </Form.Group>

        <Button type="submit" primary icon labelPosition="left">
          <Icon name="plus circle" />
          Add contact
        </Button>
      </Form>
    );
  }
}

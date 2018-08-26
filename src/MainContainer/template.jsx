import React, { PureComponent } from 'react';
import Header from '../UI/Header';
import AddContact from '../AddContact';
import EditContact from '../EditContact';
import ListContact from '../ListContact';
import { Container, Menu } from 'semantic-ui-react';
import Modal from '../UI/Modal';

export default class MainContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      feature: null
    };
  }

  handleItemClick = (e, { name }) => {
    this.setState({
      feature:
        name === 'add' ? (
          <AddContact close={this.closeModal} />
        ) : (
          <EditContact close={this.closeModal} />
        ),
      title:
        name === 'add' ? 'Add a new contact' : 'Edit a contact (requires id)'
    });

    this.props.toggleModal();
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Modal title={this.state.title} feature={this.state.feature} />
          <Header />
          <Menu>
            <Menu.Item name="add" onClick={this.handleItemClick}>
              Add contact
            </Menu.Item>
            <Menu.Item name="edit" onClick={this.handleItemClick}>
              Edit contact
            </Menu.Item>
          </Menu>

          <ListContact />
        </Container>
      </React.Fragment>
    );
  }
}

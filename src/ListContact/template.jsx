import React from 'react';
import { Table } from 'semantic-ui-react';
import Sort from './Sort';
import Filter from './Filter';
import './style.css';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortOptions: [
        {
          value: 'Select',
          text: 'Date Created'
        },
        {
          value: 'firstName',
          text: 'First name'
        },
        {
          value: 'lastName',
          text: 'Last name'
        }
      ],
      filterOn: ''
    };
  }

  componentDidMount() {
    this.props.getContacts();
  }

  handleEdit = evt => {
    this.props.handleEdit();
  };

  table = () => {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>First name</Table.HeaderCell>
            <Table.HeaderCell>Last name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.props.contacts.all &&
            this.props.contacts.all.map(contact => {
              return (
                <Table.Row key={contact.id}>
                  <Table.Cell>{contact.id}</Table.Cell>
                  <Table.Cell>{contact.firstName}</Table.Cell>
                  <Table.Cell>{contact.lastName}</Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
    );
  };

  handleFilter = evt => {
    this.setState({
      filterOn: evt.target.value
    });
    this.props.filterContacts(evt.target.value);
  };

  handleSort = (evt, { value }) => {
    this.setState({
      sortOn: value
    });

    this.props.sortContacts(value);
  };

  renderSort = () => {
    return (
      <div>
        <div />
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className="filters">
          <Sort
            handleSort={this.handleSort}
            sortOptions={this.state.sortOptions}
          />
          <Filter handleFilter={this.handleFilter} />
        </div>
        {this.table()}
        {!this.props.contacts.all.length && (
          <div>No contacts found. Let's add some!</div>
        )}
      </div>
    );
  }
}

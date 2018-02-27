import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { contactsFetch } from '../actions/contactsAction';

class ContactList extends Component{
  
  componentWillMount() {
    this.props.contactsFetch();
  }

  render() {
    const { contacts } = this.props;
    return (
      <div>
        { 
          contacts.length > 0 ? contacts.map((contact, index) => <p key={index}>{contact.username}</p>) : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const contacts = _.map(state.contacts, (val, uid ) => {
    return { ...val, uid };
  });
  return { contacts }
};

export default connect(mapStateToProps, { contactsFetch })(ContactList);

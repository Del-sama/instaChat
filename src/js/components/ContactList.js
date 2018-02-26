import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { contactsFetch } from '../actions/contactsAction';

class ContactList extends Component{
  componentWillMount() {
    this.props.contactsFetch();
  }

  componentWillReceiveProps(nextProps) {
     this.props.contacts;
  }

  render() {
    return (
      <div>
				contacts
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
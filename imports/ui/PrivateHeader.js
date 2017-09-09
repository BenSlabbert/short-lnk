import React from 'react';
import PropTypes from 'prop-types';
import { Accounts } from 'meteor/accounts-base';


export default class PrivateHeader extends React.Component {

    doLogout() {
        Accounts.logout();
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button onClick={this.doLogout.bind(this)}>Log out</button>
            </div>
        );
    }

};

PrivateHeader.PropTypes = {
    title: PropTypes.string.isRequired
}
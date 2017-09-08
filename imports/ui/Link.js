import React from 'react';
import { Accounts } from 'meteor/accounts-base';

import { Links } from '../api/links';

export default class Link extends React.Component {

    doLogout() {
        Accounts.logout();
    }

    onSubmit(e) {
        const url = this.refs.url.value.trim();

        e.preventDefault();

        if (url) {
            Links.insert({ url });
            this.refs.url.value = '';
        }
    }

    render() {
        return (
            <div>
                <h1>your links</h1>
                <button onClick={this.doLogout.bind(this)}>Log out</button>

                <p>Add a link:</p>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" ref="url" placeholder="URL" />
                    <button>Add links</button>
                </form>
            </div>
        );
    };
}
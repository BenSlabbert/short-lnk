import React from 'react';
import { browserHistory } from 'react-router';

export default class Link extends React.Component {

    doLogout() {
        return browserHistory.push('/');
    }

    render() {
        return (
            <div>
                <h1>your links</h1>
                <button onClick={this.doLogout.bind(this)}>Log out</button>
            </div>
        );
    };
}
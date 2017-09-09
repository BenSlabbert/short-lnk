import React from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';
import { Meteor } from 'meteor/meteor';

export default class LinksListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isCopied: false
        };
    }

    componentDidMount() {
        this.clipboard = new Clipboard(this.refs.copy);

        this.clipboard.on('success', () => {
            this.setState({ isCopied: true })
            setTimeout(() => { this.setState({ isCopied: false }) }, 1000);
        }).on('error', () => {
            alert('Unable to copy. Please do it manually');
        });
    }

    componentWillUnmont() {
        this.clipboard.destroy();
    }

    getText() {
        return this.state.isCopied ? 'Copied' : 'Copy';
    }

    render() {
        return (
            <div>
                <p>{this.props.url}</p>
                <p>{this.props.shortUrl}</p>
                <p>{this.props.visible.toString()}</p>

                <button ref="copy" data-clipboard-text={this.props.shortUrl} >
                    {this.getText()}
                </button>

                <button onClick={() => {
                    Meteor.call('links.setVisibility', this.props._id, !this.props.visible)
                }}>
                    {this.props.visible ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

LinksListItem.propTypes = {
    shortUrl: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired
}
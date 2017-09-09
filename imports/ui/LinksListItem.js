import React from 'react';
import PropTypes from 'prop-types';

export default class LinksListItem extends React.Component {

    render() {
        return (
            <div>
                <p>url: {this.props.url}</p>
                <p>short url: {this.props.shortUrl}</p>
            </div>
        );
    }
}

LinksListItem.propTypes = {
    shortUrl: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired
}
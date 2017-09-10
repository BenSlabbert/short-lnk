import React from 'react';

import { Links } from '../api/links';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters';

// stateless component, presentational
export default () => {
    return (
        <div>
            <PrivateHeader title="Your Links" />
            <div>
                <LinksListFilters />
                <AddLink />
                <LinksList />
            </div>
        </div>
    );
};
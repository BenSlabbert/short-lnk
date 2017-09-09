import React from 'react';
import { Session } from 'meteor/session';

export default () => {
    return (
        <div>
            <label>
                <input type="checkbox" onChange={ (e) => {
                    const isChecked = e.target.checked;
                    Session.set('showVisible', !isChecked);
                }}/>
                show hidden links
            </label>
        </div>
    );
}
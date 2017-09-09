import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

import { routes, onAuthChange } from '../imports/routes/routes';
import '../imports/startup/simpl-schema-config.js';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

// Stateless functional component
// good for presentational component
import React from 'react';
const MyComponent = (props) => {
  return (
    <div>
      <h1>MyComponent stateless function {props.name}</h1>
    </div>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<MyComponent name="mike"/>, document.getElementById('app'));
});

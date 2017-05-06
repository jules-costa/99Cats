import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';

class Widget extends React.Component {

  render () {
    return (
      <div>
        <Clock />
        <Weather />
        <Autocomplete names={['Jules', 'Kevin', 'Andrew', 'Corrine', 'Johnny', 'Krissy']} />
      </div>
    );
  }


}

document.addEventListener("DOMContentLoaded", function() {
  const root = document.getElementById('root');
  ReactDOM.render(<Widget />, root);
});

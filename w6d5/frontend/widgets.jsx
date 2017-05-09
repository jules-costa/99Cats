import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';
import Tabs from './tabs';

class Widget extends React.Component {

  render () {
    return (
      <div>
        <Clock />
        <Weather />
        <div className="flx flx-justify small-box">
          <Tabs tabs={[{ title: "one", content: "ONE!"}, { title: "two", content: "TWO!"}, { title: "three", content: "THREE!"}]} />
          <Autocomplete names={['Jules', 'Kevin', 'Andrew', 'Corrine', 'Johnny', 'Krissy']} />
        </div>
      </div>
    );
  }


}

document.addEventListener("DOMContentLoaded", function() {
  const root = document.getElementById('root');
  ReactDOM.render(<Widget />, root);
});

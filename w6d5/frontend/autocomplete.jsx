import React from 'react';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: '' };
  }

  render () {
    return (
      <section className="flx flx-justify autocomplete">
        <input type="text" value={this.state.inputVal}></input>
        <ul>
          {
            this.props.names.map(name => <li className="name">{name}</li>)
          }
        </ul>
      </section>
    );
  }
}

export default Autocomplete;

import React from 'react';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleInput = this.handleInput.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ value: e.target.value });
  }

  handleInput(e) {
    this.setState({ value: e.target.value });
    //SQL query
    //look at solutions
  }

  render () {
    return (
      <section className="flx flx-justify autocomplete">
        <input type="text" value={this.state.value} onChange={this.handleInput}></input>
        <ul>
          {
            this.props.names.map((name, idx) => <li key={idx} className="name" onClick={this.handleClick.bind(this)}>{name}</li>)
          }
        </ul>
      </section>
    );
  }
}

export default Autocomplete;

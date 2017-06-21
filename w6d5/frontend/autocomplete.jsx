import React from 'react';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: '' };
    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ inputVal: e.currentTarget.value });
  }

  matches() {
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return this.props.names;
    }

    this.props.names.forEach(name => {
      let sub = name.slice(0, this.state.inputVal.length);
        if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
          matches.push(name);
        }
    });

    if (matches.length === 0) {
      matches.push('no matches');
    }

    return matches;
  }

  selectName(e) {
    let name = e.currentTarget.innerText;
    this.setState({inputVal: name});
  }

  render () {
    let results = this.matches().map((result, i) => {
      return (
        <li key={i} onClick={this.selectName}>{result}</li>
      );
    });
    return (
      <section className="flx flx-justify autocomplete">
        <input type="text" value={this.state.inputVal} onChange={this.handleInput}></input>
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

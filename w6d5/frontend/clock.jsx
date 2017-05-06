import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.handle = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
    this.handle = 0;
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render () {
    return (
      <section className="flx clock">
        <div className="flx date flx-justify">
          <p>date: </p>
          <p>{this.state.time.toLocaleDateString()}</p>
        </div>
        <div className="flx time flx-justify">
          <label>time: </label>
          <p>{this.state.time.toLocaleTimeString()}</p>
        </div>
      </section>
    );
  }

}

export default Clock;

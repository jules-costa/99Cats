import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIdx: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ selectedIdx: 0 });

  }

  render () {
    return (
      <section className="flx flx-justify tabs">
        <ul className="flx flex-justify tab-headers">
        {
          this.props.tabs.map((tab) => <li className="tab-titles" onClick={this.handleClick}>{tab.title}</li>)
        }
        </ul>
        <div className="flx tab-content">
          <article>
            {this.props.tabs[this.state.selectedIdx].content}
          </article>
        </div>
      </section>
    );
  }
}

export default Tabs;

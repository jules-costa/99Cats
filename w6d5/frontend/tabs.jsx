import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIdx: 0 };
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ selectedIdx: 0 });

    //How to grab index from JS object on click???
  }

  render () {
    return (
      <section className="flx flx-justify tabs">
        <ul className="flx flex-justify tab-headers">
        {
          this.props.tabs.map((tab) => <li className="tab-titles" onClick={this.handleClick.bind(this)}>{tab.title}</li>)
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

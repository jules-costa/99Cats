import React from 'react';
import uniqueId from '../util/utils';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: undefined, title: "", body: "", done: false};
    this.receiveTodo = this.props.receiveTodo;
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateTitle(e) {
    this.setState({title: e.target.value});
  }

  updateBody(e) {
    this.setState({body: e.target.value});
  }

  submitForm(e) {
    e.preventDefault();
    this.setState({id: uniqueId()}, () => {      
      this.receiveTodo(this.state);
    });
  }

  render() {
    return (
      <div>
        <label>Title
          <input type="text" value={this.state.title} onChange={this.updateTitle}/>
        </label>
        <textarea value={this.state.body} onChange={this.updateBody}></textarea>
        <button type="button" onClick={this.submitForm}>Submit!</button>
      </div>
    );
  }
}

export default TodoForm;

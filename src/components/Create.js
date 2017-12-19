import React, {Component} from 'react';
import {addTodo, fetchPages} from '../utils/api';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "description": ''
    }
    this.handleInputChange = this
      .handleInputChange
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value})
  }

  handleSubmit(event) {
    event.preventDefault();
    addTodo('users/3/todo', this.state).then(() => fetchPages('users/3/todo').then(todoList => {
      this
        .props
        .onUpdateTodo(todoList)
    }));
  }

  render() {
    return (
      <div>
        <h1>Create todo</h1>
        <form onSubmit={this.handleSubmit}>
          <div>Todo:<input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange}/></div>
          <input type="checkbox" id="1" id="tags"/>
          <label for="person">person</label>
          <input type="checkbox" id="2" id="tags"/>
          <label for="nature">nature</label>
          <input type="checkbox" id="3" id="tags"/>
          <label for="vehicle">vehicle</label>
          <input type="checkbox" id="4" id="tags"/>
          <label for="building">building</label>
          <input type="submit" value="shoot"/>
        </form>
      </div>
    );
  }
}

export default Create;
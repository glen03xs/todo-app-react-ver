import React, { Component } from 'react';
import TodoForm from '../containers/todo_form';
import TodoCont from '../containers/todo_cont';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card" id="main">
            <div className="card-content">
              <span className="card-title">To do List</span>
              <div className="row">
                <TodoForm />
              </div>
            </div>
              <TodoCont />
          </div> 
        </div>
      </div>
    );
  }
}

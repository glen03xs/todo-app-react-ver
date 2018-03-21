import React, {Component} from 'react';
import TodoFilter from './todo_filter';

class TodoComp extends Component {
		render() {
			return (
				<div className="card-action">
					<h5 id="task-title">To do's</h5>
					<TodoFilter />
					<ul className="collection">
						
					</ul>
				</div>
		 );
	 }
}

export default TodoComp;
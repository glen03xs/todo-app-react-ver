import React, {Component} from 'react';

class TodoForm extends Component {
	render() {
		return (
			<form id="todo-form">
				<div className="input-field col s12">
					<label htmlFor="todo">New Item</label>
					<input type="text" name="todo" id="todo"/>
				</div>
				<input type="submit" value="Add To do" className="btn blue"/>
			</form>
		);
	}
}

export default TodoForm;
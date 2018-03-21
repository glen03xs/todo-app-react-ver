import React, {Component} from 'react';

class TodoFilter  extends Component {
		render() {
			return (
				<div className="input-field col s12">
					<label htmlFor="filter-todo">Filter To do's</label>
					<input type="text" name="filter-todo" id="filter-todo"/>
				</div>
		 );
	 }
}

export default TodoFilter;
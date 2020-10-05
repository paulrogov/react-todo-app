import React from "react"

// as class component
class TodoItem extends React.Component {
	render() {
		const completedStyle = {
			fontStyle: "italic",
			color: "#d35e0f",
			opacity: 0.4,
			textDecoration: "line-through",
		}

		const { completed, id, title } = this.props.todo

		return (
			<li className="todo-item">
				<input 
					type="checkbox" 
					checked={completed} 
					/*{ onChange={() => console.log("clicked")} }*/
					onChange={() => this.props.handleChangeProps(id)}
				/>
				<button onClick={() => this.props.deleteTodoProps(id)}>
					Delete
				</button>
				<span style={completed ? completedStyle : null}>
					{title}
				</span>
			</li>
		)
	}
}

// as functional component (only returns some markup)
/*function TodoItem(props) {
	return <li>{props.todo.title}</li>
}*/

export default TodoItem
import React from "react"
import Header from "./Header"
import InputTodo from "./InputTodo"
import TodoList from "./TodoList"
import { v4 as uuidv4 } from "uuid"

class TodoContainer extends React.Component {
	state = {
		todos: [
			{
				id: uuidv4(),
				title: "Setup development environment",
				completed: true
			},
			{
				id: uuidv4(),
				title: "Develop website and add content",
				completed: false
			},
			{
				id: uuidv4(),
				title: "Deploy to live server",
				completed: false
			}
		]
	}

	handleChange = id => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		})
		console.log("clicked", id);
	}

	delTodo = id => {
		this.setState({
			todos: [
				...this.state.todos.filter(todo => {
					return todo.id !== id;
				})
			]
		})
		console.log("deleted", id);
	}

	addTodoItem = title => {
		const newTodo = {
			id: uuidv4(),
			title: title,
			completed: false
		}
		this.setState({
			todos: [...this.state.todos, newTodo]
		})
		console.log(title);
	}

	render() {
		return (
			<div className="container">
				<Header />
				<InputTodo addTodoProps={this.addTodoItem} />
				<TodoList 
					todos={this.state.todos} 
					handleChangeProps={this.handleChange} 
					deleteTodoProps={this.delTodo}
				/>
			</div>
		)
	}
}

export default TodoContainer
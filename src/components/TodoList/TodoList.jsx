import { useEffect, useState } from 'react'
import TodoForm from '../TodoForm/TodoForm'
import TodoItem from '../TodoItem/TodoItem'

import styles from './TodoList.module.css'

export default function TodoList() {
	const [tasks, setTasks] = useState(() => {
		const savedTasks = localStorage.getItem('tasks')
		return savedTasks ? JSON.parse(savedTasks) : []
	})

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	function addTask(text) {
		setTasks([...tasks, { id: Date.now(), text, completed: false }])
	}

	function toggleTask(id) {
		setTasks(
			tasks.map(task =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		)
	}

	function deleteTask(id) {
		setTasks(tasks.filter(task => task.id !== id))
	}

	return (
		<div className={styles.todoList}>
			<h1 className={styles.title}>Todo List</h1>
			<TodoForm addTask={addTask} />
			{tasks.length ? (
				tasks.map(task => (
					<TodoItem
						key={task.id}
						task={task}
						toggleTask={toggleTask}
						deleteTask={deleteTask}
					/>
				))
			) : (
				<p className={styles.message}>List is empty</p>
			)}
		</div>
	)
}

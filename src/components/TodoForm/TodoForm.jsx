import { useState } from 'react'
import styles from './TodoForm.module.css'

export default function TodoForm({ addTask }) {
	const [text, setText] = useState('')
	const [isError, setIsError] = useState(false)

	function handleSubmit(event) {
		event.preventDefault()
		if (text.trim()) {
			addTask(text)
			setText('')
			setIsError(false)
		} else {
			setIsError(true)
		}
	}

	function handleInput(event) {
		setText(event.target.value)
		if (isError) {
			setIsError(false)
		}
	}

	return (
		<form onSubmit={handleSubmit} className={styles.todoForm}>
			<input
				className={`${styles.todoInput} ${isError ? styles.error : ''}`}
				type='text'
				placeholder='Enter new task'
				value={text}
				onChange={handleInput}
			/>
			<button type='submit' className={styles.formBtn}>
				Add
			</button>
		</form>
	)
}

import { useState } from 'react'
import FilterButton from '../FilterButton/FilterButton'
import styles from './TodoForm.module.css'

export default function TodoForm({ tasks, addTask, filter, setFilter }) {
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
		<>
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
			{tasks.length > 0 && (
				<div className={styles.filters}>
					<FilterButton
						isActive={filter === 'all'}
						onClick={() => setFilter('all')}
					>
						All
					</FilterButton>
					<FilterButton
						isActive={filter === 'active'}
						onClick={() => setFilter('active')}
					>
						Active
					</FilterButton>
					<FilterButton
						isActive={filter === 'completed'}
						onClick={() => setFilter('completed')}
					>
						Complete
					</FilterButton>
				</div>
			)}
		</>
	)
}

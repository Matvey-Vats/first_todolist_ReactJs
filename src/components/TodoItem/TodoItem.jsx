import styles from './TodoItem.module.css'

export default function TodoItem({ task, toggleTask, deleteTask }) {
	return (
		<li className={styles.todoItem}>
			<span
				className={
					task.completed ? `${styles.text} ${styles.completed}` : styles.text
				}
			>
				{task.text}
			</span>
			<div className={styles.buttons}>
				<button
					onClick={() => toggleTask(task.id)}
					className={styles.completeBtn}
				>
					Complete
				</button>
				<button
					onClick={() => deleteTask(task.id)}
					className={styles.deleteBtn}
				>
					Delete
				</button>
			</div>
		</li>
	)
}

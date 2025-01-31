import styles from './FilterButton.module.css'

export default function FilterButton({ children, isActive, onClick }) {
	return (
		<>
			<button
				onClick={onClick}
				className={
					isActive ? `${styles.filterBtn} ${styles.active}` : styles.filterBtn
				}
			>
				{children}
			</button>
		</>
	)
}

import styles from './TestEntryCard.module.css';

const TestEntryCard = ({ title, data, children }) => {
    return (
        <div className={styles['test-entry-card']}>
            <h4>{title}</h4>
            <p className={styles['test-entry-card__data']}>{data || "Not found"}</p>
            {children}
        </div>
    )
}

export default TestEntryCard
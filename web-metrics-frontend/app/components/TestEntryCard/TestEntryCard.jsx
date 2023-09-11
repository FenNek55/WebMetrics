import styles from './TestEntryCard.module.css';

const TestEntryCard = ({ title, data, validityLevel, validityMessage}) => {
    return (
        <div className={styles['test-entry-card']}>
            <h2 className={styles['test-entry-card__title']}>{title}</h2>
            <p className={styles['test-entry-card__data']}>{data}</p>
        </div>
    )
}

export default TestEntryCard
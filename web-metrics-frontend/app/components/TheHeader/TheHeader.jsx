import styles from './TheHeader.module.css';

const TheHeader = () => {
    return (
        <header className={styles['header']}>
            <div className='container'>
                <h1 className={styles['header__title']}>Web Metrics</h1>
            </div>
        </header>
    )
}

export default TheHeader
import styles from './ExpandableSection.module.css'
import { useState } from 'react'

const ExpandableSection = ({children, title}) => {
    const [isExpanded, setIsExpanded] = useState(false)
    
    const handleButtonClick = () => {
        setIsExpanded((prevState) => !prevState)
    }

    return (
        <section className={`${styles['expandable-section']} ${isExpanded ? styles['expandable-section--open'] : ''}`}>
            <button onClick={handleButtonClick} className={styles['expandable-section__button']}><h3>{title}</h3></button>
            <div className={styles['expandable-section__content']}>
                {children}
            </div>
        </section>
    )
}

export default ExpandableSection
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState, useEffect } from 'react';

const CircularProgress = ({ valueStart, valueEnd, styles }) => {
    const [value, setValue] = useState(valueStart)

    useEffect(() => {
        setValue(valueEnd)
    }, [valueEnd])

    return (
        <CircularProgressbar value={value} text={value} styles={styles} strokeWidth={4}/>
    )
}

export default CircularProgress
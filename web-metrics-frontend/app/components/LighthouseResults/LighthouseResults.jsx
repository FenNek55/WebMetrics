import styles from './LighthouseResults.module.scss';
import { useMemo } from 'react';
import CircularProgress from '../CircularProgress/CircularProgress';
// https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/

const getScoreColor = (score) => {
    if (score >= 0.9) return 'green'
    if (score >= 0.5) return 'orange'
    return 'red'
}

const scoreColorToVar = (scoreColor) => {
    if (scoreColor === 'green') return 'var(--color-success)'
    if (scoreColor === 'orange') return 'var(--color-warning)'
    return 'var(--color-error)'
}

const getMainAuditsWithMetadata = (lighthouseResults) => {
    if (!lighthouseResults) return []
    return [
        {
            ...lighthouseResults.audits['first-contentful-paint'],
            name: 'First contentful paint',
            scoreColor: getScoreColor(lighthouseResults.audits['first-contentful-paint'].score),
            weight: 0.1
        },
        {
            ...lighthouseResults.audits['speed-index'],
            name: 'Speed index',
            scoreColor: getScoreColor(lighthouseResults.audits['speed-index'].score),
            weight: 0.1
        },
        {
            ...lighthouseResults.audits['largest-contentful-paint'],
            name: 'Largest contentful paint',
            scoreColor: getScoreColor(lighthouseResults.audits['largest-contentful-paint'].score),
            weight: 0.25
        },
        {
            ...lighthouseResults.audits['interactive'],
            name: 'Time to interactive',
            scoreColor: getScoreColor(lighthouseResults.audits['interactive'].score),
            weight: 0
        },
        {
            ...lighthouseResults.audits['total-blocking-time'],
            name: 'Total blocking time',
            scoreColor: getScoreColor(lighthouseResults.audits['total-blocking-time'].score),
            weight: 0.3
        },
        {
            ...lighthouseResults.audits['cumulative-layout-shift'],
            name: 'Cumulative layout shift',
            scoreColor: getScoreColor(lighthouseResults.audits['cumulative-layout-shift'].score),
            weight: 0.25
        },
    ]
}

const getTotalScore = (auditsWithMetadata) => {
    const totalScore = auditsWithMetadata.reduce((acc, audit) => {
        return acc + audit.score * audit.weight
    }, 0)

    return totalScore.toFixed(2)
}

const getProgressbarStyles = (score) => {
    return {
        path: {
            stroke: scoreColorToVar(getScoreColor(score)),
            transition: 'stroke-dashoffset 1s ease-in-out'
        },
        trail: {
            stroke: '#d6d6d6'
        },
        text: {
            fontSize: '1.5rem',
            color: scoreColorToVar(getScoreColor(score)),
            fill: scoreColorToVar(getScoreColor(score)),
            fontWeight: 'bold'
        }
    }
}

const LighthouseResults = ({ lighthouseResults }) => {
    const mainAudits = useMemo(() => getMainAuditsWithMetadata(lighthouseResults), [lighthouseResults])
    const totalScore = useMemo(() => getTotalScore(mainAudits), [mainAudits])
    const progressbarStyles = useMemo(() => getProgressbarStyles(totalScore), [totalScore])

    return (
        <section className={styles['lighthouse-results']}>
            <h4>Google Lighthouse performance results:</h4>
            <div className={styles['lighthouse-results__score-wrapper']}>
                <CircularProgress styles={progressbarStyles} valueStart={0} valueEnd={totalScore * 100} />
            </div>
            <div className={styles['lighthouse-results__cards-wrapper']}>
            {
                mainAudits.map((audit) => {
                    return (
                        <div key={audit.name} className={styles['lighthouse-results__card']}>
                            <h4 className={styles['lighthouse-results__name']}>{audit.name}: <span className={styles[`lighthouse-results__value--${audit.scoreColor}`]}>{audit.displayValue}</span></h4>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}

export default LighthouseResults
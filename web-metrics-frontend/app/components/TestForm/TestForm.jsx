"use client"

import styles from './TestForm.module.css';
import { useState } from 'react'
import { setTestResults } from "@/app/redux/features/testResults"
import { useDispatch } from 'react-redux';

const validateUrl = (url) => {
  if (!url) return {
    isValid: false,
    message: 'Please enter a URL'
  }

  if (!url.startsWith('http://') && !url.startsWith('https://')) return {
    isValid: false,
    message: 'Please enter a valid URL'
  }

  return {
    isValid: true,
    message: ''
  }
}

const TestForm = () => {
    const wsUrl = 'ws://localhost:8080/ws/123'
    const [url, setUrl] = useState('')
    const [error, setError] = useState('')

    const dispatch = useDispatch()

    const handleUrlChange = (e) => {
      setUrl(e.target.value)
      setError('')
    }

    const runTest = async (e) => {
      e.preventDefault()

      const { isValid, message } = validateUrl(url)

      if (!isValid) {
        setError(message)
        return
      }

      const ws = new WebSocket(wsUrl)
  
      ws.onopen = () => {
        ws.send(url)
      }
  
      ws.onmessage = (e) => {
        console.log(e.data)
  
        //check if data is in json format
        try {
          const data = JSON.parse(e.data)
          dispatch(setTestResults(data))
          console.log(data)
        } catch (error) {
          console.log(error)
        }
      }
    }

    return (
        <form onSubmit={runTest} className={styles['test-form']}>
            <div className={`${styles['test-form__input-group']} ${error ? styles['test-form__input-group--error'] : ''}`}>
                <label className={styles['test-form__label']} htmlFor='url'>Website URL</label>
                <input onChange={handleUrlChange} className={styles['test-form__input']} id='url' name='url' type='text' />
                <p className={styles['test-form__error']}>{error}</p>
            </div>

            <button className={styles['test-form__submit-button']} type='submit'>Run test</button>
        </form>
    )
}

export default TestForm
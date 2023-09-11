"use client"

import styles from './TestForm.module.css';
import { useState } from 'react'
import { setTestResults } from "@/app/redux/features/testResults"
import { useDispatch } from 'react-redux';

const TestForm = () => {
    const wsUrl = 'ws://localhost:8080/ws/123'
    const testUrl = 'https://www.google.com'
    const [url, setUrl] = useState('')

    const dispatch = useDispatch()

    const handleUrlChange = (e) => {
      setUrl(e.target.value)
    }

    const runTest = async (e) => {
      e.preventDefault()

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
        } catch (error) {
          console.log(error)
        }
      }
    }

    return (
        <form onSubmit={runTest} className={styles['test-form']}>
            <div className={styles['test-form__input-group']}>
                <label className={styles['test-form__label']} htmlFor='url'>URL</label>
                <input onChange={handleUrlChange} className={styles['test-form__input']} id='url' name='url' type='text' />
            </div>

            <button className={styles['test-form__submit-button']} type='submit'>Test</button>
        </form>
    )
}

export default TestForm
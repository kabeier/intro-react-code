import { useState } from 'react'
import Button from '../Button'
import styles from './heading.module.css'

function Heading() {
  const [heading, setHeading] = useState('Pokemon Project')

  return (
    <header>
      <h1 className={styles.heading}>{heading}</h1>
      <Button onClick={() => setHeading('Pokemon Project: Day 2')}>Change Title</Button>
    </header>
  )
}

export default Heading
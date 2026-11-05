import styles from './Card.module.css'

function Card() {
  return (
    <div className={styles.box}>
      <h2 className={styles.title}>Card title</h2>
      <p>The card wants a red title.</p>
    </div>
  )
}

export default Card
import styles from './Transition.module.css'

export default function Transition() {
  return (
    <div className={styles.wrap}>
      <div className={styles.line} />
      <p className={styles.text}>
        But there is a side of me that has nothing to do with technology.
      </p>
      <div className={styles.line} />
    </div>
  )
}

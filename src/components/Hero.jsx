import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Karachi, Pakistan</p>
        <h1 className={styles.name}>Uzair Ansari</h1>
        <p className={styles.tagline}>
          I build technology by day and music culture by night.
        </p>
        <p className={styles.sub}>
          Chief Operating Officer · AI Product Leader · Music Curator
        </p>
        <div className={styles.nav}>
          <a href="#work" className={styles.navLink}>The Work</a>
          <span className={styles.divider}>·</span>
          <a href="#sound-adda" className={styles.navLinkRed}>Sound Adda</a>
          <span className={styles.divider}>·</span>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </div>
      </div>
      <div className={styles.scroll}>
        <span>↓</span>
      </div>
    </section>
  )
}

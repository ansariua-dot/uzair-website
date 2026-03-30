import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>Contact</div>
        <h2 className={styles.heading}>Get in touch.</h2>
        <p className={styles.body}>
          Whether it is about technology, a project, or Sound Adda.
        </p>
        <div className={styles.links}>
          <a href="mailto:ansari.ua@gmail.com" className={styles.link}>
            ansari.ua@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/uzair-ansari-54618011/"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            linkedin.com/in/uzair-ansari-54618011
          </a>
        </div>
        <a href="#" className={styles.top}>Back to top ↑</a>
      </div>
    </section>
  )
}

import styles from './TheWork.module.css'
import { PersonalOSPreview, PSXPreview, QAPreview, RFPPreview } from './ProjectPreview'

const projects = [
  {
    name: 'PersonalOS',
    meta: 'Personal project · 2025 – Present',
    desc: 'An AI-powered executive operating system, vibe-coded from scratch. Integrates with Outlook, Microsoft Teams, and JIRA to produce daily briefings, client alerts, and delivery tracking. Built and maintained personally without a dedicated engineering team.',
    tags: ['Claude Code', 'Node.js', 'React', 'Vite'],
    preview: <PersonalOSPreview />,
  },
  {
    name: 'PSX Daily Signals',
    meta: 'Personal project · 2025',
    desc: 'A daily signal engine for the Pakistan Stock Exchange. Ranks tickers by likelihood of movement using price momentum, SMA crossover, RSI, volume spikes, and LLM-powered news sentiment from live RSS feeds. Outputs a ranked briefing each day.',
    tags: ['Python', 'Streamlit', 'VADER', 'FinBERT'],
    preview: <PSXPreview />,
  },
  {
    name: 'QA Automation Tool',
    meta: 'Catalect internal · 2025',
    desc: 'A conversation QA tool using Deepgram speech-to-text, keyword detection, and sentiment analysis to flag negative customer interactions in call recordings. Currently in active use within the delivery organisation.',
    tags: ['Deepgram', 'Python', 'Sentiment Analysis'],
    preview: <QAPreview />,
  },
  {
    name: 'RFP Checker',
    meta: 'Personal project · 2025',
    desc: 'A Streamlit tool that parses RFP documents and auto-extracts key dates, deliverables, compliance requirements, evaluation criteria, and risk flags — reducing the time spent on manual RFP review in business development workflows.',
    tags: ['Streamlit', 'Python', 'LLM'],
    preview: <RFPPreview />,
  },
]

export default function TheWork() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.container}>

        <div className={styles.label}>The Work</div>

        <div className={styles.intro}>
          <h2 className={styles.heading}>
            I build systems for a living<br />and stages for the love of it.
          </h2>
          <p className={styles.body}>
            The career is on the CV. What the CV does not show is that I spend a lot of
            my own time building tools I actually want to exist — usually with AI, usually
            because something was taking too long to do manually.
          </p>
          <a
            href="/Uzair-Ansari-CV-2026.docx"
            download
            className={styles.cvButton}
          >
            Download CV
          </a>
        </div>

        <div className={styles.projectsLabel}>Personal Projects</div>
        <div className={styles.projects}>
          {projects.map((p) => (
            <div key={p.name} className={styles.card}>
              <div className={styles.previewWrap}>
                {p.preview}
              </div>
              <div className={styles.cardHeader}>
                <span className={styles.cardName}>{p.name}</span>
                <span className={styles.cardMeta}>{p.meta}</span>
              </div>
              <p className={styles.cardDesc}>{p.desc}</p>
              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

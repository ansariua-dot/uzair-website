import styles from './ProjectPreview.module.css'

function PersonalOSPreview() {
  return (
    <div className={styles.window}>
      <div className={styles.titleBar}>
        <span className={styles.dot} style={{background:'#FF5F57'}} />
        <span className={styles.dot} style={{background:'#FFBD2E'}} />
        <span className={styles.dot} style={{background:'#28CA41'}} />
        <span className={styles.windowTitle}>Command & Control Center</span>
      </div>
      <div className={styles.body}>
        <div className={styles.row}>
          <span className={styles.label}>Monday, 30 March 2026</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.alertRow}>
          <span className={styles.alertBadge}>COMPOUND</span>
          <span className={styles.alertText}>Rapidsys — UAT stalled, Gary awaiting build</span>
        </div>
        <div className={styles.alertRow}>
          <span className={styles.alertBadge}>STALE</span>
          <span className={styles.alertText}>CIQ-407 — FreePBX Setup — Blocked 31d</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.sectionLabel}>DUE TODAY</div>
        <div className={styles.taskRow}><span className={styles.dot2} />ITD — Fix Expiry + MRC Field Mapping</div>
        <div className={styles.taskRow}><span className={styles.dot2} />Create Teams Channel + Send Invites</div>
        <div className={styles.divider} />
        <div className={styles.sectionLabel}>THIS WEEK</div>
        <div className={styles.taskRow}><span className={styles.dot3} />AD Engineering — Follow up Armando — Tue</div>
        <div className={styles.taskRow}><span className={styles.dot3} />ConvoIQ QA Module — Internal Demo — Thu</div>
        <div className={styles.taskRow}><span className={styles.dot3} />ITD — UAT Cycle Follow Up — Fri</div>
      </div>
    </div>
  )
}

function PSXPreview() {
  const rows = [
    { ticker: 'OGDC', signal: 'BUY', score: 87, rsi: 44, sentiment: '+' },
    { ticker: 'LUCK', signal: 'BUY', score: 81, rsi: 51, sentiment: '+' },
    { ticker: 'HBL',  signal: 'HOLD', score: 58, rsi: 55, sentiment: '—' },
    { ticker: 'ENGRO',signal: 'SELL', score: 22, rsi: 71, sentiment: '−' },
    { ticker: 'PSO',  signal: 'BUY', score: 76, rsi: 48, sentiment: '+' },
  ]
  return (
    <div className={styles.window}>
      <div className={styles.titleBar}>
        <span className={styles.dot} style={{background:'#FF5F57'}} />
        <span className={styles.dot} style={{background:'#FFBD2E'}} />
        <span className={styles.dot} style={{background:'#28CA41'}} />
        <span className={styles.windowTitle}>PSX Daily Signals — 30 Mar 2026</span>
      </div>
      <div className={styles.body}>
        <div className={styles.tableHeader}>
          <span>Ticker</span><span>Signal</span><span>Score</span><span>RSI</span><span>News</span>
        </div>
        {rows.map(r => (
          <div key={r.ticker} className={styles.tableRow}>
            <span className={styles.ticker}>{r.ticker}</span>
            <span className={r.signal === 'BUY' ? styles.buy : r.signal === 'SELL' ? styles.sell : styles.hold}>
              {r.signal}
            </span>
            <span className={styles.score}>{r.score}</span>
            <span className={styles.rsi}>{r.rsi}</span>
            <span className={r.sentiment === '+' ? styles.buy : r.sentiment === '−' ? styles.sell : styles.hold}>
              {r.sentiment}
            </span>
          </div>
        ))}
        <div className={styles.divider} />
        <div className={styles.footNote}>Momentum · RSI · Volume · News Sentiment (VADER)</div>
      </div>
    </div>
  )
}

function QAPreview() {
  return (
    <div className={styles.window}>
      <div className={styles.titleBar}>
        <span className={styles.dot} style={{background:'#FF5F57'}} />
        <span className={styles.dot} style={{background:'#FFBD2E'}} />
        <span className={styles.dot} style={{background:'#28CA41'}} />
        <span className={styles.windowTitle}>Conversation QA Tool</span>
      </div>
      <div className={styles.body}>
        <div className={styles.qaRow}>
          <div className={styles.qaFile}>call_247.mp3 <span className={styles.qaStatus}>Analysed</span></div>
        </div>
        <div className={styles.qaBubble + ' ' + styles.qaAgent}>Agent: "Your package includes unlimited data..."</div>
        <div className={styles.qaBubble + ' ' + styles.qaCustomer}>Customer: "That's not what I was told last time."</div>
        <div className={styles.qaFlag}>
          <span className={styles.flagBadge}>⚠ FLAG</span>
          <span className={styles.flagText}>Negative sentiment · Contradiction detected</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.qaRow}>
          <div className={styles.qaFile}>call_251.mp3 <span className={styles.qaStatus}>Analysed</span></div>
        </div>
        <div className={styles.qaBubble + ' ' + styles.qaAgent}>Agent: "I'll transfer you to our billing team."</div>
        <div className={styles.qaBubble + ' ' + styles.qaCustomer}>Customer: "I've been transferred three times already."</div>
        <div className={styles.qaFlag}>
          <span className={styles.flagBadge}>⚠ FLAG</span>
          <span className={styles.flagText}>Escalation risk · Repeat contact</span>
        </div>
      </div>
    </div>
  )
}

function RFPPreview() {
  return (
    <div className={styles.window}>
      <div className={styles.titleBar}>
        <span className={styles.dot} style={{background:'#FF5F57'}} />
        <span className={styles.dot} style={{background:'#FFBD2E'}} />
        <span className={styles.dot} style={{background:'#28CA41'}} />
        <span className={styles.windowTitle}>RFP Checker</span>
      </div>
      <div className={styles.body}>
        <div className={styles.rfpFile}>📄 RFP_Government_IT_Services_2026.pdf</div>
        <div className={styles.divider} />
        <div className={styles.rfpSection}>
          <div className={styles.rfpLabel}>Submission Deadline</div>
          <div className={styles.rfpValue}>April 15, 2026 · 17:00 PKT</div>
        </div>
        <div className={styles.rfpSection}>
          <div className={styles.rfpLabel}>Key Deliverables</div>
          <div className={styles.rfpValue}>Technical proposal · Pricing schedule · Vendor registration docs</div>
        </div>
        <div className={styles.rfpSection}>
          <div className={styles.rfpLabel}>Compliance Flags</div>
          <div className={styles.rfpValue + ' ' + styles.rfpRisk}>ISO 27001 certification required · Local entity clause</div>
        </div>
        <div className={styles.rfpSection}>
          <div className={styles.rfpLabel}>Evaluation Criteria</div>
          <div className={styles.rfpValue}>Technical 40% · Price 35% · Experience 25%</div>
        </div>
      </div>
    </div>
  )
}

export { PersonalOSPreview, PSXPreview, QAPreview, RFPPreview }

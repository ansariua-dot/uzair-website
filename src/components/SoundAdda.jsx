import styles from './SoundAdda.module.css'
import VideoCarousel from './VideoCarousel'

// Drop your photos into public/images/sound-adda/
// Then update the src values below — remove the null to activate
const events = [
  {
    name: 'Sound Adda × Yamaha',
    date: 'September 27, 2025',
    venue: 'Yamaha Music Store, Karachi',
    desc: 'The first step outside the jam room. A cause-led charity event raising funds for flood relief through Alkhidmat Foundation. Acoustic performances, floor seating, a curated lineup of underground musicians. Around 80 people in the room — intimate, but proof the format could travel.',
    stat: '80 attendees',
    photos: [
      null, // replace with '/images/sound-adda/yamaha-1.jpg'
      null, // replace with '/images/sound-adda/yamaha-2.jpg'
      null, // replace with '/images/sound-adda/yamaha-3.jpg'
    ],
  },
  {
    name: 'Echoes of Khairpur Mirs',
    date: 'November 1, 2025',
    venue: 'Khairpur Arts Council Open Air Theatre',
    desc: 'The proof of scale. A full production event — line array, monitors, in-ear mixes, a Yamaha drum kit, a digital console, and a programme running from sunset past midnight. Artists: Kashan Ali, Sana Sindhu, Raza Hyder, Ashir Samo, Talha Shakeel, Project A.B. The same curation philosophy, the same energy, on a stage built for 1,200 people.',
    stat: '1,200 attendees',
    photos: [
      null, // replace with '/images/sound-adda/khairpur-1.jpg'
      null, // replace with '/images/sound-adda/khairpur-2.jpg'
      null, // replace with '/images/sound-adda/khairpur-3.jpg'
    ],
  },
]

function PhotoGrid({ photos }) {
  const active = photos.filter(Boolean)
  if (active.length === 0) return null
  return (
    <div className={styles.photoGrid} data-count={active.length}>
      {active.map((src, i) => (
        <img key={i} src={src} alt="" className={styles.photo} />
      ))}
    </div>
  )
}

export default function SoundAdda() {
  return (
    <section id="sound-adda" className={styles.section}>
      <div className={styles.container}>

        <div className={styles.label}>Sound Adda</div>

        <div className={styles.intro}>
          <h2 className={styles.heading}>
            Built for community.<br />Sustained by purpose.
          </h2>
          <p className={styles.body}>
            Sound Adda began as a non-profit. Not a venue, not a brand — a gathering. A physical
            space in Karachi where musicians could come together without agenda, play freely, and
            build real relationships. The idea was simple: meaningful curation, a resident house
            band, and an audience close enough to feel every note. No ticket sales. No commercials.
            Just the music and the people in the room.
          </p>
          <p className={styles.body}>
            Over eight years, that consistency built something harder to manufacture. A network
            of 50-plus musicians, TV and radio personalities, business entrepreneurs, and creative
            professionals — all connected through the same room. Artists have found collaborators
            here. Musicians have found clients, gigs, and long-term business through connections
            that started at a Sound Adda session. The platform became a quiet engine for real-world
            opportunity within Pakistan's independent music scene.
          </p>
          <p className={styles.body}>
            Live events came later — not as a commercial pivot, but as proof that the philosophy
            could travel. From an intimate charity event at the Yamaha Music Store raising funds
            for flood relief, to a full production concert in Khairpur Mirs for 1,200 people. The
            same curation. The same spirit. A bigger stage.
          </p>
        </div>

        <VideoCarousel />

        <div className={styles.eventsLabel}>Live Events</div>
        <div className={styles.events}>
          {events.map((e) => (
            <div key={e.name} className={styles.card}>
              <PhotoGrid photos={e.photos} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardName}>{e.name}</h3>
                <p className={styles.cardDate}>{e.date} · {e.venue}</p>
                <p className={styles.cardDesc}>{e.desc}</p>
                <div className={styles.cardBottom}>
                  <span className={styles.stat}>{e.stat}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Sound Adda is still a jam room at heart. It is also a platform, a network,
            and a quiet vehicle for giving independent musicians in Pakistan something
            that is genuinely hard to find: access, connection, and community.
          </p>
        </div>

      </div>
    </section>
  )
}

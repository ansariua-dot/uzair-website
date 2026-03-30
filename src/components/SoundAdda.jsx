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
            Eight years of building<br />a music culture.
          </h2>
          <p className={styles.body}>
            Sound Adda started as a jam room — a physical space in Karachi where musicians
            could come together, play freely, and build chemistry without the pressure
            of a commercial stage. The format was simple: careful curation, a resident
            house band, and an audience close enough to feel every note.
          </p>
          <p className={styles.body}>
            Over eight years, that consistency built something real. A network of 50-plus
            musicians. A recognisable experience. A platform trusted enough to carry its
            philosophy onto bigger stages — without losing what made the room feel like
            the room.
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
            Sound Adda is still a jam room at heart. It is also now a platform capable
            of carrying the same spirit onto any stage.
          </p>
        </div>

      </div>
    </section>
  )
}

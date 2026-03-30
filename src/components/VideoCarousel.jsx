import { useState, useRef, useEffect, useCallback } from 'react'
import styles from './VideoCarousel.module.css'

const videos = [
  '/videos/sa-1.mp4',
  '/videos/sa-2.mp4',
  '/videos/sa-3.mp4',
  '/videos/sa-4.mp4',
]

export default function VideoCarousel() {
  const [current, setCurrent]       = useState(0)
  const [muted, setMuted]           = useState(true)
  const [playing, setPlaying]       = useState(true)
  const [expanded, setExpanded]     = useState(false)
  const [fading, setFading]         = useState(false)

  const videoRef  = useRef(null)
  const wrapRef   = useRef(null)

  // Play/load when current changes (after fade)
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.load()
    if (playing) v.play().catch(() => {})
  }, [current])

  // Sync play/pause state
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    playing ? v.play().catch(() => {}) : v.pause()
  }, [playing])

  // Collapse when clicking outside
  useEffect(() => {
    if (!expanded) return
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setExpanded(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [expanded])

  const navigate = useCallback((dir) => {
    if (fading) return
    setFading(true)
    setTimeout(() => {
      setCurrent((c) => (c + dir + videos.length) % videos.length)
      setFading(false)
    }, 220)
  }, [fading])

  const leftIdx  = (current - 1 + videos.length) % videos.length
  const rightIdx = (current + 1) % videos.length

  return (
    <div
      ref={wrapRef}
      className={`${styles.wrap} ${expanded ? styles.wrapExpanded : ''}`}
      onClick={() => !expanded && setExpanded(true)}
    >
      <div className={styles.track}>

        {/* Left thumbnail */}
        <div className={styles.side} onClick={(e) => { e.stopPropagation(); navigate(-1) }}>
          <video className={styles.sideVideo} src={videos[leftIdx]} muted playsInline />
          <div className={styles.sideOverlay}>
            <span className={styles.sideArrow}>‹</span>
          </div>
        </div>

        {/* Main video */}
        <div className={styles.main}>
          <div className={styles.videoWrap}>
            <video
              key={current}
              ref={videoRef}
              className={`${styles.mainVideo} ${fading ? styles.fadeOut : styles.fadeIn}`}
              src={videos[current]}
              muted={muted}
              playsInline
              loop
              onClick={(e) => { e.stopPropagation(); setPlaying((p) => !p) }}
            />

            {/* Play/pause overlay hint — fades in when paused */}
            {!playing && (
              <div
                className={styles.pauseOverlay}
                onClick={(e) => { e.stopPropagation(); setPlaying(true) }}
              >
                ▶
              </div>
            )}

            {/* Mute button */}
            <button
              className={styles.muteBtn}
              onClick={(e) => { e.stopPropagation(); setMuted((m) => !m) }}
            >
              {muted ? '🔇' : '🔊'}
            </button>
          </div>

          {/* Controls */}
          <div className={styles.controls}>
            <button
              className={styles.btn}
              onClick={(e) => { e.stopPropagation(); setPlaying((p) => !p) }}
            >
              {playing ? '⏸' : '▶'}
            </button>
            <div className={styles.dots}>
              {videos.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                  onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
                />
              ))}
            </div>
            <button
              className={styles.btn}
              onClick={(e) => { e.stopPropagation(); setMuted((m) => !m) }}
            >
              {muted ? '🔇' : '🔊'}
            </button>
          </div>
        </div>

        {/* Right thumbnail */}
        <div className={styles.side} onClick={(e) => { e.stopPropagation(); navigate(1) }}>
          <video className={styles.sideVideo} src={videos[rightIdx]} muted playsInline />
          <div className={styles.sideOverlay}>
            <span className={styles.sideArrow}>›</span>
          </div>
        </div>

      </div>
    </div>
  )
}

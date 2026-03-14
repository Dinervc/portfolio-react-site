import { useEffect, useId, useRef, useState } from 'react'

const RED_MESSAGES = [
  'Nice try.',
  "You can't delete me.",
  'Still not deletable.',
  'Persistence detected.',
]

function randomOffset() {
  return {
    x: Math.floor(Math.random() * 42) - 21,
    y: Math.floor(Math.random() * 18) - 9,
  }
}

const RED_IDLE_RESET_MS = 6800

export function ShellFrame({ title, children }) {
  const [isMinimized, setIsMinimized] = useState(false)
  const [isPopup, setIsPopup] = useState(false)
  const [redOffset, setRedOffset] = useState({ x: 0, y: 0 })
  const [redAttempts, setRedAttempts] = useState(0)
  const [flashMessage, setFlashMessage] = useState('')

  const popupId = useId()
  const messageTimeoutRef = useRef(null)
  const dodgeTimeoutRef = useRef(null)

  useEffect(() => {
    const handlePopupOpen = (event) => {
      if (event.detail !== popupId) {
        setIsPopup(false)
      }
    }

    window.addEventListener('shell-frame:popup-open', handlePopupOpen)

    return () => {
      window.removeEventListener('shell-frame:popup-open', handlePopupOpen)
    }
  }, [popupId])

  useEffect(() => {
    if (!isPopup) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsPopup(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isPopup])

  useEffect(
    () => () => {
      if (messageTimeoutRef.current) {
        clearTimeout(messageTimeoutRef.current)
      }
      if (dodgeTimeoutRef.current) {
        clearTimeout(dodgeTimeoutRef.current)
      }
    },
    [],
  )

  const statusLabel = isPopup ? 'POP' : isMinimized ? 'MIN' : 'LIVE'

  const onToggleMinimize = () => {
    if (isPopup) {
      setIsPopup(false)
      setIsMinimized(true)
      return
    }

    setIsMinimized((value) => !value)
  }

  const onTogglePopup = () => {
    if (isPopup) {
      setIsPopup(false)
      return
    }

    window.dispatchEvent(
      new CustomEvent('shell-frame:popup-open', {
        detail: popupId,
      }),
    )
    setIsMinimized(false)
    setIsPopup(true)
  }

  const onRedClick = () => {
    setRedAttempts((attempts) => {
      const nextAttempts = attempts + 1
      const messageIndex = (nextAttempts - 1) % RED_MESSAGES.length
      setFlashMessage(RED_MESSAGES[messageIndex])
      return nextAttempts
    })

    if (messageTimeoutRef.current) {
      clearTimeout(messageTimeoutRef.current)
    }

    if (dodgeTimeoutRef.current) {
      clearTimeout(dodgeTimeoutRef.current)
    }

    setRedOffset(randomOffset())

    dodgeTimeoutRef.current = setTimeout(() => {
      setRedOffset({ x: 0, y: 0 })
    }, RED_IDLE_RESET_MS)

    messageTimeoutRef.current = setTimeout(() => {
      setFlashMessage('')
    }, 2100)
  }

  return (
    <div className={`shell-frame-wrap ${isPopup ? 'shell-frame-wrap--popup' : ''}`}>
      {isPopup ? (
        <button
          type="button"
          className="shell-frame__backdrop"
          aria-label="Close popup view"
          onClick={() => setIsPopup(false)}
        />
      ) : null}

      {flashMessage ? (
        <span
          className={`shell-frame__flash ${isPopup ? 'shell-frame__flash--popup' : 'shell-frame__flash--inline'}`}
        >
          {flashMessage}
        </span>
      ) : null}

      <section
        className={`shell-frame ${isPopup ? 'shell-frame--popup' : ''} ${isMinimized ? 'shell-frame--minimized' : ''}`}
      >
        <header className="shell-frame__header">
          <div className="shell-frame__lights">
            <button
              type="button"
              className={`shell-light shell-light--red ${redAttempts > 0 ? 'is-clicked' : ''}`}
              style={{
                '--offset-x': `${redOffset.x}px`,
                '--offset-y': `${redOffset.y}px`,
              }}
              aria-label="Close section"
              onClick={onRedClick}
            />
            <button
              type="button"
              className="shell-light shell-light--amber"
              aria-label={isMinimized ? 'Expand section' : 'Minimize section'}
              onClick={onToggleMinimize}
            />
            <button
              type="button"
              className="shell-light shell-light--green"
              aria-label={isPopup ? 'Exit popup mode' : 'Open popup mode'}
              onClick={onTogglePopup}
            />
          </div>

          <div className="shell-frame__title-wrap">
            <p className="shell-frame__title">{title}</p>
          </div>

          <span className="shell-frame__status">{statusLabel}</span>
        </header>

        {!isMinimized ? <div className="shell-frame__body">{children}</div> : null}
      </section>
    </div>
  )
}

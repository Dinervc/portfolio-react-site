import { useId } from 'react'

export function TerminalLogo() {
  const uid = useId().replace(/:/g, '')
  const primaryGradientId = `${uid}-primary`
  const atomGradientId = `${uid}-atom`
  const coreGradientId = `${uid}-core`
  const atomScale = 1.1
  const syncedShellDuration = 30
  const syncedShellSpin = 360
  const orbitFlatten = 0.47
  const baseOrbitRadius = 82 * atomScale
  const orbitStep = 8.5 * atomScale
  const shells = [
    {
      key: 'k',
      baseAngle: 0,
      shellSpin: syncedShellSpin,
      shellDur: syncedShellDuration,
      orbitRadius: baseOrbitRadius,
      electronStart: 10,
      electronSpin: 360,
      electronDur: 6.8,
      angles: [0, 180],
      radii: [3.5, 3.1],
    },
    {
      key: 'l',
      baseAngle: 60,
      shellSpin: syncedShellSpin,
      shellDur: syncedShellDuration,
      orbitRadius: baseOrbitRadius + orbitStep,
      electronStart: 32,
      electronSpin: 360,
      electronDur: 8.4,
      angles: [0, 45, 90, 135, 180, 225, 270, 315],
      radii: [3.2, 3, 2.9, 2.8, 3.1, 2.8, 3, 2.9],
    },
    {
      key: 'm',
      baseAngle: -60,
      shellSpin: syncedShellSpin,
      shellDur: syncedShellDuration,
      orbitRadius: baseOrbitRadius + orbitStep * 2,
      electronStart: -26,
      electronSpin: 360,
      electronDur: 10.6,
      angles: [30, 150, 270],
      radii: [3.3, 3, 2.9],
    },
  ]

  return (
    <div className="terminal-logo" role="img" aria-label="AP terminal emblem">
      <svg className="terminal-logo__svg" viewBox="0 0 240 240" aria-hidden="true">
        <defs>
          <linearGradient id={primaryGradientId} x1="20" y1="28" x2="220" y2="215" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6df7b4" />
            <stop offset="55%" stopColor="#56f3a7" />
            <stop offset="100%" stopColor="#ffbc72" />
          </linearGradient>
          <linearGradient id={atomGradientId} x1="45" y1="35" x2="202" y2="212" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(109, 247, 180, 0.92)" />
            <stop offset="100%" stopColor="rgba(255, 188, 114, 0.9)" />
          </linearGradient>
          <radialGradient id={coreGradientId} cx="48%" cy="42%" r="62%">
            <stop offset="0%" stopColor="rgba(109, 247, 180, 0.24)" />
            <stop offset="55%" stopColor="rgba(86, 243, 167, 0.14)" />
            <stop offset="100%" stopColor="rgba(255, 188, 114, 0.08)" />
          </radialGradient>
        </defs>

        <circle className="terminal-logo__core" cx="120" cy="120" r={66 * atomScale} fill={`url(#${coreGradientId})`} />

        <g className="terminal-logo__atom" stroke={`url(#${atomGradientId})`} fill="none">
          {shells.map((shell) => (
            <g key={shell.key} className={`terminal-logo__shell terminal-logo__shell--${shell.key}`}>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`${shell.baseAngle} 120 120`}
                to={`${shell.baseAngle + shell.shellSpin} 120 120`}
                dur={`${shell.shellDur}s`}
                repeatCount="indefinite"
              />
              <g transform="translate(120 120)">
                <g transform={`scale(1 ${orbitFlatten})`}>
                  <ellipse className="terminal-logo__orbit-line" cx="0" cy="0" rx={shell.orbitRadius} ry={shell.orbitRadius} />
                </g>
              </g>
            </g>
          ))}
        </g>

        <g
          className="terminal-logo__glyph"
          stroke={`url(#${primaryGradientId})`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M84 168L112 78" />
          <path d="M112 78L140 168" />
          <path d="M98 132H128" />
          <path d="M112 78H134C149 78 158 88 158 104C158 120 148 132 134 132C131 132 129 132 126 131" />
        </g>

        <g className="terminal-logo__electrons" fill={`url(#${primaryGradientId})`}>
          {shells.map((shell) => (
            <g key={`electrons-${shell.key}`} className={`terminal-logo__shell terminal-logo__shell--${shell.key}`}>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`${shell.baseAngle} 120 120`}
                to={`${shell.baseAngle + shell.shellSpin} 120 120`}
                dur={`${shell.shellDur}s`}
                repeatCount="indefinite"
              />
              <g transform="translate(120 120)">
                <g transform={`scale(1 ${orbitFlatten})`}>
                  <g className="terminal-logo__electron-runner">
                    {shell.angles.map((angle, index) => (
                      <circle
                        key={`${shell.key}-${angle}`}
                        className="terminal-logo__electron"
                        cx={shell.orbitRadius}
                        cy="0"
                        r={shell.radii[index] * atomScale}
                        transform={`rotate(${angle})`}
                      />
                    ))}
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from={`${shell.electronStart} 0 0`}
                      to={`${shell.electronStart + shell.electronSpin} 0 0`}
                      dur={`${shell.electronDur}s`}
                      repeatCount="indefinite"
                    />
                  </g>
                </g>
              </g>
            </g>
          ))}
        </g>
      </svg>
      <span className="terminal-logo__scanline" aria-hidden="true" />
    </div>
  )
}

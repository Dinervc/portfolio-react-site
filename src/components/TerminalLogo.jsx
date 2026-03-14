import { useId } from 'react'
import { createApLogoModel } from '../lib/createApLogoModel'

function GradientDef({ id, gradient }) {
  const stops = Array.isArray(gradient?.stops) ? gradient.stops : []

  if (gradient?.type === 'radial') {
    return (
      <radialGradient id={id} cx={gradient.cx} cy={gradient.cy} r={gradient.r}>
        {stops.map((stop, index) => (
          <stop key={`${id}-${index}`} {...stop} />
        ))}
      </radialGradient>
    )
  }

  return (
    <linearGradient
      id={id}
      x1={gradient?.x1}
      y1={gradient?.y1}
      x2={gradient?.x2}
      y2={gradient?.y2}
      gradientUnits={gradient?.gradientUnits}
    >
      {stops.map((stop, index) => (
        <stop key={`${id}-${index}`} {...stop} />
      ))}
    </linearGradient>
  )
}

export function TerminalLogo({ ariaLabel, params, style }) {
  const uid = useId().replace(/:/g, '')
  const primaryGradientId = `${uid}-primary`
  const atomGradientId = `${uid}-atom`
  const coreGradientId = `${uid}-core`
  const logoModel = createApLogoModel(params)
  const {
    atomScale,
    center,
    coreRadius,
    gradients,
    glyphPaths,
    orbitFlatten,
    repeatCount,
    shells,
    surfaceCssVars,
    viewBoxSize,
  } = logoModel

  const accessibilityProps = ariaLabel
    ? { role: 'img', 'aria-label': ariaLabel }
    : { 'aria-hidden': true }
  const mergedStyle = {
    ...surfaceCssVars,
    ...style,
  }

  return (
    <div className="terminal-logo" {...accessibilityProps} style={mergedStyle}>
      <svg className="terminal-logo__svg" viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} aria-hidden="true">
        <defs>
          <GradientDef id={primaryGradientId} gradient={gradients?.primary} />
          <GradientDef id={atomGradientId} gradient={gradients?.atom} />
          <GradientDef id={coreGradientId} gradient={gradients?.core} />
        </defs>

        <circle className="terminal-logo__core" cx={center} cy={center} r={coreRadius} fill={`url(#${coreGradientId})`} />

        <g className="terminal-logo__atom" stroke={`url(#${atomGradientId})`} fill="none">
          {shells.map((shell) => (
            <g key={shell.key} className={`terminal-logo__shell terminal-logo__shell--${shell.key}`}>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`${shell.baseAngle} ${center} ${center}`}
                to={`${shell.baseAngle + shell.shellSpin} ${center} ${center}`}
                dur={`${shell.shellDur}s`}
                repeatCount={repeatCount}
              />
              <g transform={`translate(${center} ${center})`}>
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
          {glyphPaths.map((path) => (
            <path key={path} d={path} />
          ))}
        </g>

        <g className="terminal-logo__electrons" fill={`url(#${primaryGradientId})`}>
          {shells.map((shell) => (
            <g key={`electrons-${shell.key}`} className={`terminal-logo__shell terminal-logo__shell--${shell.key}`}>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`${shell.baseAngle} ${center} ${center}`}
                to={`${shell.baseAngle + shell.shellSpin} ${center} ${center}`}
                dur={`${shell.shellDur}s`}
                repeatCount={repeatCount}
              />
              <g transform={`translate(${center} ${center})`}>
                <g transform={`scale(1 ${orbitFlatten})`}>
                  <g className="terminal-logo__electron-runner">
                    {shell.angles.map((angle, index) => {
                      // If radii length does not match angles, fall back to the last radius.
                      const fallbackRadius = shell.radii[shell.radii.length - 1] ?? 1
                      const electronRadius = shell.radii[index] ?? fallbackRadius

                      return (
                        <circle
                          key={`${shell.key}-${angle}`}
                          className="terminal-logo__electron"
                          cx={shell.orbitRadius}
                          cy="0"
                          r={electronRadius * atomScale}
                          transform={`rotate(${angle})`}
                        />
                      )
                    })}
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from={`${shell.electronStart} 0 0`}
                      to={`${shell.electronStart + shell.electronSpin} 0 0`}
                      dur={`${shell.electronDur}s`}
                      repeatCount={repeatCount}
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

const AP_LOGO_SURFACE_PRESETS = {
  silver: {
    border: 'rgba(191, 200, 212, 0.46)',
    borderDocked: 'rgba(226, 232, 240, 0.48)',
    innerBorder: 'rgba(255, 255, 255, 0.03)',
    innerBorderDocked: 'rgba(255, 255, 255, 0.05)',
    shadow: 'rgba(0, 0, 0, 0.4)',
    shadowDocked: 'rgba(0, 0, 0, 0.44)',
    bgHighlightA: 'rgba(222, 228, 236, 0.26)',
    bgHighlightB: 'rgba(152, 163, 177, 0.24)',
    bgStart: 'rgba(9, 16, 28, 0.95)',
    bgEnd: 'rgba(5, 10, 19, 0.96)',
    sheen: 'rgba(255, 255, 255, 0.2)',
    glyphGlow: 'rgba(181, 194, 210, 0.28)',
    electronGlow: 'rgba(205, 214, 224, 0.75)',
    scanline: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(192, 204, 218, 0.24), rgba(255, 255, 255, 0))',
    scanlineBlur: '7px',
    radiationGlow: 'transparent',
    radiationGlowDocked: 'transparent',
    radiationInset: 'transparent',
    radioactive: false,
  },
  gold: {
    border: 'rgba(224, 184, 104, 0.52)',
    borderDocked: 'rgba(237, 206, 139, 0.6)',
    innerBorder: 'rgba(255, 235, 196, 0.08)',
    innerBorderDocked: 'rgba(255, 238, 208, 0.12)',
    shadow: 'rgba(0, 0, 0, 0.42)',
    shadowDocked: 'rgba(0, 0, 0, 0.47)',
    bgHighlightA: 'rgba(255, 226, 163, 0.25)',
    bgHighlightB: 'rgba(203, 145, 61, 0.2)',
    bgStart: 'rgba(34, 20, 5, 0.95)',
    bgEnd: 'rgba(20, 11, 2, 0.96)',
    sheen: 'rgba(255, 232, 176, 0.28)',
    glyphGlow: 'rgba(246, 210, 138, 0.35)',
    electronGlow: 'rgba(255, 222, 156, 0.86)',
    scanline: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 211, 126, 0.28), rgba(255, 255, 255, 0))',
    scanlineBlur: '7px',
    radiationGlow: 'transparent',
    radiationGlowDocked: 'transparent',
    radiationInset: 'transparent',
    radioactive: false,
  },
  graphite: {
    border: 'rgba(148, 158, 173, 0.44)',
    borderDocked: 'rgba(182, 193, 209, 0.52)',
    innerBorder: 'rgba(235, 240, 249, 0.03)',
    innerBorderDocked: 'rgba(240, 245, 255, 0.06)',
    shadow: 'rgba(0, 0, 0, 0.46)',
    shadowDocked: 'rgba(0, 0, 0, 0.52)',
    bgHighlightA: 'rgba(186, 198, 214, 0.22)',
    bgHighlightB: 'rgba(112, 126, 145, 0.2)',
    bgStart: 'rgba(12, 17, 27, 0.95)',
    bgEnd: 'rgba(6, 10, 17, 0.97)',
    sheen: 'rgba(214, 223, 235, 0.19)',
    glyphGlow: 'rgba(163, 177, 196, 0.3)',
    electronGlow: 'rgba(198, 210, 226, 0.74)',
    scanline: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(173, 189, 210, 0.24), rgba(255, 255, 255, 0))',
    scanlineBlur: '7px',
    radiationGlow: 'transparent',
    radiationGlowDocked: 'transparent',
    radiationInset: 'transparent',
    radioactive: false,
  },
  uranium: {
    border: 'rgba(126, 255, 156, 0.58)',
    borderDocked: 'rgba(155, 255, 181, 0.68)',
    innerBorder: 'rgba(182, 255, 199, 0.12)',
    innerBorderDocked: 'rgba(200, 255, 214, 0.16)',
    shadow: 'rgba(0, 0, 0, 0.45)',
    shadowDocked: 'rgba(0, 0, 0, 0.51)',
    bgHighlightA: 'rgba(133, 255, 170, 0.23)',
    bgHighlightB: 'rgba(49, 178, 101, 0.24)',
    bgStart: 'rgba(6, 24, 13, 0.95)',
    bgEnd: 'rgba(3, 13, 7, 0.97)',
    sheen: 'rgba(172, 255, 194, 0.32)',
    glyphGlow: 'rgba(122, 255, 164, 0.56)',
    electronGlow: 'rgba(156, 255, 188, 0.96)',
    scanline: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(96, 255, 151, 0.3), rgba(255, 255, 255, 0))',
    scanlineBlur: '8px',
    radiationGlow: 'rgba(102, 255, 147, 0.52)',
    radiationGlowDocked: 'rgba(119, 255, 161, 0.6)',
    radiationInset: 'rgba(95, 255, 141, 0.16)',
    radioactive: true,
  },
}

const DEFAULT_AP_LOGO_PARAMS = {
  viewBoxSize: 240,
  center: 120,
  atomScale: 1.1,
  orbitFlatten: 0.47,
  orbitBaseRadius: 82,
  orbitStep: 8.5,
  orbitPadding: 12,
  autoFitOrbits: true,
  coreRadius: 66,
  syncedShellSpin: 360,
  syncedShellDuration: 30,
  defaultElectronSpin: 360,
  defaultElectronRadius: 3.2,
  electronRadiusDecay: 0.2,
  defaultElectronDurBase: 6.8,
  defaultElectronDurStep: 1.8,
  defaultElectronStartOffset: 10,
  defaultElectronStartStep: 22,
  baseOrbitAngles: [0, 60, -60, 30, -30, 90, 45, -45],
  repeatCount: 'indefinite',
  surfacePreset: 'silver',
  surfaceOverrides: {},
  gradients: {
    primary: {
      type: 'linear',
      x1: '20',
      y1: '28',
      x2: '220',
      y2: '215',
      gradientUnits: 'userSpaceOnUse',
      stops: [
        { offset: '0%', stopColor: '#edf2f7' },
        { offset: '55%', stopColor: '#bcc4cf' },
        { offset: '100%', stopColor: '#8f98a5' },
      ],
    },
    atom: {
      type: 'linear',
      x1: '45',
      y1: '35',
      x2: '202',
      y2: '212',
      gradientUnits: 'userSpaceOnUse',
      stops: [
        { offset: '0%', stopColor: 'rgba(228, 234, 242, 0.92)' },
        { offset: '100%', stopColor: 'rgba(146, 156, 168, 0.9)' },
      ],
    },
    core: {
      type: 'radial',
      cx: '48%',
      cy: '42%',
      r: '62%',
      stops: [
        { offset: '0%', stopColor: 'rgba(226, 232, 240, 0.3)' },
        { offset: '55%', stopColor: 'rgba(165, 175, 188, 0.17)' },
        { offset: '100%', stopColor: 'rgba(120, 131, 146, 0.1)' },
      ],
    },
  },
  glyphPaths: [
    'M84 168L112 78',
    'M112 78L140 168',
    'M98 132H128',
    'M112 78H134C149 78 158 88 158 104C158 120 148 132 134 132C131 132 129 132 126 131',
  ],
  // Explicit shells remain supported for full manual control.
  shells: [
    {
      key: 'k',
      baseAngle: 0,
      orbitOffsetSteps: 0,
      shellSpin: 360,
      shellDur: 30,
      electronStart: 10,
      electronSpin: 360,
      electronDur: 6.8,
      angles: [0, 180],
      radii: [3.5, 3.1],
    },
    {
      key: 'l',
      baseAngle: 60,
      orbitOffsetSteps: 1,
      shellSpin: 360,
      shellDur: 30,
      electronStart: 32,
      electronSpin: 360,
      electronDur: 8.4,
      angles: [0, 45, 90, 135, 180, 225, 270, 315],
      radii: [3.2, 3, 2.9, 2.8, 3.1, 2.8, 3, 2.9],
    },
    {
      key: 'm',
      baseAngle: -60,
      orbitOffsetSteps: 2,
      shellSpin: 360,
      shellDur: 30,
      electronStart: -26,
      electronSpin: 360,
      electronDur: 10.6,
      angles: [30, 150, 270],
      radii: [3.3, 3, 2.9],
    },
  ],
}

function isPlainObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function cloneValue(value) {
  if (Array.isArray(value)) {
    return value.map(cloneValue)
  }

  if (isPlainObject(value)) {
    const clone = {}
    for (const key of Object.keys(value)) {
      clone[key] = cloneValue(value[key])
    }
    return clone
  }

  return value
}

function mergeDeep(baseValue, overrideValue) {
  if (overrideValue === undefined) {
    return cloneValue(baseValue)
  }

  if (Array.isArray(overrideValue)) {
    return cloneValue(overrideValue)
  }

  if (isPlainObject(baseValue) && isPlainObject(overrideValue)) {
    const merged = {}
    const keys = new Set([...Object.keys(baseValue), ...Object.keys(overrideValue)])

    for (const key of keys) {
      merged[key] = mergeDeep(baseValue[key], overrideValue[key])
    }

    return merged
  }

  return cloneValue(overrideValue)
}

function toFiniteNumber(value, fallback) {
  return Number.isFinite(value) ? value : fallback
}

function normalizeElectronCount(value) {
  const numeric = Number(value)
  if (!Number.isFinite(numeric)) {
    return 0
  }
  return Math.max(0, Math.round(numeric))
}

function distributeAngles(count, angleOffset = 0) {
  const safeCount = normalizeElectronCount(count)
  if (safeCount === 0) {
    return []
  }

  const step = 360 / safeCount
  return Array.from({ length: safeCount }, (_, index) => angleOffset + step * index)
}

function normalizeAxisAngle(angle) {
  const normalized = ((angle % 180) + 180) % 180
  return normalized === 180 ? 0 : normalized
}

function hasAxisCollision(usedAxes, candidateAngle, epsilon = 0.35) {
  const candidateAxis = normalizeAxisAngle(candidateAngle)

  return usedAxes.some((axis) => {
    const distance = Math.abs(axis - candidateAxis)
    const wrappedDistance = Math.min(distance, 180 - distance)
    return wrappedDistance < epsilon
  })
}

function generateBaseOrbitAngles(count, preferredAngles = []) {
  const safeCount = normalizeElectronCount(count)
  if (safeCount === 0) {
    return []
  }

  const result = []
  const usedAxes = []
  const preferred = Array.isArray(preferredAngles)
    ? preferredAngles.filter((angle) => Number.isFinite(angle))
    : []

  for (const angle of preferred) {
    if (result.length >= safeCount) {
      break
    }

    if (!hasAxisCollision(usedAxes, angle)) {
      result.push(angle)
      usedAxes.push(normalizeAxisAngle(angle))
    }
  }

  if (result.length < safeCount) {
    const step = 180 / safeCount
    let index = 0

    while (result.length < safeCount && index < safeCount * 12) {
      const angle = index * step
      if (!hasAxisCollision(usedAxes, angle)) {
        result.push(angle)
        usedAxes.push(normalizeAxisAngle(angle))
      }
      index += 1
    }
  }

  while (result.length < safeCount) {
    const fallbackAngle = result.length * (180 / safeCount)
    result.push(fallbackAngle)
  }

  return result
}

function createOrbitRadii(orbitConfig, orbitIndex, electronCount, params) {
  if (Array.isArray(orbitConfig.radii) && orbitConfig.radii.length > 0) {
    return orbitConfig.radii.map((radius) =>
      toFiniteNumber(radius, params.defaultElectronRadius),
    )
  }

  const baseRadius = toFiniteNumber(
    orbitConfig.electronRadius,
    params.defaultElectronRadius - params.electronRadiusDecay * orbitIndex,
  )
  const clampedRadius = Math.max(1.6, baseRadius)

  return Array.from({ length: electronCount }, () => clampedRadius)
}

function normalizeOrbits(orbits, params) {
  const safeOrbits = Array.isArray(orbits) ? orbits : []
  const baseAngles = generateBaseOrbitAngles(safeOrbits.length, params.baseOrbitAngles)

  return safeOrbits.map((orbit, index) => {
    const orbitConfig = isPlainObject(orbit) ? orbit : { electrons: orbit }
    const electronCount = normalizeElectronCount(orbitConfig.electrons)
    const angles =
      Array.isArray(orbitConfig.angles) && orbitConfig.angles.length > 0
        ? orbitConfig.angles
        : distributeAngles(electronCount, toFiniteNumber(orbitConfig.angleOffset, 0))

    const radii = createOrbitRadii(orbitConfig, index, angles.length, params)

    return {
      key: orbitConfig.key || `o${index + 1}`,
      baseAngle: toFiniteNumber(orbitConfig.baseAngle, baseAngles[index]),
      orbitOffsetSteps: toFiniteNumber(orbitConfig.orbitOffsetSteps, index),
      shellSpin: toFiniteNumber(orbitConfig.shellSpin, params.syncedShellSpin),
      shellDur: toFiniteNumber(orbitConfig.shellDur, params.syncedShellDuration),
      electronStart: toFiniteNumber(
        orbitConfig.electronStart,
        params.defaultElectronStartOffset + params.defaultElectronStartStep * index,
      ),
      electronSpin: toFiniteNumber(orbitConfig.electronSpin, params.defaultElectronSpin),
      electronDur: toFiniteNumber(
        orbitConfig.electronDur,
        params.defaultElectronDurBase + params.defaultElectronDurStep * index,
      ),
      angles,
      radii,
    }
  })
}

function createSurfaceCssVars(surfaceTheme, center) {
  return {
    '--terminal-logo-border': surfaceTheme.border,
    '--terminal-logo-border-docked': surfaceTheme.borderDocked,
    '--terminal-logo-inner-border': surfaceTheme.innerBorder,
    '--terminal-logo-inner-border-docked': surfaceTheme.innerBorderDocked,
    '--terminal-logo-shadow': surfaceTheme.shadow,
    '--terminal-logo-shadow-docked': surfaceTheme.shadowDocked,
    '--terminal-logo-bg-glint-a': surfaceTheme.bgHighlightA,
    '--terminal-logo-bg-glint-b': surfaceTheme.bgHighlightB,
    '--terminal-logo-bg-start': surfaceTheme.bgStart,
    '--terminal-logo-bg-end': surfaceTheme.bgEnd,
    '--terminal-logo-sheen': surfaceTheme.sheen,
    '--terminal-logo-glyph-glow': surfaceTheme.glyphGlow,
    '--terminal-logo-electron-glow': surfaceTheme.electronGlow,
    '--terminal-logo-scanline': surfaceTheme.scanline,
    '--terminal-logo-scanline-blur': surfaceTheme.scanlineBlur,
    '--terminal-logo-radiation-glow': surfaceTheme.radiationGlow,
    '--terminal-logo-radiation-glow-docked': surfaceTheme.radiationGlowDocked,
    '--terminal-logo-radiation-inset': surfaceTheme.radiationInset,
    '--terminal-logo-center-point': `${center}px ${center}px`,
  }
}

function resolveSurfaceTheme(params) {
  const presetKey = typeof params.surfacePreset === 'string' ? params.surfacePreset.toLowerCase() : 'silver'
  const basePreset = AP_LOGO_SURFACE_PRESETS[presetKey] || AP_LOGO_SURFACE_PRESETS.silver

  return mergeDeep(basePreset, params.surfaceOverrides)
}

export function createApLogoModel(overrides = {}) {
  const params = mergeDeep(DEFAULT_AP_LOGO_PARAMS, overrides)
  const surfaceTheme = resolveSurfaceTheme(params)
  const shellsSource =
    Array.isArray(params.orbits) && params.orbits.length > 0
      ? normalizeOrbits(params.orbits, params)
      : params.shells
  const shellCount = Array.isArray(shellsSource) ? shellsSource.length : 0
  let baseOrbitRadius = params.orbitBaseRadius * params.atomScale
  let orbitStep = params.orbitStep * params.atomScale

  if (params.autoFitOrbits && shellCount > 0) {
    const maxOffset = Math.max(shellCount - 1, 0)
    const viewLimit = params.viewBoxSize / 2 - params.orbitPadding
    const maxOrbitRadius = Math.max(16, Math.min(viewLimit, params.center - params.orbitPadding))
    const totalDesiredRadius = baseOrbitRadius + orbitStep * maxOffset

    if (totalDesiredRadius > maxOrbitRadius) {
      const fitScale = maxOrbitRadius / totalDesiredRadius
      baseOrbitRadius *= fitScale
      orbitStep *= fitScale
    }
  }

  const shells = (shellsSource || []).map((shell, index) => {
    const orbitOffsetSteps =
      Number.isFinite(shell.orbitOffsetSteps) ? shell.orbitOffsetSteps : index

    return {
      ...shell,
      shellSpin: shell.shellSpin ?? params.syncedShellSpin,
      shellDur: shell.shellDur ?? params.syncedShellDuration,
      orbitRadius: shell.orbitRadius ?? baseOrbitRadius + orbitStep * orbitOffsetSteps,
      electronSpin: shell.electronSpin ?? params.defaultElectronSpin,
    }
  })

  return {
    ...params,
    coreRadius: params.coreRadius * params.atomScale,
    surfaceTheme,
    surfaceCssVars: createSurfaceCssVars(surfaceTheme, params.center),
    shells,
  }
}

export { AP_LOGO_SURFACE_PRESETS, DEFAULT_AP_LOGO_PARAMS }

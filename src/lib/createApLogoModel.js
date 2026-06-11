const AP_LOGO_SURFACE_PRESETS = {
  silver: {
    border: 'rgba(255, 255, 255, 0.12)',
    borderHover: 'rgba(255, 255, 255, 0.24)',
    shadow: 'rgba(0, 0, 0, 0.35)',
    bgHighlightA: 'rgba(222, 228, 236, 0.07)',
    bgStart: '#13161b',
    bgEnd: '#0b0d11',
    glyphGlow: 'rgba(185, 197, 212, 0.16)',
    electronGlow: 'rgba(205, 214, 224, 0.45)',
    radiationGlow: 'transparent',
    radiationInset: 'transparent',
    radioactive: false,
  },
  gold: {
    border: 'rgba(224, 184, 104, 0.3)',
    borderHover: 'rgba(237, 206, 139, 0.45)',
    shadow: 'rgba(0, 0, 0, 0.38)',
    bgHighlightA: 'rgba(255, 226, 163, 0.08)',
    bgStart: '#1a1308',
    bgEnd: '#100a03',
    glyphGlow: 'rgba(246, 210, 138, 0.2)',
    electronGlow: 'rgba(255, 222, 156, 0.5)',
    radiationGlow: 'transparent',
    radiationInset: 'transparent',
    radioactive: false,
  },
  graphite: {
    border: 'rgba(148, 158, 173, 0.24)',
    borderHover: 'rgba(182, 193, 209, 0.38)',
    shadow: 'rgba(0, 0, 0, 0.4)',
    bgHighlightA: 'rgba(186, 198, 214, 0.06)',
    bgStart: '#101318',
    bgEnd: '#090b0f',
    glyphGlow: 'rgba(163, 177, 196, 0.16)',
    electronGlow: 'rgba(198, 210, 226, 0.42)',
    radiationGlow: 'transparent',
    radiationInset: 'transparent',
    radioactive: false,
  },
  uranium: {
    border: 'rgba(126, 255, 156, 0.32)',
    borderHover: 'rgba(155, 255, 181, 0.5)',
    shadow: 'rgba(0, 0, 0, 0.4)',
    bgHighlightA: 'rgba(133, 255, 170, 0.08)',
    bgStart: '#0a1a10',
    bgEnd: '#050d08',
    glyphGlow: 'rgba(122, 255, 164, 0.32)',
    electronGlow: 'rgba(156, 255, 188, 0.6)',
    radiationGlow: 'rgba(102, 255, 147, 0.28)',
    radiationInset: 'rgba(95, 255, 141, 0.1)',
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
  syncedShellDuration: 64,
  defaultElectronSpin: 360,
  defaultElectronRadius: 2.6,
  electronRadiusDecay: 0.15,
  defaultElectronDurBase: 16,
  defaultElectronDurStep: 5,
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
        { offset: '0%', stopColor: 'rgba(228, 234, 242, 0.65)' },
        { offset: '100%', stopColor: 'rgba(146, 156, 168, 0.5)' },
      ],
    },
    core: {
      type: 'radial',
      cx: '48%',
      cy: '42%',
      r: '62%',
      stops: [
        { offset: '0%', stopColor: 'rgba(226, 232, 240, 0.16)' },
        { offset: '55%', stopColor: 'rgba(165, 175, 188, 0.09)' },
        { offset: '100%', stopColor: 'rgba(120, 131, 146, 0.04)' },
      ],
    },
  },
  // "AP" ligature: the A crossbar runs into the P bowl as one continuous line.
  glyphPaths: [
    'M78 168L114 64',
    'M114 64L150 168',
    'M94 122H138',
    'M114 64H136C158 64 168 76 168 93C168 111 156 122 138 122',
  ],
  // Explicit shells remain supported for full manual control.
  shells: [
    {
      key: 'k',
      baseAngle: 0,
      orbitOffsetSteps: 0,
      shellSpin: 360,
      shellDur: 64,
      electronStart: 10,
      electronSpin: 360,
      electronDur: 16,
      angles: [0, 180],
      radii: [2.7, 2.5],
    },
    {
      key: 'l',
      baseAngle: 60,
      orbitOffsetSteps: 1,
      shellSpin: 360,
      shellDur: 64,
      electronStart: 32,
      electronSpin: 360,
      electronDur: 22,
      angles: [0, 45, 90, 135, 180, 225, 270, 315],
      radii: [2.5, 2.4, 2.4, 2.3, 2.5, 2.3, 2.4, 2.4],
    },
    {
      key: 'm',
      baseAngle: -60,
      orbitOffsetSteps: 2,
      shellSpin: 360,
      shellDur: 64,
      electronStart: -26,
      electronSpin: 360,
      electronDur: 28,
      angles: [30, 150, 270],
      radii: [2.6, 2.4, 2.4],
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
    '--terminal-logo-border-docked': surfaceTheme.borderHover,
    '--terminal-logo-shadow': surfaceTheme.shadow,
    '--terminal-logo-bg-glint-a': surfaceTheme.bgHighlightA,
    '--terminal-logo-bg-start': surfaceTheme.bgStart,
    '--terminal-logo-bg-end': surfaceTheme.bgEnd,
    '--terminal-logo-glyph-glow': surfaceTheme.glyphGlow,
    '--terminal-logo-electron-glow': surfaceTheme.electronGlow,
    '--terminal-logo-radiation-glow': surfaceTheme.radiationGlow,
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

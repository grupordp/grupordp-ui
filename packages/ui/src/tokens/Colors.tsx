import { config } from '../../tailwind.config'

export function Colors() {
  const themeColors = config.theme.extend.colors

  if (!themeColors) {
    return null
  }

  const colors = Object.entries(themeColors).flatMap(([key, value]) => {
    if (typeof value === 'object') {
      return Object.entries(value).map(([shadeKey, shadeValue]) => ({
        key: `${key}-${shadeKey}`,
        color: shadeValue,
      }))
    }
    return { key, color: value }
  })

  return (
    <div>
      {colors.map(({ key, color }) => (
        <div
          key={key}
          style={{
            backgroundColor: color,
            padding: '2rem',
            marginTop: '0.5rem',
            borderWidth: '1px',
            borderColor: '#fff',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'monospace',
            }}
          >
            <strong>{key}</strong>
            <span>{color}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

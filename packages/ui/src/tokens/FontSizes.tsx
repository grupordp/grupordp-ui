import { config } from '../../tailwind.config'

interface TokensGridProps {
  hasRemValue?: boolean
}

export function FontSizes({ hasRemValue = false }: TokensGridProps) {
  const themeFontSizes = config.theme.extend.fontSize

  if (!themeFontSizes) {
    return null
  }

  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(themeFontSizes).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td style={{ fontFamily: value }}>{value}</td>
              {hasRemValue && (
                <td>{Number(value.replace('rem', '')) * 16}px</td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

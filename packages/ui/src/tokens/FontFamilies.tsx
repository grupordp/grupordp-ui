import { config } from '../../tailwind.config'

interface TokensGridProps {
  hasRemValue?: boolean
}

export function FontFamilies({ hasRemValue = false }: TokensGridProps) {
  const themeFontFamilies = config.theme.extend.fontFamily

  if (!themeFontFamilies) {
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
        {Object.entries(themeFontFamilies).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td style={{ fontFamily: value[0] }}>{value[0]}</td>
              {hasRemValue && (
                <td>{Number(value[0].replace('rem', '')) * 16}px</td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

import { config } from '../../tailwind.config'

interface TokensGridProps {
  hasRemValue?: boolean
}

export function FontWeights({ hasRemValue = false }: TokensGridProps) {
  const themeFontWeights = config.theme.extend.fontWeight

  if (!themeFontWeights) {
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
        {Object.entries(themeFontWeights).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && <td>{value}</td>}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

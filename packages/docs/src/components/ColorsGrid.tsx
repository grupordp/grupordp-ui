import React from 'react'

import { colors } from '@rdpgrupo/ui/src/tokens/colors'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem', marginTop: '0.5rem', border: '1px solid white', borderRadius: '8px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff',
          }}
        >
          <strong>{key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}

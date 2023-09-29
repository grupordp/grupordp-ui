import React from 'react';
import * as Icons from '@rdpgrupo/ui/src/ui/Icons'

export function IconsGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '24px' }}>
      {Object.entries(Icons).map(([name, Icon]) => (
        <div key={name} style={{ display: 'flex', gap: '8px', flexDirection: 'column', alignItems: 'center' }}>
          <Icon aria-hidden className='text-primary w-10 h-10' />
          <span style={{ marginTop: '8px', fontFamily: 'Poppins', color: '#fff' }}>{name}</span>
        </div>
      ))}
    </div>
  );
}

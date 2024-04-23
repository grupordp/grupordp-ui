import { ComponentProps } from 'react'
import { styles } from './styles'
import { VariantProps } from 'tailwind-variants'

export interface CircularProgressProps
  extends VariantProps<typeof styles>,
    ComponentProps<'svg'> {
  progress: number
}

export function CircularProgress({
  progress,
  size,
  className,
}: CircularProgressProps) {
  const strokeDashoffset = (1 - progress / 100) * 150

  const { root, text } = styles()

  return (
    <div className={root({ size, className })}>
      <svg
        className="absolute inset-0 w-full h-full transform rotate-90"
        viewBox="0 0 36 36"
      >
        <circle
          className="text-gray-5"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '3',
            strokeDasharray: '125',
            strokeLinecap: 'round',
          }}
          r="16"
          cx="18"
          cy="18"
        ></circle>
        <circle
          className="text-primary animate-progressAnimation"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeDasharray: '125',
            strokeDashoffset,
            strokeLinecap: 'round',
          }}
          r="16"
          cx="18"
          cy="18"
        ></circle>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={text({ size })}>{progress}%</span>
      </div>
    </div>
  )
}

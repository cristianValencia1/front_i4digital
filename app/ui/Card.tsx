import React, { FC } from 'react'

type CardProps = {
  width?: 'sm' | 'md' | 'lg' | 'full'
  shadow?: boolean
  padding?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

/* eslint-disable no-unused-vars*/
enum CardPadding {
  sm = 'p-4',
  md = 'p-6',
  lg = 'p-8'
}

enum CardWidth {
  sm = 'w-[316px]',
  md = 'w-[330px]',
  lg = 'w-[415px]',
  full = 'w-full'
}
/* eslint-enable no-unused-vars*/

const Card: FC<CardProps> = ({
  children,
  padding = 'sm',
  shadow,
  width = 'full'
}) => {
  return (
    <div
      className={`${CardWidth[width]} bg-white rounded-[15px] ${
        CardPadding[padding]
      }
      ${shadow && 'shadow-lg'}`}
    >
      {children}
    </div>
  )
}

export default Card

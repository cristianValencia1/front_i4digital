import React, { Children, FC } from 'react'

type LineLayoutProps = {
  children: React.ReactNode
}

const getBorder = (index: number) => {
  if (index === 0) {
    return 'border-b border-mediumGray'
  }
  return ''
}

const LineLayout: FC<LineLayoutProps> = ({ children }) => {
  return (
    <div className="w-full flex flex-col">
      {Children.map(children, (child, index) => (
        <div className={`py-6 ${getBorder(index)}`} key={index}>
          {child}
        </div>
      ))}
    </div>
  )
}

export default LineLayout

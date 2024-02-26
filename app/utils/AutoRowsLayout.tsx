import React, { Children, FC } from 'react'

type AutoRowsLayoutProps = {
  children: React.ReactNode
}

const AutoRowsLayout: FC<AutoRowsLayoutProps> = ({ children }) => {
  return (
    <div className="w-full flex flex-col">
      {Children.map(children, (child, index) => (
        <div className="py-2" key={index}>
          {child}
        </div>
      ))}
    </div>
  )
}

export default AutoRowsLayout

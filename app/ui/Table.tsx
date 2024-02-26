import React, { FC } from 'react'
// import CheckBox from './CheckBox'

/* eslint-disable no-unused-vars, @typescript-eslint/no-explicit-any */
type TableProps<T> = {
  headers: Column[]
  data: T[]
  onSelectedRowsChange?: (selectedRowsKeys: (string | number)[]) => void
}

type Column = {
  title: React.JSX.Element | string
  dataIndex: string
  key: string | number
  render?: (value: string) => React.ReactNode
}

type DataRow = {
  key: any
  [key: string]: any
}

// type ActionType =
//   | { type: 'add'; payload: string }
//   | { type: 'remove'; payload: string }
//   | { type: 'selectAll'; payload: (string | number)[] }
//   | { type: 'clear'; payload: [] }

/* eslint-enable no-unused-vars, @typescript-eslint/no-explicit-any */

// function reducer(state: (string | number)[], action: ActionType) {
//   switch (action.type) {
//     case 'add':
//       return [...state, action.payload]
//     case 'remove':
//       return state.filter((selected) => selected !== action.payload)
//     case 'selectAll':
//       return action.payload
//     case 'clear':
//       return action.payload
//     default:
//       return state
//   }
// }

const Table: FC<TableProps<DataRow>> = ({ headers, data }) => {
  // const [selectedRows, dispatch] = useReducer(reducer, [])

  // eslint-disable-next-line no-undef
  // const toggleAll = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { checked } = e.target
  //   if (checked) {
  //     const selectedRows = data.map((d) => d.key)
  //     dispatch({ type: 'selectAll', payload: selectedRows })
  //     onSelectedRowsChange(selectedRows)
  //   } else {
  //     dispatch({ type: 'clear', payload: [] })
  //     onSelectedRowsChange([])
  //   }
  // }

  // eslint-disable-next-line no-undef
  // const handleRowSelectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value, checked } = e.target
  //   if (checked) {
  //     dispatch({ type: 'add', payload: value })
  //     onSelectedRowsChange([...selectedRows, value])
  //   } else {
  //     dispatch({ type: 'remove', payload: value })
  //     onSelectedRowsChange(selectedRows.filter((row) => row !== value))
  //   }
  // }

  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="border-b border-mediumGray">
          {headers.map((header) => (
            <th
              className="text-sm text-left text-darkGray font-semibold px-4 py-2 border-r border-mediumGray last:border-none"
              key={header.key}
            >
              {header.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={`row-${row.key}`} className="border-b border-mediumGray">
            {headers.map((header) => {
              const rowValue = row[header.dataIndex]
              
              return (
                <td
                  key={`${row.key}-${header.key}`}
                  className="text-left text-xs text-black leading-[18px] px-4 py-2"
                >
                  {header.render && typeof rowValue !== 'object'
                    ? header.render(row[header.dataIndex])
                    : rowValue}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table

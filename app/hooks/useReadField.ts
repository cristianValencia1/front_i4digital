import { useState } from 'react'

export const useReadField = ({ type }: any) => {
  const [getData, setGetData] = useState('')

  const handleData = (e: any) => {
    const newValue =
      type === 'number' ? parseInt(e.target.value, 10) : e.target.value
    setGetData(newValue)
  }

  return {
    value: getData,
    onChange: handleData,
    type
  }
}

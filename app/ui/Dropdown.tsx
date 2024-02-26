import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

/* eslint-disable no-unused-vars*/
enum DropdownColor {
  gray = 'bg-white border-darkGray text-darkGray hover:bg-lightGray',
  blue = 'bg-baseBlue border-baseBlue text-white hover:bg-blue-500 hover:border-blue-500'
}
/* eslint-enable no-unused-vars */

type DropdownPros = {
  id: string
  name: string
  options: { id: string; value: string }[]
  color?: 'gray' | 'blue'
  defaultValue?: string
}

const Dropdown = ({
  id,
  name,
  options,
  color = 'gray',
  defaultValue
}: DropdownPros) => {
  const [optionSelect, setOptionSelect] = useState(
    defaultValue
      ? options.find((option) => option.id === defaultValue)
      : options[0]
  )
  const [showOption, setShowOption] = useState(false)

  /* eslint-disable no-undef*/
  const changeOption = (evt: React.MouseEvent<HTMLLIElement>) => {
    const target = evt.target as HTMLLIElement
    setOptionSelect({ value: target.innerText, id: target.value.toString() })
  }
  /* eslint-enable no-undef */

  const optionsHTML = options.map((option) => (
    <li
      className="hover:bg-lightGray text-darkGray px-[15px] py-[5px] select-none cursor-pointer"
      key={option.id}
      value={option.id}
      onMouseDown={(e) => {
        e.preventDefault()
      }}
      onClick={changeOption}
    >
      {option.value}
    </li>
  ))

  return (
    <div
      id={id}
      className={`${DropdownColor[color]} transition duration-300 relative w-full rounded-[15px] border-[1px] cursor-pointer z-[1]`}
    >
      <button
        onClick={() => {
          setShowOption(!showOption)
        }}
        onBlur={() => setShowOption(false)}
        className="py-2 px-4 w-full h-full select select-none flex items-stretch place-content-between text-base font-bold"
      >
        <span>{optionSelect?.value}</span>
        {showOption ? (
          <FiChevronUp className="self-center" />
        ) : (
          <FiChevronDown className="self-center" />
        )}
      </button>
      {showOption && (
        <>
          <ul
            className="border-[1px] border-mediumGray bg-white rounded-[15px] mt-[15px] left-0 right-0 absolute w-full overflow-y-auto overflow-x-hidden max-h-64"
            onClick={() => setShowOption(false)}
          >
            {optionsHTML}
          </ul>
          <input
            type="hidden"
            id={optionSelect?.id}
            name={name}
            value={optionSelect?.value}
          />
        </>
      )}
    </div>
  )
}

export default Dropdown

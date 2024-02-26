import React, { FC } from 'react'

/* eslint-disable no-unused-vars, no-undef*/
type InputProps = {
  icon?: React.ReactElement
  id?: string
  name?: string
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  value: string
  readonly?: boolean
  iconPosition?: 'left' | 'right'
  iconFunction?: () => void
  required?: boolean
}
/* eslint-enable no-unused-vars, no-undef */

const Input: FC<InputProps> = ({
  icon,
  iconPosition,
  iconFunction,
  id,
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  type = 'text',
  value,
  readonly = false,
  required = false
}) => {
  return (
    <div className="relative">
      {icon && iconPosition === 'left' && (
        <span
          className={`absolute inset-y-0 left-0 flex items-center pl-[10px] text-2xl text-darkGray ${
            iconFunction && 'cursor-pointer'
          }`}
          onClick={iconFunction}
        >
          {icon}
        </span>
      )}

      <input
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        type={type}
        value={value}
        readOnly={readonly}
        required={required}
        className={`w-full py-2 transition-all
        ${
          iconPosition === 'left' ? 'pl-9' : 'pl-3'
        }  pr-[10px] text-sm leading-[21px] font-medium text-darkGray border-darkGray bg-white border rounded-[15px] focus:border-purple-400  focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-30`}
      />
      {icon && iconPosition === 'right' && (
        <span
          className={`absolute inset-y-0 right-0 pr-3 flex items-center pl-[10px] text-2xl text-darkGray ${
            iconFunction && 'cursor-pointer'
          }`}
          onClick={iconFunction}
        >
          {icon}
        </span>
      )}
    </div>
  )
}

export default Input

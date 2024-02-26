import React, { FC } from 'react'

type PrimaryButtonProps = {
  id: string
  children?: React.ReactNode
  color?: 'purple'
  fullWidth?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
  icon?: React.JSX.Element
  iconPosition?: 'left' | 'right'
  onClick: () => void
  size?: 'lg' | 'sm' | 'md'
  type: 'primary'
  disabled?: boolean
}

type SecondaryButtonProps = {
  id: string
  children?: React.ReactNode
  color?: 'purple' | 'gray'
  fullWidth?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
  icon?: React.JSX.Element
  iconPosition?: 'left' | 'right'
  onClick: () => void
  size?: 'lg' | 'sm' | 'md'
  type: 'secondary'
  disabled?: boolean
}

type TextButtonProps = {
  id: string
  children?: React.ReactNode
  color?: 'purple'
  fullWidth?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
  icon?: React.JSX.Element
  iconPosition?: 'left' | 'right'
  onClick: () => void
  type: 'text'
  disabled?: boolean
}

type ButtonProps = PrimaryButtonProps | SecondaryButtonProps | TextButtonProps

/* eslint-disable no-unused-vars */
enum PrimaryButtonColor {
  purple = 'bg-purple-900 hover:bg-purple-700 active:bg-purple-900 text-white '
}

enum ButtonSize {
  lg = 'h-[34px] px-3 py-2 text-sm font-medium leading-[18px]',
  sm = 'h-[24px] px-3 py-1 text-xs leading-4 font-semibold',
  md = 'w-[63px] h-[18px] px-3 text-sm font-medium leading-[18px] '
}

enum SecondaryButtonColor {
  purple = 'bg-white border-purple-900 hover:border-purple-700 text-purple-900 border hover:text-purple-700 active:text-purple-700',
  gray = 'bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50 border text-gray-500'
}

enum TextButtonColor {
  purple = 'text-purple-900 hover:text-purple-700 active:text-purple-900'
}

/* eslint-enable no-unused-vars */

const Button: FC<ButtonProps> = (props) => {
  if (props.type === 'primary') {
    const {
      id,
      children,
      color = 'purple',
      disabled,
      fullWidth,
      htmlType = 'button',
      icon,
      iconPosition,
      onClick,
      size = 'lg'
    } = props
    return (
      <button
        id={id}
        type={htmlType}
        onClick={onClick}
        disabled={disabled}
        className={`inline-flex items-center justify-center gap-2 px-[10px] py-[8px] font-medium tracking-wide transition duration-300 rounded-[5px] focus-visible:outline-none whitespace-nowrapdisabled:cursor-not-allowed disabled:border-none disabled:shadow-none disabled:bg-white disabled:text-gray-200 
      ${PrimaryButtonColor[color]}
      ${fullWidth ? 'w-full' : 'w-auto'}
      ${ButtonSize[size]}
      `}
      >
        {icon && iconPosition === 'left' && (
          <span className="relative only:-mx-6">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="relative only:-mx-6">{icon}</span>
        )}
      </button>
    )
  }

  if (props.type === 'secondary') {
    const {
      id,
      children,
      color = 'purple',
      disabled,
      fullWidth,
      htmlType = 'button',
      icon,
      iconPosition,
      onClick,
      size = 'lg'
    } = props
    return (
      <button
        id={id}
        type={htmlType}
        onClick={onClick}
        disabled={disabled}
        className={`inline-flex items-center justify-center gap-2 px-[10px] py-[8px] font-medium tracking-wide transition duration-300 rounded-[5px] focus-visible:outline-none whitespace-nowrapdisabled:cursor-not-allowed disabled:border-none disabled:shadow-none disabled:bg-white disabled:text-gray-200 
      ${SecondaryButtonColor[color]}
      ${fullWidth ? 'w-full' : 'w-auto'}
      ${ButtonSize[size]}
      `}
      >
        {icon && iconPosition === 'left' && (
          <span className="relative only:-mx-6">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="relative only:-mx-6">{icon}</span>
        )}
      </button>
    )
  }

  if (props.type === 'text') {
    const {
      id,
      children,
      color = 'purple',
      disabled,
      fullWidth,
      htmlType = 'button',
      icon,
      iconPosition,
      onClick
    } = props
    return (
      <button
        id={id}
        type={htmlType}
        onClick={onClick}
        disabled={disabled}
        className={`inline-flex items-center justify-center gap-2 px-[10px] py-[8px] font-medium tracking-wide transition duration-300 rounded-[5px] focus-visible:outline-none whitespace-nowrapdisabled:cursor-not-allowed disabled:border-none disabled:shadow-none disabled:bg-white disabled:text-gray-200 
      ${TextButtonColor[color]}
      ${fullWidth ? 'w-full' : 'w-auto'}
      `}
      >
        {icon && iconPosition === 'left' && (
          <span className="relative only:-mx-6">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="relative only:-mx-6">{icon}</span>
        )}
      </button>
    )
  }
}

export default Button

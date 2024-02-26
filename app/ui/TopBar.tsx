import { FC, useState } from 'react'
import Avatar from './Avatar'
import { HiOutlineBell, HiChevronDown } from 'react-icons/hi'
import { FiSearch } from 'react-icons/fi'

type TopBarProps = {
  title: string
  description: string
  image: string
  size?: 'md' | 'lg' | 'full'
  onLogout?: () => void
}

/* eslint-disable no-unused-vars*/
enum TopBarSize {
  md = 'w-[934px]',
  lg = 'w-[1173px]',
  full = 'w-full'
}

const TopBar: FC<TopBarProps> = ({
  title,
  description,
  image,
  size = 'full',
}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className={`${TopBarSize[size]} flex justify-between p-8 border-b border-mediumGray`}
    >
      <div>
        <h2 className="text-base font-bold leading-[24px]">{title}</h2>
        <p className="text-sm text-darkGray font-normal leading-[21px]">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-8">
        <button>
          <FiSearch size={24} />
        </button>
        <button>
          <HiOutlineBell size={24} />
        </button>
        <div className="relative flex items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            onBlur={() => setIsOpen(false)}
            className="flex items-center gap-2"
          >
            <Avatar type="image" src={image} size="md" />

            <HiChevronDown
              size={20}
              className={`transition duration-300 ${
                isOpen ? '-rotate-180' : ''
              } `}
            />
          </button>
          <div
            className={`z-10 ${
              isOpen ? 'block' : 'hidden'
            } absolute top-10 right-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
          >
            <div className="py-1">
              <button
                className="w-full block px-4 py-2 text-sm hover:bg-gray-100"
                onMouseDown={(e) => {
                  e.preventDefault()
                }}
                onClick={() => {
                  setIsOpen(false)
                }}
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar

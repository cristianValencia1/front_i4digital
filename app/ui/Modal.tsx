import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import { MdClose } from 'react-icons/md'

// Este componente se debe mejorar
type ModalProps = {
  cancelText?: string
  children: React.ReactNode
  closeOnEsc?: boolean
  footer?: React.ReactNode
  okText?: string
  onCancel?: () => void
  onClose: () => void
  onOk?: () => void
  show: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  type?: 'confirm' | 'info'
}

/* eslint-disable no-unused-vars */
enum ModalSize {
  sm = 'w-[400px]',
  md = 'w-[500px]',
  lg = 'w-[555px]',
  xl = 'w-[704px]',
  xxl = 'w-[900px]'
}

const Modal: FC<ModalProps> = ({
  cancelText = 'Cancelar',
  children,
  footer,
  okText = 'Confirmar',
  onCancel = () => {
    throw new Error('onCancel function not implemented.')
  },
  onClose,
  onOk = () => {
    throw new Error('onOk function not implemented.')
  },
  show,
  size = 'md',
  type
}) => {
  return (
    show &&
    ReactDOM.createPortal(
      <div className="fixed inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-10 z-50">
        <div
          className={`relative ${ModalSize[size]}  bg-white rounded-[10px] pt-0 px-9 pb-5  overflow-hidden h-auto`}
        >
          <div className="absolute top-4 right-4 flex items-center justify-end  text-black bg-primary">
            <button
              className="flex items-start p-0  text-darkGray text-2xl"
              onClick={onClose}
            >
              <MdClose />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <div className="mt-4 w-full">{children}</div>
            {footer === undefined ? (
              <div className="flex items-center justify-between w-full h-[50px] gap-4 mt-8">
                {type === 'confirm' && (
                  <Button
                    id="cancel"
                    type="secondary"
                    color="purple"
                    onClick={onCancel}
                    fullWidth
                  >
                    {cancelText}
                  </Button>
                )}
                <Button
                  id="ok"
                  type="primary"
                  onClick={onOk}
                  fullWidth
                  htmlType="submit"
                >
                  {okText}
                </Button>
              </div>
            ) : (
              footer
            )}
          </div>
        </div>
      </div>,
      /* eslint-disable no-undef*/
      document.getElementById('modal') as HTMLElement
      /* eslint-enable no-undef*/
    )
  )
}

export default Modal

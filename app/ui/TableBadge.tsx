import { FC } from 'react'

type TableBadgeProps = {
  status:
    | 'unstarted'
    | 'progress'
    | 'completed'
    | 'pending'
    | 'sent'
    | 'published'
    | 'creating'
}

/* eslint-disable no-unused-vars */
enum TableBadgeColor {
  success = 'text-success text-xs leading-[18px]',
  info = 'text-baseSky text-xs leading-[18px]',
  error = 'text-error text-xs leading-[18px]'
}

enum TableBadgeMessage {
  unstarted = 'No iniciado',
  progress = 'En progreso',
  completed = 'Finalizado',
  pending = 'Pendiente',
  sent = 'Enviada',
  published = 'Publicada',
  creating = 'En construcción'
}

/* eslint-enable no-unused-vars */
const getBadgeStyle = (status: string): TableBadgeColor => {
  switch (status) {
    case 'unstarted':
    case 'pending':
      return TableBadgeColor.error
    case 'progress':
    case 'creating':
      return TableBadgeColor.info
    case 'completed':
    case 'sent':
    case 'published':
      return TableBadgeColor.success
    default:
      return TableBadgeColor.error
  }
}

const TableBadge: FC<TableBadgeProps> = ({ status = 'unstarted' }) => {
  return (
    <div
      className={`
      flex items-center gap-2 px-3 py-2 h-[34px] ${getBadgeStyle(status)}`}
    >
      <span className="text-2xl">•</span>
      <span>{TableBadgeMessage[status]}</span>
    </div>
  )
}

export default TableBadge

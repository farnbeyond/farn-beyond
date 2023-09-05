import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: Date, options: any) {
  const { format } = new Intl.DateTimeFormat('en-US', options)
  return format(new Date(dateString))
}

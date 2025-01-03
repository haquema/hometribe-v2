'use client'
import {NextUIProvider} from '@nextui-org/react'

export function UIProvider({children}) {
  return (
    <NextUIProvider className='h-full w-full'>
      {children}
    </NextUIProvider>
  )
}
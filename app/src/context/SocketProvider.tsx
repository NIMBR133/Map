import { createContext, useMemo } from 'react'

import { Socket } from '@socket'

export const SocketContext = createContext({} as typeof Socket)

type Props = {
  children: React.ReactNode
}

const SocketProvider = ({ children }: Props) => {
  const value = useMemo(() => Socket, [Socket])

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  )
}

export { SocketProvider }

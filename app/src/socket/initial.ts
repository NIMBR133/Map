import socketIOClient from 'socket.io-client'

import { URL_API } from '@config'

export const Socket = socketIOClient(URL_API)

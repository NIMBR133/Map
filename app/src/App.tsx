import { ToastContainer } from 'react-toastify'

import { MapProvider, SocketProvider } from '@context'
import { Layout } from './components/Layout'

import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <SocketProvider>
      <MapProvider>
        <Layout />
      </MapProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </SocketProvider>
  )
}

export default App

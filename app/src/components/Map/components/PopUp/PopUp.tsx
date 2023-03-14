import { useContext, useEffect, useRef } from 'react'
import { Portal } from 'react-portal'
import mapboxgl from 'mapbox-gl'

import { MapContext } from '@context'
import { Car } from '@interfaces'

import { styles } from './styles'
const { PopupContainerRequired, PopupContainer } = styles

type Props = {
  car: Car
  onClose: () => void
  children: React.ReactNode
}

const PopUp = ({ car, onClose, children }: Props) => {
  const { map } = useContext(MapContext)
  const popupRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!popupRef.current || !map) return

    const popup = new mapboxgl.Popup({ anchor: 'left' })
      .setLngLat({ lat: car.coordinates.lat, lng: car.coordinates.lng })
      .setDOMContent(popupRef.current)
      .addTo(map)

    popup.on('close', onClose)

    return () => {
      popup.remove()
    }
  }, [car])

  return (
    <Portal node={document && document.querySelector('.mapboxgl-map')}>
      <PopupContainerRequired>
        <PopupContainer ref={popupRef}>{children}</PopupContainer>
      </PopupContainerRequired>
    </Portal>
  )
}

export default PopUp

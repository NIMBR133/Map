import {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import mapboxgl from 'mapbox-gl'

import { MapContext } from '@context'
import { Car } from '@interfaces'
import { MarkerIcon } from '@icons'

import { animateMarker } from '../../utils'
import { PopUpMarker } from '../PopUpMarker'

import { styles } from './styles'

const { MarkerWrapper } = styles

type Props = {
  car: Car
}

const Marker = ({ car }: Props) => {
  const { map } = useContext(MapContext)
  const [carPrev, setCarPrev] = useState<Car>(car)
  const [marker, setMarker] = useState<mapboxgl.Marker>()
  const markerRef = useRef<HTMLDivElement | null>(null)
  const [isOpenPopup, setIsOpenPopup] = useState(false)

  useEffect(() => {
    const markerElement = markerRef.current
    if (!map || !markerElement) return

    const markerInit = new mapboxgl.Marker({
      element: markerElement
    })

    markerInit.setLngLat([car.coordinates.lng, car.coordinates.lat]).addTo(map)
    setMarker(markerInit)

    return () => {
      markerInit.remove()
    }
  }, [map])

  useEffect(() => {
    if (map && marker && carPrev.coordinates.lat !== car.coordinates.lat) {
      animateMarker({ carPrev, carNext: car, marker, map })
      setCarPrev(car)
    }
  }, [map, marker, car])

  const onPopup = useCallback((value: boolean) => {
    setIsOpenPopup(value)
  }, [])

  return useMemo(() => {
    return (
      <div>
        <MarkerWrapper ref={markerRef} onClick={() => onPopup(true)}>
          <MarkerIcon />
          <PopUpMarker
            isOpenPopup={isOpenPopup}
            car={car}
            onClose={() => onPopup(false)}
          />
        </MarkerWrapper>
      </div>
    )
  }, [markerRef, onPopup, isOpenPopup, car])
}

export default memo(Marker)

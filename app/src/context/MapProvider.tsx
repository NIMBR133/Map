import { createContext, useEffect, useMemo, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { MAPBOX_TOKEN } from '@config'

export const MapContext = createContext({} as MapProviderType)

type MapProviderType = {
  map: mapboxgl.Map | undefined
  mapContainerRef: React.MutableRefObject<HTMLDivElement | null>
  coordinates: mapboxgl.LngLat | undefined
}

type Props = {
  children: React.ReactNode
}

const MapProvider = ({ children }: Props) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const [map, setMap] = useState<mapboxgl.Map>()
  const [coordinates, setCoordinates] = useState<mapboxgl.LngLat>()

  useEffect(() => {
    const mapContainerElement = mapContainerRef.current

    if (typeof window === 'undefined' || mapContainerElement === null || map)
      return

    const mapboxMap = new mapboxgl.Map({
      container: mapContainerElement,
      accessToken: MAPBOX_TOKEN,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [60, 40],
      zoom: 4
    })

    mapboxMap.on('click', ({ lngLat }) => {
      setCoordinates(lngLat)
    })

    mapboxMap.addControl(new mapboxgl.NavigationControl(), 'top-right')

    setMap(mapboxMap)

    return mapboxMap.remove
  }, [])

  const value = useMemo(
    () => ({
      map,
      mapContainerRef,
      coordinates
    }),
    [map, mapContainerRef, coordinates]
  )

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>
}

export { MapProvider }

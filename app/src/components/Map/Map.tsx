import { memo, useContext, useEffect, useMemo, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'

import { MapContext } from '@context'
import { Car } from '@interfaces'
import { socket } from '@socket'

import { Marker } from './components'

import { styles } from './styles'
const { MapStyled } = styles

export const Map = memo(() => {
  const { mapContainerRef } = useContext(MapContext)

  const [cars, setCars] = useState<Car[]>([])

  useEffect(() => {
    socket.initial(data => setCars(data))

    socket.newMarker(newMarker => setCars(prev => [...prev, newMarker]))

    socket.deleteMarker(({ id }) =>
      setCars(prev => prev.filter(car => car.id !== id))
    )

    socket.updateMarker(updateMarker =>
      setCars(prev =>
        prev.map(car => {
          if (car.id === updateMarker.id) {
            return { ...car, ...updateMarker }
          }

          return car
        })
      )
    )
  }, [socket])

  return useMemo(() => {
    return (
      <MapStyled ref={mapContainerRef}>
        {cars.map(car => (
          <Marker key={car.id} car={car} />
        ))}
      </MapStyled>
    )
  }, [cars, mapContainerRef])
})

import * as turf from '@turf/turf'
import { Car } from '@interfaces'

type Props = {
  carPrev: Car
  carNext: Car
  marker: mapboxgl.Marker
  map: mapboxgl.Map
}

export const animateMarker = ({ carPrev, carNext, marker, map }: Props) => {
  const lineDistance = turf.lineString([
    [carPrev.coordinates.lat, carPrev.coordinates.lng],
    [carNext.coordinates.lat, carNext.coordinates.lng]
  ])

  const length = turf.length(lineDistance)

  const arc: turf.helpers.Position[] = []

  const steps = 180 // От 1.5 до 3 секунд длительность анимации (8/16 мс)
  const step = length / steps

  for (let i = 0; i <= length + step / 10; i += step) {
    const segment = turf.along(lineDistance, i)
    arc.push(segment.geometry.coordinates)
  }

  let counter = 0

  const animateMarkerFunc = () => {
    marker.setLngLat([arc[counter][1], arc[counter][0]]).addTo(map)

    if (counter < steps) {
      requestAnimationFrame(animateMarkerFunc)
    }

    counter++
  }

  requestAnimationFrame(animateMarkerFunc)
}

import { useContext, useEffect } from 'react'
import { MapContext } from '@context'
import { TextField } from '@mui/material'

const InputsCoordinate = ({ refCoordinates }: any) => {
  const { coordinates } = useContext(MapContext)

  useEffect(() => {
    refCoordinates.current = coordinates
  }, [coordinates])

  return (
    <>
      <TextField
        label="Широта"
        variant="outlined"
        size="small"
        value={coordinates?.lat || ''}
        disabled
      />

      <TextField
        label="Долгота"
        variant="outlined"
        size="small"
        value={coordinates?.lng || ''}
        disabled
      />
    </>
  )
}

export default InputsCoordinate

import { Button, TextField } from '@mui/material'
import { useRef } from 'react'
import { useForm, Controller } from 'react-hook-form'

import { api } from '@api'
import { LngLat } from '@interfaces'

import { InputsCoordinate } from './InputsCoordinate'

import { styles } from '../styles'

const { PanelFormNewMarker, PanelItemHeader, PanelItemBody, Title } = styles

type Name = {
  name: string
}

const NewMarker = () => {
  const { control, handleSubmit } = useForm<Name>()
  const refCoordinates = useRef<LngLat>()

  const onSubmit = (data: Name) => {
    api.createMarker(data, refCoordinates.current)
  }

  return (
    <PanelFormNewMarker>
      <PanelItemHeader>
        <Title>Добавить маркер</Title>
        <Button
          variant="contained"
          color="success"
          onClick={handleSubmit(onSubmit)}
        >
          Создать
        </Button>
      </PanelItemHeader>

      <PanelItemBody onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextField
              label="Название"
              variant="outlined"
              size="small"
              value={value || ''}
              onChange={onChange}
            />
          )}
        />

        <InputsCoordinate refCoordinates={refCoordinates} />
      </PanelItemBody>
    </PanelFormNewMarker>
  )
}

export default NewMarker

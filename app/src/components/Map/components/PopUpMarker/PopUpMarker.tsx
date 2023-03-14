import { Button } from '@mui/material'

import { Car } from '@interfaces'
import { api } from '@api'

import { PopUp } from '../PopUp'

import { styles } from './styles'

const { PopupItem, PopupLabel, PopupLabelValue } = styles

type Props = {
  isOpenPopup: boolean
  car: Car
  onClose: () => void
}

const PopUpMarker = ({ isOpenPopup, car, onClose }: Props) => {
  const onDeleteMarker = (id: string) => {
    api.deleteMarker(id)
  }

  return (
    <>
      {isOpenPopup && (
        <PopUp car={car} onClose={onClose}>
          <PopupItem>
            <PopupLabel>Название:</PopupLabel>
            <PopupLabelValue>{car.name}</PopupLabelValue>
          </PopupItem>
          <PopupItem>
            <PopupLabel>Широта:</PopupLabel>
            <PopupLabelValue>{car.coordinates.lat}</PopupLabelValue>
          </PopupItem>
          <PopupItem>
            <PopupLabel>Долгота:</PopupLabel>
            <PopupLabelValue>{car.coordinates.lng}</PopupLabelValue>
          </PopupItem>
          <Button
            variant="contained"
            color="error"
            onClick={() => onDeleteMarker(car.id as string)}
          >
            Удалить
          </Button>
        </PopUp>
      )}
    </>
  )
}

export default PopUpMarker

import { useState } from 'react'
import { Button } from '@mui/material'

import { api } from '@api'

import { styles } from '../styles'

const { PanelItemWrapper, PanelItemHeader, Title, ButtonGroup } = styles

const SimulateBlock = () => {
  const [isStarted, setIsStarted] = useState(false)

  const onStart = () => {
    api.startSimulation(isStarted, setIsStarted)
  }

  const onStop = () => {
    api.stopSimulation(isStarted, setIsStarted)
  }

  return (
    <PanelItemWrapper>
      <PanelItemHeader>
        <Title>Симуляция движения</Title>
        <ButtonGroup>
          <Button variant="contained" color="success" onClick={onStart}>
            Старт
          </Button>
          <Button variant="contained" color="error" onClick={onStop}>
            Стоп
          </Button>
        </ButtonGroup>
      </PanelItemHeader>
    </PanelItemWrapper>
  )
}

export default SimulateBlock

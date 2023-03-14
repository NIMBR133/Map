import { NewMarker, SimulateBlock } from './components'

import { styles } from './styles'
const { PanelWrapper } = styles

const Panel = () => {
  return (
    <PanelWrapper>
      <SimulateBlock />
      <NewMarker />
    </PanelWrapper>
  )
}

export default Panel

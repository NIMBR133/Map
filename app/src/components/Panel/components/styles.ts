import styled from 'styled-components'

const stylesItemWrapper = `
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Title = styled.div`
  font-size: 22px;
`

const PanelItemWrapper = styled.div`
  ${stylesItemWrapper}
`

const PanelItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PanelItemBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 6px;
`

const PanelFormNewMarker = styled.form`
  ${stylesItemWrapper}
`

export const styles = {
  Title,
  PanelItemWrapper,
  PanelItemHeader,
  PanelItemBody,
  ButtonGroup,
  PanelFormNewMarker
}

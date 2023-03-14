import styled from 'styled-components'

const PopupContainerRequired = styled.div`
  display: none;
`
const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & + button {
    font-size: 30px;
    top: -5px;
  }
`

export const styles = {
  PopupContainerRequired,
  PopupContainer
}

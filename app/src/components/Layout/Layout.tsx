import Grid from '@mui/material/Unstable_Grid2'

import { Map } from '../Map'
import { Panel } from '../Panel'

import { styles } from './styles'
const { Container } = styles

const Layout = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid xs={9}>
          <Map />
        </Grid>
        <Grid xs={3}>
          <Panel />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Layout

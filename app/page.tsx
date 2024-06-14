import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import MainMenu from './component/main-menu'
import Buttons from './component/Buttons'

const Home = () => {
  return (
    <Container>
      <Box>
        <MainMenu />
        <Buttons />
      </Box>
    </Container>
  )
}

export default Home
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Box, CssBaseline, ThemeProvider, Toolbar } from '@material-ui/core'
import Theme from '../data/Theme'

import 'typeface-poppins'
import './baseline.less'

// const useStyles = makeStyles({
//   main: {
//     maxWidth:
//   }
// })

export default function Component({ children }) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Header />
        <Toolbar />
        <Box>{children}</Box>
        <Footer />
      </ThemeProvider>
    </>
  )
}

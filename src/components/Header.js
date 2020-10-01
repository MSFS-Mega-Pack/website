import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export default function Header() {
  return (
    <AppBar id="appBar">
      <Toolbar>
        <Typography variant="h6">Livery Mega Pack</Typography>
      </Toolbar>
    </AppBar>
  )
}

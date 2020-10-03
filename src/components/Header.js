import React, { useState } from 'react'

import { AppBar, Drawer, IconButton, Toolbar, Typography } from '@material-ui/core'
import DrawerMenu from './DrawerMenu'

import MenuIcon from 'mdi-react/MenuIcon'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(1),
  },
}))

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const classes = useStyles()

  return (
    <>
      <AppBar id="appBar">
        <Toolbar>
          <IconButton className={classes.menuButton} color="secondary" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Livery Mega Pack</Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <DrawerMenu />
      </Drawer>
    </>
  )
}

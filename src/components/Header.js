import React, { useState } from 'react'

import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from '@material-ui/core'
import DrawerMenu from './DrawerMenu'

import MenuIcon from 'mdi-react/MenuIcon'
import { makeStyles } from '@material-ui/styles'
import Link from './Link'

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(1),
    color: 'black',
  },
}))

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const classes = useStyles()

  return (
    <>
      <AppBar id="appBar">
        <Toolbar>
          <IconButton className={classes.menuButton} onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Livery Mega Pack</Typography>
          <Box flex="1"></Box>
          <Button component={Link} noLinkStyling url="/" style={{ color: '#000' }} variant="text">
            Home
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <DrawerMenu />
      </Drawer>
    </>
  )
}

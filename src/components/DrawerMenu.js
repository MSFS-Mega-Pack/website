import React from 'react'

import { Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles, useTheme } from '@material-ui/core'
import Link from './Link'

import HomeIcon from 'mdi-react/HomeOutlineIcon'

import DownloadIcon from 'mdi-react/DownloadOutlineIcon'
import ManagerIcon from 'mdi-react/ToolboxOutlineIcon'
// import ManagerIcon from 'mdi-react/ApplicationCogIcon'

import TeamIcon from 'mdi-react/AccountGroupOutlineIcon'

const menuItems = [
  {
    name: 'Main',
    items: [{ name: 'Home', url: '/', icon: HomeIcon }],
  },
  {
    name: 'Downloads',
    items: [
      { name: 'Download Mega Pack', url: '/download', icon: DownloadIcon },
      { name: 'Livery Manager', url: '/manager', icon: ManagerIcon },
    ],
  },
  {
    name: 'About',
    items: [{ name: 'The Team', url: '/the-team', icon: TeamIcon }],
  },
]

const useStyles = makeStyles({
  list: {
    maxWidth: 350,
    width: '100vw',
  },
})

export default function DrawerMenu() {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <nav className={classes.list} role="presentation">
      <List>
        {menuItems.map((group, i) => (
          <React.Fragment key={group.name}>
            {group.items.map((item, j) => (
              <ListItem button component={Link} noLinkStyling url={item.url} key={item.name + item.url}>
                <ListItemIcon>
                  <item.icon color={theme.palette.primary.main} />
                </ListItemIcon>
                <ListItemText className={classes.menuItemText} primary={item.name} />
              </ListItem>
            ))}
            {i + 1 !== menuItems.length && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </nav>
  )
}

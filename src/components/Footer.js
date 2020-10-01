import React from 'react'

import PageSection from './PageSection'
import { makeStyles, Typography } from '@material-ui/core'
import Link from './Link'

const useStyles = makeStyles(theme => ({
  root: {
    whiteSpace: 'nowrap',
    background: '#000',
    backgroundClip: 'border-box',
  },
  separator: {
    display: 'inline-block',
    color: theme.palette.primary.main,
    transform: 'scale(1.5)',
    transformOrigin: '50%',
    marginLeft: 12,
    marginRight: 12,
  },
  footerPara: {
    paddingBottom: theme.spacing(0.5),
  },
}))

export default function Footer() {
  const classes = useStyles()

  return (
    <PageSection fullWidth className={classes.root}>
      <Typography variant="body1" className={classes.footerPara}>
        &copy; {new Date().getFullYear()}
        <span className={classes.separator}>•</span>
        Liveries Mega Pack
      </Typography>
      <Typography variant="body2" paragraph color="textSecondary">
        Made with ❤️ by{' '}
        <Link externalLink url="https://davwheat.dev">
          David Wheatley
        </Link>
      </Typography>
    </PageSection>
  )
}

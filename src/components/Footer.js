import React from 'react'

import PageSection from './PageSection'
import { Box, makeStyles, Typography } from '@material-ui/core'
import Link from './Link'

import constants from '../data/constants.json'

const useFooterStyles = makeStyles(theme => ({
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
    whiteSpace: 'pre-wrap',
  },
}))

const useLinkStyles = makeStyles(theme => ({
  link: {
    padding: theme.spacing(),
    '&:not(:last-child)': {
      marginRight: 16,
    },
  },
}))

export default function Footer() {
  const classes = useFooterStyles()

  return (
    <PageSection fullWidth className={classes.root}>
      <Typography variant="body1" className={classes.footerPara}>
        &copy; {new Date().getFullYear()}
        <span className={classes.separator}>•</span>
        Liveries Mega Pack
        <span className={classes.separator}>•</span>
        All rights reserved
      </Typography>
      <Typography variant="body2" paragraph color="textSecondary">
        Made with ❤️ by{' '}
        <Link externalLink url="https://davwheat.dev">
          David Wheatley
        </Link>
      </Typography>
      <FooterLinks />
    </PageSection>
  )
}

function FooterLinks(props) {
  const classes = useLinkStyles()

  return (
    <Box pt={4} display="flex" justifyContent="center">
      <Link className={classes.link} externalLink url={constants.keyUrls.discordInvite}>
        Discord
      </Link>
      <Link className={classes.link} externalLink url={constants.keyUrls.github}>
        GitHub
      </Link>
    </Box>
  )
}

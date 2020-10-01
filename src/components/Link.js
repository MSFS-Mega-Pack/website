import { makeStyles, Tooltip } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    position: 'relative',
    fontWeight: 700,
    borderBottom: '1px solid',
    borderBottomColor: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      '& span:nth-child(2)': {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      },
    },
  },
  normalText: {
    color: theme.palette.primary.main,
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
  },
  extraText: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: -1,
    color: 'black',
    background: theme.palette.primary.main,
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
    transition: '250ms ease-out clip-path',
  },
}))

export default function Link({ externalLink, url, tooltip, children }) {
  const classes = useStyles()

  if (externalLink) {
    if (tooltip) {
      return (
        <Tooltip title={tooltip}>
          <a className={classes.root} href={url}>
            <span className={classes.normalText}>{children}</span>
            <span className={classes.extraText}>{children}</span>
          </a>
        </Tooltip>
      )
    }

    return (
      <a className={classes.root} href={url}>
        <span className={classes.normalText}>{children}</span>
        <span className={classes.extraText}>{children}</span>
      </a>
    )
  }
}

import React from 'react'
import { makeStyles, Tooltip } from '@material-ui/core'
import { Link as GatsbyLink } from 'gatsby'
import clsx from 'clsx'

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
  },
  extraText: {
    position: 'absolute',
    padding: 'inherit',
    left: 0,
    right: 0,
    top: 0,
    bottom: -1,
    color: 'black',
    background: theme.palette.primary.main,
    clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
    transition: '250ms ease-out clip-path',
  },
}))

const Link = React.forwardRef(({ externalLink, url, tooltip, children, className, noLinkStyling, ...props }, ref) => {
  const classes = useStyles()

  if (noLinkStyling) {
    if (externalLink) {
      return (
        <a ref={ref} className={className} href={url} {...props}>
          {children}
        </a>
      )
    } else {
      return (
        <GatsbyLink ref={ref} className={className} to={url} {...props}>
          {children}
        </GatsbyLink>
      )
    }
  }

  if (externalLink) {
    if (tooltip) {
      return (
        <Tooltip title={tooltip}>
          <a ref={ref} className={clsx(classes.root, className || '')} href={url} {...props}>
            <span className={classes.normalText}>{children}</span>
            <span className={classes.extraText}>{children}</span>
          </a>
        </Tooltip>
      )
    }

    return (
      <a ref={ref} className={clsx(classes.root, className || '')} href={url} {...props}>
        <span className={classes.normalText}>{children}</span>
        <span className={classes.extraText}>{children}</span>
      </a>
    )
  } else {
    return (
      <GatsbyLink ref={ref} className={clsx(classes.root, className || '')} to={url} {...props}>
        <span className={classes.normalText}>{children}</span>
        <span className={classes.extraText}>{children}</span>
      </GatsbyLink>
    )
  }
})

export default Link

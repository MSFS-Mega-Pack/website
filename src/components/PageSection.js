import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: { padding: theme.spacing(6), [theme.breakpoints.down('sm')]: { padding: theme.spacing(4) } },
  lightBg: {
    backgroundColor: '#1f1f3b',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23303052' fill-opacity='0.3'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    backgroundAttachment: 'fixed',
  },
  widthRestrict: { maxWidth: 1100, margin: 'auto' },
  fullHeight: { height: '100vh' },
  fullHeightMinusToolbar: { height: 'calc(100vh - 64px)', [theme.breakpoints.down('xs')]: { height: 'calc(100vh - 56px)' } },
}))

export default function PageSection({ lighterBg, children, fullWidth, fullHeight, noPad, style, className }) {
  const classes = useStyles()

  return (
    <section
      className={clsx(
        !noPad && classes.root,
        lighterBg && classes.lightBg,
        fullHeight === 'firstElement' && classes.fullHeightMinusToolbar,
        fullHeight === 'yes' && classes.fullHeight,
        className
      )}
      style={style}
    >
      <div className={clsx(!fullWidth && classes.widthRestrict)}>{children}</div>
    </section>
  )
}

PageSection.propTypes = {
  children: PropTypes.node,
  noPad: PropTypes.bool.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  fullHeight: PropTypes.oneOf(['yes', 'no', 'firstElement']).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
}

PageSection.defaultProps = {
  noPad: false,
  fullWidth: false,
  fullHeight: 'no',
  className: '',
  style: {},
}

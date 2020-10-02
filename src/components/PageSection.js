import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: { padding: theme.spacing(6), [theme.breakpoints.down('sm')]: { padding: theme.spacing(4) } },
  widthRestrict: { maxWidth: 1100, margin: 'auto' },
  fullHeight: { height: '100vh' },
  fullHeightMinusToolbar: { height: 'calc(100vh - 64px)', [theme.breakpoints.down('xs')]: { height: 'calc(100vh - 56px)' } },
}))

export default function PageSection({ children, fullWidth, fullHeight, noPad, style, className }) {
  const classes = useStyles()

  return (
    <section
      className={clsx(
        !noPad && classes.root,
        !fullWidth && classes.widthRestrict,
        fullHeight === 'firstElement' && classes.fullHeightMinusToolbar,
        fullHeight === 'yes' && classes.fullHeight,
        className
      )}
      style={style}
    >
      {children}
    </section>
  )
}

PageSection.propTypes = {
  children: PropTypes.node,
  noPad: PropTypes.bool.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  fullHeight: PropTypes.oneOf(['yes', 'no', 'firstElement']).isRequired,
  className: PropTypes.string,
  style: PropTypes.CSS,
}

PageSection.defaultProps = {
  noPad: false,
  fullWidth: false,
  fullHeight: 'no',
  className: '',
  style: {},
}

import { makeStyles } from '@material-ui/core'
import React from 'react'
import PageSection from './PageSection'

const useStyles = makeStyles({
  root: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
})

export default function HeroImage({ src, children, overlay, overlayOpacity }) {
  const classes = useStyles()

  return (
    <PageSection
      className={classes.root}
      style={{
        backgroundImage: overlay
          ? `linear-gradient(rgba(0,0,0,${overlayOpacity || 0.5}), rgba(0,0,0,${overlayOpacity || 0.5})), url("${encodeURI(src)}")`
          : `url("${encodeURI(src)}")`,
      }}
      fullWidth
      fullHeight="firstElement"
    >
      {children}
    </PageSection>
  )
}

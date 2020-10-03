import React from 'react'
import json2mq from 'json2mq'

import { makeStyles, useTheme } from '@material-ui/core'
import PageSection from './PageSection'

import ArrowDownIcon from 'mdi-react/ExpandMoreIcon'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    position: 'relative',
  },
  scrollCta: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: theme.spacing(4),
    animation: `$scrollBob 2s infinite ${theme.transitions.easing.easeOut}`,
  },
  '@keyframes scrollBob': {
    '0%': {
      transform: 'translateX(-50%) translateY(0)',
    },
    '75%': {
      transform: 'translateX(-50%)translateY(8px)',
    },
    '100%': {
      transform: 'translateX(-50%) translateY(0)',
    },
  },
}))

export default function HeroImage({ scrollCta, src, children, overlay, overlayOpacity }) {
  const classes = useStyles()
  const theme = useTheme()

  function GenerateBackgroundImages(overlay, overlayOpacity, src) {
    const overlayCode = `linear-gradient(rgba(0,0,0,${overlayOpacity || 0.5}), rgba(0,0,0,${overlayOpacity || 0.5}))`

    if (overlay) {
      return {
        backgroundImage: `${overlayCode}, url('${encodeURI(src)}.1280.jpg')`,
        [`@media (min-width: 2000px)`]: {
          backgroundImage: `${overlayCode}, url('${encodeURI(src)}.3840.jpg')`,
        },
        [`@media (min-width: 1300px) and (max-width: 1999px)`]: {
          backgroundImage: `${overlayCode}, url('${encodeURI(src)}.1920.jpg')`,
        },
        [`@media (min-width: 900px) and (max-width: 1299px)`]: {
          backgroundImage: `${overlayCode}, url('${encodeURI(src)}.1280.jpg')`,
        },
        [`@media (min-width: 501px) and (max-width: 899px)`]: {
          backgroundImage: `${overlayCode}, url('${encodeURI(src)}.800.jpg')`,
        },
        [`@media (max-width: 500px)`]: {
          backgroundImage: `${overlayCode}, url('${encodeURI(src)}.500.jpg')`,
        },
      }
    } else {
      return {
        backgroundImage: `url('${encodeURI(src)}.1280.jpg')`,
        [`(min-width: 2000px)`]: {
          backgroundImage: `url('${encodeURI(src)}.3840.jpg')`,
        },
        [`(min-width: 1300px) and (max-width: 1999px)`]: {
          backgroundImage: `url('${encodeURI(src)}.1920.jpg')`,
        },
        [`(min-width: 900px) and (max-width: 1299px)`]: {
          backgroundImage: `url('${encodeURI(src)}.1280.jpg')`,
        },
        [`(min-width: 501px) and (max-width: 899px)`]: {
          backgroundImage: `url('${encodeURI(src)}.800.jpg')`,
        },
        [`(max-width: 500px)`]: {
          backgroundImage: `url('${encodeURI(src)}.500.jpg')`,
        },
      }
    }
  }

  const bgClasses = makeStyles(theme => ({
    background: {
      ...GenerateBackgroundImages(overlay, overlayOpacity, src),
    },
  }))()

  return (
    <PageSection className={clsx(classes.root, bgClasses.background)} fullWidth fullHeight="firstElement">
      {children}
      {scrollCta && <ArrowDownIcon color={theme.palette.primary.main} size={48} className={classes.scrollCta} />}
    </PageSection>
  )
}

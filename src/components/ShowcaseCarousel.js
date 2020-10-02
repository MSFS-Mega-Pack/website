import React, { useEffect } from 'react'

import { Box, Button, Hidden, makeStyles, Typography } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import Link from './Link'

import carouselItems from '../data/carouselSlides'

const useCarouselStyles = makeStyles(theme => ({
  root: {
    background: 'black',
  },
  info: {
    padding: theme.spacing(2, 2),
    background: 'black',
    textAlign: 'center',
    '& p': {
      position: 'relative',
      color: '#fff',
      WebkitTextStroke: '2px black',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block',
      '&::after': {
        content: 'attr(data-text)',
        WebkitTextFillColor: 'white',
        WebkitTextStroke: 0,
        position: 'absolute',
        top: 0,
        left: 0,
      },
    },
  },
}))

const useCarouselItemStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    backgroundPosition: '50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    paddingBottom: '41.875%',
    [theme.breakpoints.only('sm')]: {
      paddingBottom: '50%',
    },
    [theme.breakpoints.only('xs')]: {
      height: '100vh',
      paddingBottom: 0,
    },
  },
  info: {
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
}))

const useCreditStyles = makeStyles(theme => ({
  root: {
    '& p': {
      position: 'relative',
      color: '#fff',
      WebkitTextStroke: '2px black',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block',
      '&::after': {
        content: 'attr(data-text)',
        WebkitTextFillColor: 'white',
        WebkitTextStroke: 0,
        position: 'absolute',
        top: 0,
        left: 0,
      },
    },
  },
  separator: {
    display: 'inline-block',
    color: theme.palette.primary.main,
    transform: 'scale(1.5)',
    transformOrigin: '50%',
    marginLeft: 12,
    marginRight: 12,
  },
}))

const useSlideStyles = makeStyles(theme => ({
  root: {
    color: '#fff',
    maxWidth: 924,
    padding: theme.spacing(4),
    width: '100%',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  title: { paddingBottom: theme.spacing(4) },
  text: { paddingBottom: theme.spacing(3) },
  button: { '& svg': { marginRight: theme.spacing() } },
}))

export default function ShowcaseCarousel() {
  useEffect(() => {
    // preload images
    carouselItems.forEach(item => {
      let i = new Image()
      i.src = item.src
    })
  })

  const classes = useCarouselStyles()

  return (
    <Carousel className={classes.root} navButtonsAlwaysInvisible indicators={false} interval={12000}>
      {carouselItems.map((item, i) => (
        <React.Fragment key={i}>
          <CarouselItem data={item} />

          <Hidden implementation="css" mdUp>
            <Box className={classes.info}>
              <ImageCredits image={item.image} />
            </Box>
          </Hidden>
        </React.Fragment>
      ))}
    </Carousel>
  )
}

function CarouselItem({ data }) {
  const classes = useCarouselItemStyles()

  const { image, slide } = data

  return (
    <Box
      className={classes.root}
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${encodeURI(image.src)})` }}
    >
      <SlideData slide={slide} />

      <Hidden implementation="css" smDown>
        <Box className={classes.info}>
          <ImageCredits image={image} />
        </Box>
      </Hidden>
    </Box>
  )
}

function SlideData(props) {
  const classes = useSlideStyles()

  const slide = props.slide || {}

  return (
    <Box className={classes.root}>
      <Typography className={classes.title} component="h2" variant="h3">
        {slide.title || ''}
      </Typography>
      <Typography className={classes.text} component="p" variant="h6">
        {slide.content || ''}
      </Typography>
      {slide.button && (
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          component={Link}
          noLinkStyling
          download={slide.button.isDownload}
          target={slide.button.newTab && '__blank'}
          rel={slide.button.newTab && 'noopener noreferrer'}
          externalLink={slide.button.url && slide.button.url.startsWith('https://')}
          url={slide.button.url}
        >
          {slide.button.icon}
          {slide.button.text}
        </Button>
      )}
    </Box>
  )
}

function ImageCredits({ image }) {
  const classes = useCreditStyles()

  return (
    <Box className={classes.root}>
      <Typography component="p" variant="body2" data-text={image.aircraft}>
        {image.aircraft}
      </Typography>
      <span className={classes.separator}> • </span>
      <Typography component="p" variant="body2" data-text={image.livery}>
        {image.livery}
      </Typography>
      <span className={classes.separator}> • </span>
      <Typography component="p" variant="body2" data-text={`Painted by ${image.author}`}>
        Painted by {image.author}
      </Typography>
    </Box>
  )
}

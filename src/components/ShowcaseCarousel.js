import { Box, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import Carousel from 'react-material-ui-carousel'

import quantas100 from '../img/demo/100-quantas-a320.jpg'
import airfranceSkyteam from '../img/demo/airfrance-skyteam-a320.jpg'
import asianaSkyteam from '../img/demo/asiana-a320.jpg'
import ba787classic from '../img/demo/ba-787-classic.jpg'
import baa320modern from '../img/demo/ba-a320-modern.jpg'
import dalCaravan from '../img/demo/dal-caravan.jpg'
import koreanAirA320 from '../img/demo/korean-air-a320.jpg'
import loganair from '../img/demo/loganair-tbm.jpg'
import malta from '../img/demo/malta-a320.jpg'
import norwegian from '../img/demo/norwegian-787.jpg'
import virgin from '../img/demo/virgin-787.jpg'

const carouselItems = [
  { aircraft: 'A320neo', livery: 'Qantas 100-year Anniversary', author: '@라즈#3444', src: quantas100 },
  { aircraft: 'A320neo', livery: 'Air France SkyTeam', author: '@Sasap#1148', src: airfranceSkyteam },
  { aircraft: 'A320neo', livery: 'Asiana Airlines SkyTeam', author: '@라즈#3444', src: asianaSkyteam },
  { aircraft: 'Boeing 787', livery: 'British Airways (Landor)', author: '@tomihbk#3833', src: ba787classic },
  { aircraft: 'A320neo', livery: 'British Airways', author: '@AlexK#8565', src: baa320modern },
  { aircraft: 'Cessna Grand Caravan 208 B', livery: 'Dodo Airlines', author: '@라즈#3444', src: dalCaravan },
  { aircraft: 'A320neo', livery: 'Korean Airlines', author: '@라즈#3444', src: koreanAirA320 },
  { aircraft: 'TBM 930', livery: 'LoganAir', author: '@Liquidpinky#8871', src: loganair },
  { aircraft: 'A320neo', livery: 'Malta Air', author: '@라즈#3444', src: malta },
  { aircraft: 'Boeing 787', livery: 'Norwegian', author: '@Tempo#2297', src: norwegian },
  { aircraft: 'Boeing 787', livery: 'Virgin Atlantic', author: '@Krake802#8172', src: virgin },
]

const carouselItemStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    paddingBottom: '41.875%',
    display: 'flex',
    backgroundPosition: '50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    maxHeight: 640,
    overflow: 'hidden',
  },
  info: {
    position: 'absolute',
    bottom: 16,
    left: 16,
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

export default function ShowcaseCarousel() {
  useEffect(() => {
    // preload images
    carouselItems.forEach(item => {
      let i = new Image()
      i.src = item.src
    })
  })

  return (
    <Carousel navButtonsAlwaysInvisible indicators={false} interval={12000}>
      {carouselItems.map((item, i) => (
        <CarouselItem key={i} data={item} />
      ))}
    </Carousel>
  )
}

function CarouselItem({ data }) {
  const classes = carouselItemStyles()

  return (
    <Box className={classes.root} style={{ backgroundImage: `url(${encodeURI(data.src)})` }}>
      <Box className={classes.info}>
        <Typography component="p" variant="body2" data-text={data.aircraft}>
          {data.aircraft}
        </Typography>
        <span className={classes.separator}> • </span>
        <Typography component="p" variant="body2" data-text={data.livery}>
          {data.livery}
        </Typography>
        <span className={classes.separator}> • </span>
        <Typography component="p" variant="body2" data-text={`Painted by ${data.author}`}>
          Painted by {data.author}
        </Typography>
      </Box>
    </Box>
  )
}

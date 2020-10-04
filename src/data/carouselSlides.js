import React from 'react'

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

import DownloadIcon from 'mdi-react/DownloadOutlineIcon'
import DiscordIcon from 'mdi-react/DiscordIcon'
import NewsIcon from 'mdi-react/NewspaperVariantMultipleOutlineIcon'
import PeopleIcon from 'mdi-react/AccountGroupOutlineIcon'

import constants from '../data/constants.json'

export default Object.freeze([
  {
    slide: {
      title: 'Get the mega pack',
      content: 'Download the latest version of the Liveries Mega Pack, containing over 400 real-world liveries',
      isMegapackDownloadSlide: true,
      button: {
        text: 'Download',
        icon: <DownloadIcon />,
      },
    },
    darken: 0.45,
    image: { aircraft: 'A320neo', livery: 'Qantas 100-year Anniversary', author: '@라즈#3444', src: quantas100 },
  },
  {
    slide: {
      title: 'Livery manager',
      content: "Download only the liveries you want, and get updates as they're released",
      button: {
        text: 'Download',
        icon: <DownloadIcon />,
        url: constants.keyUrls.managerGithubLatestRelease,
        newTab: true,
      },
    },
    darken: 0.45,
    image: { aircraft: 'A320neo', livery: 'Malta Air', author: '@라즈#3444', src: malta },
  },
  {
    slide: {
      title: 'Keep in touch',
      content: `Join our Discord server to chat with over ${constants.data.discordMembers.human} other avid flight simmers`,
      button: {
        text: 'Join',
        icon: <DiscordIcon />,
        url: constants.keyUrls.discordInvite,
        newTab: true,
      },
    },
    darken: 0.25,
    image: { aircraft: 'A320neo', livery: 'Air France SkyTeam', author: '@Sasap#1148', src: airfranceSkyteam },
  },
  {
    slide: {
      title: 'Want to get stuck in?',
      content: 'Read our blog, full of tutorials and more to help you create your own liveries',
      button: {
        text: 'Browse',
        icon: <NewsIcon />,
        url: '/blog',
      },
    },
    darken: 0.5,
    image: { aircraft: 'A320neo', livery: 'Asiana Airlines SkyTeam', author: '@라즈#3444', src: asianaSkyteam },
  },
  {
    slide: {
      title: 'Meet the team',
      content: "Curious who's behind this project? Look no further.",
      button: {
        text: 'Meet the team',
        icon: <PeopleIcon />,
        url: '/the-team',
      },
    },
    darken: 0.5,
    image: { aircraft: 'Boeing 787', livery: 'Norwegian', author: '@Tempo#2297', src: norwegian },
  },
  {
    darken: 0.5,
    image: { aircraft: 'A320neo', livery: 'British Airways', author: '@AlexK#8565', src: baa320modern },
  },
  {
    darken: 0.5,
    image: { aircraft: 'Cessna Grand Caravan 208 B', livery: 'Dodo Airlines', author: '@라즈#3444', src: dalCaravan },
  },
  {
    darken: 0.5,
    image: { aircraft: 'A320neo', livery: 'Korean Airlines', author: '@라즈#3444', src: koreanAirA320 },
  },
  {
    darken: 0.5,
    image: { aircraft: 'TBM 930', livery: 'LoganAir', author: '@Liquidpinky#8871', src: loganair },
  },
  {
    darken: 0.5,
    image: { aircraft: 'Boeing 787', livery: 'British Airways (Landor)', author: '@tomihbk#3833', src: ba787classic },
  },
  {
    darken: 0.4,
    image: { aircraft: 'Boeing 787', livery: 'Virgin Atlantic', author: '@Krake802#8172', src: virgin },
  },
])

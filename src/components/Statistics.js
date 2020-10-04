import React from 'react'

import { Box, makeStyles, Typography } from '@material-ui/core'

import DownloadOutlineIcon from 'mdi-react/DownloadOutlineIcon'
import AirplaneTakeoffIcon from 'mdi-react/AirplaneTakeoffIcon'
import PersonIcon from 'mdi-react/AccountOutlineIcon'

import CountUpOnScroll from './CountUpOnScroll'

import constants from '../data/constants.json'
import PageSection from './PageSection'

const useStyles = makeStyles(theme => ({
  statisticsContainer: {
    background: theme.palette.common.black,
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      borderTop: `8px solid ${theme.palette.secondary.main}`,
    },
  },
  statsContainer: {
    padding: theme.spacing(0, 2),
  },
  statistics: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      '& > div': {
        flexBasis: '33.333%',
      },
    },
  },
  statisticValue: {
    fontSize: theme.typography.pxToRem(56),
    fontWeight: 'bold',
    lineHeight: 1.2,
  },
  icon: {
    color: theme.palette.primary.main,
    paddingBottom: theme.spacing(),
    display: 'block',
    margin: 'auto',
  },
}))

export default function Statistics() {
  const classes = useStyles()

  return (
    <PageSection className={classes.statisticsContainer}>
      <Box className={classes.statistics}>
        <Box className={classes.statsContainer}>
          <AirplaneTakeoffIcon className={classes.icon} size={48} />
          <CountUpOnScroll className={classes.statisticValue} end={constants.data.liveries.display} suffix="+" />
          <Typography variant="h6">liveries</Typography>
        </Box>
        <Box className={classes.statsContainer}>
          <PersonIcon className={classes.icon} size={48} />
          <CountUpOnScroll className={classes.statisticValue} end={constants.data.liveryCreators.display} suffix="+" />
          <Typography variant="h6">contributors</Typography>
        </Box>
        <Box className={classes.statsContainer}>
          <DownloadOutlineIcon className={classes.icon} size={48} />
          <CountUpOnScroll className={classes.statisticValue} end={constants.data.downloads.thousands} suffix="K+" />
          <Typography variant="h6">downloads</Typography>
        </Box>
      </Box>
    </PageSection>
  )
}

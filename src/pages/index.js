import React from 'react'

import SEO from '../components/SEO'
import Page from '../components/Page'
import PageSection from '../components/PageSection'
import ShowcaseCarousel from '../components/ShowcaseCarousel'
import CountUpOnScroll from '../components/CountUpOnScroll'
import { Box, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  statistics: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      '& > *': {
        flexBasis: '33.333%',
      },
    },
  },
  statisticValue: {
    fontSize: theme.typography.pxToRem(56),
    fontWeight: 'bold',
  },
}))

export default function Home() {
  const classes = useStyles()

  return (
    <Page>
      <SEO title="Home">
        {/* <meta
          content="Beautiful Gatsby Material UI Business Starter. Tiny code. Well organized. Ready to customize and go."
          name="description"
        /> */}
      </SEO>
      <PageSection noPad fullWidth>
        <ShowcaseCarousel />
      </PageSection>
      <PageSection>
        <Box className={classes.statistics}>
          <Box p={2}>
            <CountUpOnScroll className={classes.statisticValue} end={400} suffix="+" />
            <Typography variant="h6">liveries</Typography>
          </Box>
          <Box p={2}>
            <CountUpOnScroll className={classes.statisticValue} end={90} suffix="+" />
            <Typography variant="h6">contributors</Typography>
          </Box>
          <Box p={2}>
            <CountUpOnScroll className={classes.statisticValue} end={50} suffix="K+" />
            <Typography variant="h6">downloads</Typography>
          </Box>
        </Box>
      </PageSection>
    </Page>
  )
}

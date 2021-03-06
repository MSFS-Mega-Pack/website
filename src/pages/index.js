import React from 'react'

import SEO from '../components/SEO'
import Page from '../components/Page'
import PageSection from '../components/PageSection'
import ShowcaseCarousel from '../components/ShowcaseCarousel'
import Link from '../components/Link'
import Statistics from '../components/Statistics'

import { Box, Button, makeStyles, Typography } from '@material-ui/core'

import TeamIcon from 'mdi-react/AccountGroupOutlineIcon'
import DownloadIcon from 'mdi-react/DownloadOutlineIcon'
import ManagerIcon from 'mdi-react/ToolboxOutlineIcon'
// import BlogIcon from 'mdi-react/NewspaperVariantMultipleOutlineIcon'

const useStyles = makeStyles(theme => ({
  panel: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3, 4, 4, 4),
    borderTop: `8px solid ${theme.palette.secondary.main}`,
    background: 'rgba(0, 0, 0, 0.6)',
    flex: '1',
    maxWidth: 800,
    flexBasis: '45%',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      '&:nth-child(1)': {
        marginRight: theme.spacing(4),
      },
      '&:nth-child(2)': {
        marginLeft: theme.spacing(4),
      },
    },
    [theme.breakpoints.only('md')]: {
      '&:nth-child(1)': {
        marginRight: theme.spacing(2),
      },
      '&:nth-child(2)': {
        marginLeft: theme.spacing(2),
      },
    },
    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%',
      marginBottom: theme.spacing(4),
      '&:last-child': {
        marginBottom: 0,
      },
    },
  },
}))

export default function Home() {
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

      <Statistics />

      <MainLinks />
    </Page>
  )
}

function MainLinks() {
  const classes = useStyles()

  return (
    <PageSection fullWidth>
      <Box display="flex" width="100%" justifyContent="center" flexWrap="wrap">
        <Box className={classes.panel}>
          <Typography variant="h3" component="h2" gutterBottom>
            Download the Megapack
          </Typography>
          <Typography variant="body1" paragraph>
            Over 100 people contribute in some way to the livery mega pack, whether it's by creating their own liveries, contributing to
            distribution costs, developing projects, or providing support to community members.
          </Typography>
          <Box m="auto" mb={0} width="max-content">
            <Button color="secondary" variant="outlined" component={Link} noLinkStyling startIcon={<TeamIcon />} url="/the-team">
              Meet the team
            </Button>
          </Box>
        </Box>
        <Box className={classes.panel}>
          <Typography variant="h3" component="h2" gutterBottom>
            The mega pack team
          </Typography>
          <Typography variant="body1" paragraph>
            Over 100 people contribute in some way to the livery mega pack, whether it's by creating their own liveries, contributing to
            distribution costs, developing projects, or providing support to community members.
          </Typography>
          <Box m="auto" mb={0} width="max-content">
            <Button color="secondary" variant="outlined" component={Link} noLinkStyling startIcon={<TeamIcon />} url="/the-team">
              Meet the team
            </Button>
          </Box>
        </Box>
        <Box className={classes.panel}>
          <Typography variant="h3" component="h2" gutterBottom>
            The mega pack team
          </Typography>
          <Typography variant="body1" paragraph>
            Over 100 people contribute in some way to the livery mega pack, whether it's by creating their own liveries, contributing to
            distribution costs, developing projects, or providing support to community members.
          </Typography>
          <Box m="auto" mb={0} width="max-content">
            <Button color="secondary" variant="outlined" component={Link} noLinkStyling startIcon={<TeamIcon />} url="/the-team">
              Meet the team
            </Button>
          </Box>
        </Box>
        {/* <Box className={classes.panel}>
          <Typography variant="h3" component="h2" gutterBottom>
            The checklist
          </Typography>
          <Typography variant="body1" paragraph>
            Check out our official blog, full to the brim with useful tutorials aimed for people new to livery creation, and for the more
            experienced, too.
          </Typography>
          <Box m="auto" mb={0} width="max-content">
            <Button color="secondary" variant="outlined" component={Link} noLinkStyling startIcon={<BlogIcon />} url="/blog">
              Read the blog
            </Button>
          </Box>
        </Box> */}
      </Box>
    </PageSection>
  )
}

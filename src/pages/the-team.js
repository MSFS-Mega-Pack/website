import React from 'react'

import SEO from '../components/SEO'
import Page from '../components/Page'
import PageSection from '../components/PageSection'
import ShowcaseCarousel from '../components/ShowcaseCarousel'
import CountUpOnScroll from '../components/CountUpOnScroll'
import { Box, makeStyles, Typography } from '@material-ui/core'

import HeroImage from '../components/HeroImage'
import Masonry from 'react-masonry-css'
import ContributorCard from '../components/ContributorCard'

import { getRandomImage } from '../data/images'
import Contributors from '../data/contributors'

const useStyles = makeStyles(theme => ({
  masonryGrid: {
    display: 'flex',
    marginTop: theme.spacing(4),
    marginLeft: -theme.spacing(),
    width: 'auto',
  },
  masonryColumn: {
    paddingLeft: theme.spacing(),
    backgroundClip: 'padding-box',
  },
}))

export default function TheTeam() {
  const classes = useStyles()

  return (
    <Page>
      <SEO title="The Team">
        {/* <meta
          content="Beautiful Gatsby Material UI Business Starter. Tiny code. Well organized. Ready to customize and go."
          name="description"
        /> */}
      </SEO>
      <HeroImage overlay src={getRandomImage()}>
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" m="auto" maxWidth={900} height="100%">
          <Typography gutterBottom variant="h1">
            The team
          </Typography>
          <Typography align="center" variant="h5" component="p">
            Discover the fantastic tight-knit community of people working to keep the livery mega pack running and up-to-date
          </Typography>
        </Box>
      </HeroImage>
      <PageSection>
        <Typography variant="h2" gutterBottom>
          Administration
        </Typography>
        <Typography paragraph variant="body1">
          These are the people who handle all the management stuff you don't see, such as file hosting, partnerships, and more. You can often
          catch them poking their heads out to help in the general chat.
        </Typography>
        <Masonry breakpointCols={{ default: 3, 640: 1, 940: 2 }} className={classes.masonryGrid} columnClassName={classes.masonryColumn}>
          {Contributors.administration.map((person, i) => (
            <ContributorCard key={i} avatar={person.avatar} name={person.name} role={person.role} description={person.description} />
          ))}
        </Masonry>
      </PageSection>
      <PageSection lighterBg>
        <Typography variant="h2" gutterBottom>
          Moderation
        </Typography>
        <Typography paragraph variant="body1">
          These fantastic people help to keep the server neat, while also chatting with others and helping out in support when they can. If you
          submit a livery, you'll be talking to one of these as they test it in-game.
        </Typography>
        <Masonry breakpointCols={{ default: 3, 640: 1, 940: 2 }} className={classes.masonryGrid} columnClassName={classes.masonryColumn}>
          {Contributors.moderation.map((person, i) => (
            <ContributorCard key={i} avatar={person.avatar} name={person.name} role={person.role} description={person.description} />
          ))}
        </Masonry>
      </PageSection>
    </Page>
  )
}

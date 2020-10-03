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
    justifyContent: 'center',
  },
  masonryColumn: {
    paddingLeft: theme.spacing(),
    backgroundClip: 'padding-box',
  },
}))

export default function TheTeam() {
  return (
    <Page>
      <SEO title="The Team">
        <meta
          content="Discover the fantastic tight-knit community of people working to keep the livery mega pack running and up-to-date"
          name="description"
        />
      </SEO>
      <HeroImage scrollCta overlay src={getRandomImage()}>
        <Box m="auto" maxWidth={900}>
          <Typography gutterBottom variant="h1">
            The team
          </Typography>
          <Typography variant="h5" component="p">
            Discover the fantastic tight-knit community of people working to keep the livery mega pack running and&nbsp;up-to-date
          </Typography>
        </Box>
      </HeroImage>

      <PageSection>
        <Typography variant="h2" gutterBottom>
          Administration
        </Typography>
        <Typography paragraph variant="body1">
          These are the people who handle all the management stuff you don't see, such as file hosting, partnerships, and more. You can often
          catch them poking their heads out to help in the general&nbsp;chat.
        </Typography>

        <ContributorCards contributors={Contributors.administration} />
      </PageSection>

      <PageSection lighterBg>
        <Typography variant="h2" gutterBottom>
          Submission testers
        </Typography>
        <Typography paragraph variant="body1">
          If you submit a livery, you'll be interacting with one (or more) of these great people as they test your creation in-game, and let you
          know of any&nbsp;problems.
        </Typography>

        <ContributorCards contributors={Contributors.submissionTesters} />
      </PageSection>

      <PageSection>
        <Typography variant="h2" gutterBottom>
          Moderation
        </Typography>
        <Typography paragraph variant="body1">
          These fantastic people help to keep the Discord community neat and tidy, while chatting with others and providing support when
          they&nbsp;can.
        </Typography>

        <ContributorCards contributors={Contributors.moderation} />
      </PageSection>

      <PageSection lighterBg>
        <Typography variant="h2" gutterBottom>
          Developers
        </Typography>
        <Typography paragraph variant="body1">
          It's the developer's jobs to make sure the website, livery manager and more run smoothly. Got an issue with one of these? Open a ticket
          and they'll help you as best they&nbsp;can.
        </Typography>

        <ContributorCards contributors={Contributors.development} />
      </PageSection>
    </Page>
  )
}

function ContributorCards({ contributors }) {
  const classes = useStyles()

  return (
    <Masonry breakpointCols={{ default: 3, 640: 1, 940: 2 }} className={classes.masonryGrid} columnClassName={classes.masonryColumn}>
      {contributors.map((person, i) => (
        <ContributorCard
          key={i}
          avatar={person.avatar}
          name={person.name}
          role={person.role}
          description={person.description}
          socials={person.socials}
        />
      ))}
    </Masonry>
  )
}

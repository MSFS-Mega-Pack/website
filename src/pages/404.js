import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'

import Page from '../components/Page'
import Link from '../components/Link'

import { getRandomImage } from '../data/images'
import HeroImage from '../components/HeroImage'

export default function Component() {
  return (
    <Page title="404: Not Found">
      <HeroImage overlay src={getRandomImage()}>
        <Box m="auto" maxWidth={900}>
          <Typography variant="h1">404: Not Found</Typography>
          <Typography gutterBottom variant="h3" component="h2">
            Flight plan not filed
          </Typography>
          <Typography paragraph variant="body1" component="p">
            We couldn't find the page you're looking for.
          </Typography>
          <Button variant="outlined" component={Link} noLinkStyling url="/">
            Home
          </Button>
        </Box>
      </HeroImage>
    </Page>
  )
}

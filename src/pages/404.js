import { Typography } from '@material-ui/core'
import React from 'react'
import Page from '../components/Page'

export default function Component() {
  return (
    <Page title="404 Not Found">
      <Typography gutterBottom variant="h1">
        404 Not Found
      </Typography>
      <Typography gutterBottom variant="h4">
        Flight plan not filed.
      </Typography>
      <Typography paragraph variant="body1">
        We couldn't find this page.
      </Typography>
    </Page>
  )
}

import React, { useState } from 'react'

import SEO from '../components/SEO'
import Page from '../components/Page'
import PageSection from '../components/PageSection'
import HeroImage from '../components/HeroImage'

import { Box, Button, Typography } from '@material-ui/core'

import { getRandomImage } from '../data/images'
import MegapackData from '../data/megapackData.json'

import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import utc from 'dayjs/plugin/utc'
dayjs.extend(localizedFormat)
dayjs.extend(utc)

import Link from '../components/Link'
import DownloadDialog from '../components/DownloadDialog'

export default function DownloadMegaPackPage() {
  return (
    <Page>
      <SEO title="Download">
        <meta content="Download the latest version of the livery mega pack. It's all just one click away." name="description" />
      </SEO>
      <HeroImage scrollCta overlay src={getRandomImage()}>
        <Box m="auto" maxWidth={900}>
          <Typography gutterBottom variant="h1">
            Mega pack XI
          </Typography>
          <Typography variant="h5" component="p">
            Dropping {dayjs('2020-10-10 16:00:00 UTC').format('dddd LL LT')}
          </Typography>
        </Box>
      </HeroImage>

      <PageSection>
        <Typography variant="h2" gutterBottom>
          Download
        </Typography>
        <Typography paragraph variant="h6" component="p">
          Current version is <strong>{MegapackData.currentVersion}</strong>, released on {dayjs(MegapackData.date).utc().format('LL')}
        </Typography>
        <Typography paragraph variant="body1">
          The livery mega pack is a very large ZIP archive (approx. {MegapackData.size.gigabytes} GB). This can take a long time to download on
          some internet connections. A typical 30 Mbps connection will take approximately{' '}
          {Math.ceil((MegapackData.size.gigabytes * 1000 * 8) / 30 / 60)} minutes to download the pack.
        </Typography>
        <Typography paragraph variant="body1">
          <strong>
            If you don't want all the liveries, consider using the <Link url="/manager">livery manager application</Link>. Select the liveries
            you'd like to use, then click Download. Everything else is done automatically.
          </strong>
        </Typography>
        <DownloadButtons />
      </PageSection>
    </Page>
  )
}

// extracted to separate component to stop random image update
// due to state change (causing rerender)
function DownloadButtons() {
  const [downloadDialogOpen, setDownloadDialogOpen] = useState(false)

  return (
    <>
      <Box display="flex" justifyContent="space-evenly" flexWrap="wrap" mt={4}>
        <Button style={{ marginRight: 8 }} component={Link} url="/manager" noLinkStyling>
          Get the livery manager
        </Button>
        <Button variant="outlined" onClick={() => setDownloadDialogOpen(true)}>
          Download Megapack X
        </Button>
      </Box>
      {downloadDialogOpen && <DownloadDialog onClose={() => setDownloadDialogOpen(false)} />}
    </>
  )
}

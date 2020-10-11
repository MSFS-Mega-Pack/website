import { Box, Button, InputAdornment, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'

import Page from '../../components/Page'
import Link from '../../components/Link'
import HeroImage from '../../components/HeroImage'

import { getRandomImage } from '../../data/images'
import PageSection from '../../components/PageSection'
import clsx from 'clsx'

export default function LiveryManifestPage() {
  return (
    <Page title="Livery Manifest Creator">
      <HeroImage scrollCta overlay src={getRandomImage()}>
        <Box m="auto" maxWidth={900}>
          <Typography gutterBottom variant="h1">
            Livery Manifest Creator
          </Typography>
          <Typography variant="h5" component="p">
            We need to know a little about your liveries so that we can keep an up-to-date list of submissions.
          </Typography>
        </Box>
      </HeroImage>
      <ManifestCreator />
    </Page>
  )
}

const useStyles = makeStyles(theme => ({
  helperText: {
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.text.secondary,
    margin: theme.spacing(0.5, 0, 3, 0),
    '&:last-child': {
      margin: theme.spacing(0.5, 0, 0, 0),
    },
  },
  error: {
    color: theme.palette.error.main,
  },
}))

function ManifestCreator() {
  const [manifestData, setManifestData] = useState({
    title: '',
    description: '',
    airline: '',
    aircraft: '',
    liveryName: '',
    author: {
      discord: '',
      msfsforums: '',
      twitter: '',
    },
  })

  const classes = useStyles()

  return (
    <PageSection>
      <Box mb={4}>
        <Typography gutterBottom variant="h2">
          Livery info
        </Typography>
        <Typography paragraph variant="body1">
          You only need to fill in fields labelled with a star (*). Other fields are optional. Please also make sure your livery has a good
          thumbnail, as this will be shown to users that use the <Link url="/manager">Livery Manager</Link>.
        </Typography>
      </Box>
      <form>
        <Paper variant="outlined">
          <Box p={4}>
            <Typography gutterBottom variant="h4" component="h3">
              Basic info
            </Typography>

            <TextField
              required
              fullWidth
              label="Livery name"
              placeholder="E.g. Norwegian Air Shuttle x UNICEF (LN-NGE)"
              error={manifestData.title.length > 80}
              value={manifestData.title}
              onChange={e => setManifestData({ ...manifestData, title: e.currentTarget.value || '' })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" className={clsx({ [classes.error]: manifestData.title.length > 80 })}>
                    {80 - manifestData.title.length}
                  </InputAdornment>
                ),
              }}
            />
            <p className={classes.helperText}>
              Max 80 characters. Should describe the livery as a whole. Don't include the aircraft type, as we show that anyway.
            </p>

            <TextField
              required
              fullWidth
              label="Livery description"
              multiline
              rows={4}
              placeholder={
                'E.g. Special commemorative Norwegian x UNICEF livery for LN-NGE. Used to carry cargo and people for humanitarian aid flights across the world, as well as for normal passenger flights. For over a decade, Norwegian have partnered with UNICEF for aid work worldwide.'
              }
              error={manifestData.description.length > 400}
              value={manifestData.description}
              onChange={e => setManifestData({ ...manifestData, description: e.currentTarget.value || '' })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" className={clsx({ [classes.error]: manifestData.description.length > 400 })}>
                    {400 - manifestData.description.length}
                  </InputAdornment>
                ),
              }}
            />
            <p className={classes.helperText}>
              Max 400 characters. Should describe the livery in some detail. As a guide, try to include the registration (if applicable), the
              livery year, airline, any special features, etc.
            </p>
          </Box>
        </Paper>
      </form>
    </PageSection>
  )
}

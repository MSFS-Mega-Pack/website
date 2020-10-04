import React from 'react'

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core'

import MegapackData from '../data/megapackData.json'
import { useSnackbar } from 'notistack'

export default function DownloadDialog({ onClose }) {
  const { enqueueSnackbar } = useSnackbar()

  return (
    <Dialog onClose={onClose} open>
      <DialogTitle>Download mega pack</DialogTitle>
      <DialogContent>
        <Typography variant="body1" paragraph component="p">
          Downloading the mega pack can take anywhere up to 2 hours on slower connections. Be sure that you've got enough time to complete the
          download.
        </Typography>
        <Typography variant="body1" paragraph component="p">
          <strong>The mega pack is approximately {MegapackData.size.gigabytes} GB.</strong>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={() => onClose()}>
          Close
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            enqueueSnackbar('Download starting...', { variant: 'success' })
            window.open(MegapackData.size.url, '_blank')
            onClose()
          }}
        >
          Download
        </Button>
      </DialogActions>
    </Dialog>
  )
}

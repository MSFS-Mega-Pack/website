import React from 'react'

import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: 280,
    margin: 'auto',
    marginBottom: theme.spacing(2),
    '& header': {
      textAlign: 'center',
    },
  },
  padBelow: { '&:not(:last-child)': { marginBottom: theme.spacing(0.75) } },
}))

export default function ContributorCard({ name, role, avatar, description }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <header>
          {avatar && <img src={avatar} alt={`Avatar of ${name}`} />}
          <Typography className={classes.padBelow} variant="h5" component="h3">
            {name}
          </Typography>
          <Typography className={classes.padBelow} variant="body2" color="textSecondary">
            {role}
          </Typography>
          {description && (
            <Typography className={classes.padBelow} variant="body1">
              {description}
            </Typography>
          )}
        </header>
      </CardContent>
    </Card>
  )
}

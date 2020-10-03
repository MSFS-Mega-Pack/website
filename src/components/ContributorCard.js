import React from 'react'

import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'
import Link from './Link'

import GitHub from 'mdi-react/GithubIcon'
import Twitter from 'mdi-react/TwitterIcon'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

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
  avatar: {
    maxWidth: '100%',
    width: 150,
    height: 150,
    objectFit: 'cover',
    borderRadius: '50%',
  },
  socialList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: `${theme.spacing()}px`,
  },
}))

const useSocialLinkStyles = makeStyles(theme => ({
  socialLink: {
    display: 'inline-flex',
  },
  socialIcon: {
    verticalAlign: 'middle',
    marginRight: 2,
    paddingBottom: 4,
  },
  socialLinkContent: {
    paddingRight: 4,
  },
}))

export default function ContributorCard({ name, role, avatar, description, socials }) {
  const classes = useStyles()

  return (
    <Card component="article" className={classes.root}>
      <CardContent>
        <header>
          {avatar && (
            <LazyLoadImage
              width={150}
              height={150}
              effect="blur"
              className={classes.avatar}
              placeholderSrc={avatar.placeholder}
              src={avatar.src}
              alt={`Avatar of ${name}`}
            />
          )}
          <Typography className={classes.padBelow} variant="h5" component="h3">
            {name}
          </Typography>
          <Typography className={classes.padBelow} variant="body2" color="textSecondary">
            {role}
          </Typography>
          {description && (
            <Typography className={classes.padBelow} variant="body2">
              {description}
            </Typography>
          )}
          {socials && (
            <section className={classes.socialList}>
              {socials.github && <SocialLink icon={GitHub} username={socials.github} url={`https://github.com/${socials.github}`} />}
              {socials.twitter && <SocialLink icon={Twitter} username={socials.twitter} url={`https://twitter.com/${socials.twitter}`} />}
            </section>
          )}
        </header>
      </CardContent>
    </Card>
  )
}

function SocialLink({ username, url, icon: Icon }) {
  const classes = useSocialLinkStyles()

  return (
    <Typography component={Link} externalLink url={url} className={classes.socialLink} variant="body2">
      <span className={classes.socialLinkContent}>
        <Icon className={classes.socialIcon} />
        {username}
      </span>
    </Typography>
  )
}

import React from 'react'

import SEO from '../components/SEO'
import Page from '../components/Page'
import PageSection from '../components/PageSection'
import ShowcaseCarousel from '../components/ShowcaseCarousel'

export default function Home() {
  return (
    <Page title="Gatsby Material UI Business Starter">
      <SEO title="Home">
        <meta
          content="Beautiful Gatsby Material UI Business Starter. Tiny code. Well organized. Ready to customize and go."
          name="description"
        />
      </SEO>
      <PageSection noPad fullWidth>
        <ShowcaseCarousel />
      </PageSection>
    </Page>
  )
}

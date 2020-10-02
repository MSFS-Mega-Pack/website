import React from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

export default function CountUpOnScroll({ end, prefix, suffix, className, ...props }) {
  const [startCountUp, setStartCountUp] = React.useState(false)

  return (
    <CountUp end={end} start={startCountUp} duration={2.5} suffix={suffix} prefix={prefix} {...props}>
      {({ countUpRef }) => (
        <VisibilitySensor onChange={vis => vis && setStartCountUp(true)} delayedCall>
          <span className={className} ref={countUpRef} />
        </VisibilitySensor>
      )}
    </CountUp>
  )
}

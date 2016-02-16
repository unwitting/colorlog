import React from 'react'

import ExternalLink from './ExternalLink.jsx'

import css from './PaletteText.css'

export default function PaletteText(props) {
  return (
    <div className={css.paletteText}>
      {props.text}
      <span className={css.by}> a Colorlog by </span>
      <ExternalLink href={`https://twitter.com/${props.user}`}>@{props.user}</ExternalLink>
    </div>
  )
}

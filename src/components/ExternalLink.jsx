import React from 'react'

import css from './ExternalLink.css'

export default function ExternalLink(props) {
  return (<a className={css.link} href={props.href} target='_blank'>{props.children}</a>)
}

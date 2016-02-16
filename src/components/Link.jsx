import React from 'react'

import css from './Link.css'

export default function Link(props) {
  return (
    <a
      className={`${css.link} ${props.highlight ? css.highlight : ''} ${props.external ? css.external : ''}`}
      href={props.href}
      target={props.external ? '_blank' : null}>
      {props.children}
    </a>
  )
}

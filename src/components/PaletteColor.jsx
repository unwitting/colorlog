import React from 'react'

import css from './PaletteColor.css'

export default function PaletteColor(props) {
  return (
    <div className={css.paletteColor} style={{backgroundColor: `#${props.hex}`}}>
      <span className={css.text}>{props.text}</span>
    </div>
  )
}

import React from 'react'

import css from './PaletteColor.css'

export default function PaletteColor(props) {
  const hasText = !!props.text && props.text.length > 0
  return (
    <div className={`${css.paletteColor} ${props.inEditor ? css.inEditor : css.inViewer}`} style={{backgroundColor: `#${props.hex}`}}>
      {hasText ? <span className={css.text}>{props.text}</span> : null}
    </div>
  )
}

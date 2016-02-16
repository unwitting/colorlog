import React from 'react'

import Palette from './Palette.jsx'
import PaletteText from './PaletteText.jsx'

import css from './Viewer.css'

export default function Viewer(props) {

  return (
    <div className={css.viewer}>
      <Palette colors={props.colors} />
      <PaletteText text={props.text} user={props.user} />
    </div>
  )

}

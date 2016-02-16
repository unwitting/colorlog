import React from 'react'

import PaletteColor from './PaletteColor.jsx'

import css from './Palette.css'

export default function Palette(props) {

  return (
    <div className={css.palette}>
      {props.colors.map(color => <PaletteColor key={color.hex} {...color} />)}
    </div>
  )

}

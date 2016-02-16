import React from 'react'

import PaletteColor from './PaletteColor.jsx'

import css from './Palette.css'

class Palette extends React.Component {

  render() {
    return (
      <div className={css.palette}>
        {this.props.colors.map(color => <PaletteColor key={color.hex} {...color} />)}
      </div>
    )
  }

}

export default Palette

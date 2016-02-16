import React from 'react'

import Palette from './Palette.jsx'
import PaletteText from './PaletteText.jsx'

import css from './Viewer.css'

class Viewer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={css.viewer}>
        <Palette colors={this.props.colors} />
        <PaletteText text={this.props.text} user={this.props.user} />
      </div>
    )
  }

}

export default Viewer

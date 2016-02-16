import React from 'react'

import Intro from './Intro.jsx'
import PaletteColor from './PaletteColor.jsx'
import PaletteColorChooser from './PaletteColorChooser.jsx'

import css from './Palette.css'

class Palette extends React.Component {

  constructor(props) {
    super(props)
    this.state = {colors: props.colors}
  }

  render() {
    const colors = this.state.colors;
    return (
      <div className={css.palette}>
        {!colors || colors.length == 0 ?
          <Intro />
        :
          colors.map(color => <PaletteColor key={color.hex} {...color} />)
        }
        {this.props.editable && colors.length < 5 ? <PaletteColorChooser editor={this.props.editor} /> : null}
      </div>
    )
  }

}

export default Palette

import React from 'react'

import Palette from './Palette.jsx'
import PaletteText from './PaletteText.jsx'

import css from './Editor.css'

import * as urlLoader from '../libs/url_loader.jsx'

class Editor extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      colors: props.colors || [],
      text: props.text || '',
      user: props.user || '',
      published: props.published === undefined ? false : props.published,
    }
  }

  addColor(data) {
    let colors = this.state.colors;
    colors.push(data)
    this.setState({colors})
  }

  save() {
    urlLoader.save({
      colors: this.state.colors,
      text: this.state.text,
      user: this.state.user,
      published: this.state.published,
    })
  }

  setMetaAndPublish(data) {
    urlLoader.save({
      colors: this.state.colors,
      text: data.text,
      user: data.user,
      published: true,
    })
  }

  render() {
    return (
      <div className={css.editor}>
        <Palette colors={this.state.colors} editable={true} editor={this} />
        {!!this.state.colors && this.state.colors.length ?
          <PaletteText
            text={this.state.text}
            user={this.state.user}
            editable={true}
            editor={this} />
        : null}
      </div>
    )
  }

}

export default Editor

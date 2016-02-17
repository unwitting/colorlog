import React from 'react'

import css from './PaletteColorChooser.css'

class PaletteColorChooser extends React.Component {

  constructor(props) {
    super(props)
    this.state = {hex: null, text: null, initialRandomHex: this.getRandomColor()}
  }

  getRandomColor() {
    let col = '#'
    let chars = '0123456789ABCDEF'
    for (let i = 0; i < 6; i++) {
      const char = chars.charAt(Math.floor(Math.random() * chars.length))
      col = `${col}${char}`
    }
    return col
  }

  onHexChange(e) {
    let hex = e.target.value
    if (hex.length > 0 && hex.charAt(0) !== '#') {
      hex = `#${hex}`
    }
    if (!!hex.match(/^#?[0-9a-fA-F]*$/)) {
      this.setState({hex})
    }
  }

  onSave() {
    this.props.editor.addColor({
      hex: this.state.hex.replace(/#/g, ''),
      text: this.state.text,
    })
    this.setState({
      hex: null,
      text: null
    })
    this.props.editor.save()
  }

  onTextChange(e) {
    this.setState({text: e.target.value})
  }

  render() {
    const hasValidColor = !!this.state.hex && (
      !!this.state.hex.match(/^#[0-9a-fA-F]{3}$/) || !!this.state.hex.match(/^#[0-9a-fA-F]{6}$/)
    )
    const demoCol = hasValidColor ? this.state.hex : this.state.initialRandomHex
    return (
      <div className={css.paletteColorChooser}>
        <div className={css.demo} style={{backgroundColor: demoCol}} />
        <div className={css.explainer}>Add Color</div>
        <div className={css.inputWrapper}>
          <input
            value={this.state.hex}
            type='text'
            className={`${css.hexInput} ${hasValidColor ? '' : css.invalid}`}
            placeholder={this.state.initialRandomHex}
            onChange={this.onHexChange.bind(this)} />
        </div>
        <div className={css.inputWrapper}>
          <textarea
            value={this.state.text}
            className={css.textInput}
            placeholder='Describe it'
            onChange={this.onTextChange.bind(this)} />
        </div>
        <div className={css.inputWrapper}>
          {hasValidColor ?
          <button
            className={css.saveButton}
            onClick={this.onSave.bind(this)}>
            +
          </button>
          : null}
        </div>
      </div>
    )
  }

}

export default PaletteColorChooser

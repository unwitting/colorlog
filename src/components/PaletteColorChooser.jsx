import React from 'react'

import css from './PaletteColorChooser.css'

class PaletteColorChooser extends React.Component {

  constructor(props) {
    super(props)
    this.state = {hex: null, text: null}
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
    return (
      <div className={css.paletteColorChooser}>
        <div className={css.demo} style={{backgroundColor: `${this.state.hex}`}} />
        <div className={css.explainer}>Add Color</div>
        <div className={css.inputWrapper}>
          <input
            value={this.state.hex}
            type='text'
            className={`${css.hexInput} ${hasValidColor ? '' : css.invalid}`}
            placeholder='#FFFFFF'
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
          <button disabled={!hasValidColor} className={css.saveButton} onClick={this.onSave.bind(this)}>+</button>
        </div>
      </div>
    )
  }

}

export default PaletteColorChooser

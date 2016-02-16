import React from 'react'

import Link from './Link.jsx'

import css from './PaletteText.css'

class PaletteText extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      text: props.text,
      user: props.user,
    }
  }

  onPublish() {
    this.props.editor.setMetaAndPublish({
      text: this.state.text,
      user: this.state.user,
    })
  }

  onRestart() {
    const loc = window.location
    window.location.href = `${loc.protocol}//${loc.hostname}${!!loc.port ? ':' + loc.port : ''}${loc.pathname}`
  }

  onTextChange(e) {
    this.setState({text: e.target.value})
  }

  onUserChange(e) {
    this.setState({user: e.target.value})
  }

  renderEditor() {
    const hasText = !!this.state.text && this.state.text.length > 0
    return (
      <div className={css.paletteText}>
        <input
          value={this.state.text}
          onChange={this.onTextChange.bind(this)}
          type='text'
          className={`${css.textInput} ${hasText ? '' : css.invalid}`}
          placeholder={`Give your palette a name`} />
        <input
          value={this.state.user}
          onChange={this.onUserChange.bind(this)}
          type='text'
          className={css.userInput}
          placeholder={`Enter your Twitter username`} />
        <button
          disabled={!hasText}
          className={css.publishButton}
          onClick={this.onPublish.bind(this)}>Publish</button>
        <button
          className={css.restartButton}
          onClick={this.onRestart.bind(this)}>Restart</button>
      </div>
    )
  }

  renderViewer() {
    const loc = window.location
    const home = `${loc.protocol}//${loc.hostname}${!!loc.port ? ':' + loc.port : ''}${loc.pathname}`
    return (
      <div className={css.paletteText}>
        {this.state.text}
        {this.state.user && this.state.user.length > 0 ?
          <span>
            <span className={css.by}>, a <Link href={home}>Colorlog</Link> by </span>
            <Link external={true} href={`https://twitter.com/${this.state.user}`}>@{this.state.user}</Link>
          </span>
        :
          <span className={css.by}>, a <Link highlight={true} href={home}>Colorlog</Link></span>
        }
      </div>
    )
  }

  render() {
    return this.props.editable ? this.renderEditor() : this.renderViewer()
  }

}

export default PaletteText

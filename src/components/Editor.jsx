import React from 'react'

import css from './Editor.css'

class Editor extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={css.editor}>EDITOR</div>
    )
  }

}

export default Editor

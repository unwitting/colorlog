import React from 'react'
import {render} from 'react-dom'

import Editor from './components/Editor.jsx'
import Viewer from './components/Viewer.jsx'

import css from './index.css'

import * as urlLoader from './libs/url_loader.jsx'

class App extends React.Component {

  render () {
    return <div className={css.app}>{this.props.view ? <Viewer {...this.props} /> : <Editor {...this.props} />}</div>
  }

}

var urlData = urlLoader.load()
if (!!urlData) {
  console.log(urlData.data)
  render(<App view={urlData.data.published} {...urlData.data} />, document.getElementById('react'))
  document.title = `${urlData.data.text} by @${urlData.data.user} - Colorlog`
} else {
  render(<App view={false} />, document.getElementById('react'))
  // urlLoader.save({
  //   colors: [
  //     {hex: 'EB322F', text: `The country's national color. Think hanging banners with hammers and sickles.`},
  //     {hex: 'F2EDE1', text: `A whitewash used pervasively on walls inside and out. Often stained with black through age.`},
  //     {hex: 'E8BC15', text: `Beerlao-sponsored sings used by restaurants, shops, bars, you name it, nationwide.`},
  //     {hex: 'C94F1E', text: `The rust-red of Lao dirt. When it catches the sunset light it's magic.`},
  //     {hex: '21750C', text: `Lush, lush vegetation. Think endless and vast mountains covered in woods.`},
  //   ],
  //   text: 'Laos',
  //   user: 'unwttng',
  //   published: true,
  // })
}
